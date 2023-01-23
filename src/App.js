import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import DisplayCards from './components/DisplayCards'
import Add from './components/add';
import ShowCard from './components/ShowCard'

function App() {

    const [fighters, setFighters] = useState([])

    const [showCard, setShowCard] = useState(false)
    const [showFighter, setShowFighter] = useState([])

    const [searchInput, setSearchInput] = useState('')
    const [filteredResults, setFilteredResults]  = useState([])


    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchValue.length > 0) {
            const searchResults = fighters.filter((results) => {
                return Object.values(results).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
        setFilteredResults(searchResults)
        } else {
        setFilteredResults(fighters)
        }
    }

    const cardDisplay = (results) => {
        setShowCard(!showCard)
        setShowFighter(results)
    }

    // GET ROUTE
    useEffect(() => {
        axios
            .get('https://fighterbackend.herokuapp.com/fighter')
            .then((response) => {
                setFighters(response.data)
                setFilteredResults(response.data)
            })
    }, [])

    // DELETE ROUTE
    const handleDelete = (fighterData) => {
        console.log(fighterData._id)
        axios
            .delete(`https://fighterbackend.herokuapp.com/fighter/${fighterData.fighter_id}`)
            .then(() => {
                axios
                    .get('https://fighterbackend.herokuapp.com/fighter')
                    .then((response) => {
                        setFilteredResults(response.data)
                    })
                })
        cardDisplay()
    }


    return (
        <>
             <nav className="navbar navbar-light">
                <div className="container-fluid mt-4">
                    
                    {/* <div className="d-flex me-4">
                        <button className="btn" type="submit">Sign In</button>
                    </div> */}
                    <div class="text=center">
                      <a href=".">
                        <img src='https://1000logos.net/wp-content/uploads/2017/06/Logo-UFC.png' className='img-fluid' class='rounded mx-auto d-block'width='25%'alt="UFC"></img>
                      </a>  
                    </div>
                </div>
            </nav>
            <button className="btn m-5" class='rounded mx-auto d-block' data-bs-toggle="collapse" href={`#formSection`} aria-expanded="false" aria-controls={`#formSection`}>
                        Add New Athlete
            </button>
                    <Add setFighters={setFighters} setFilteredResults={setFilteredResults}/>
            <div>
                <form className='d-flex justify-content-center'>
                    <input className='form-control w-50 my-4' type="text" onChange={(event) => searchItems(event.target.value)}/>
                </form>
                <div className='d-flex justify-content-center'>
                  <button className='btn m-4' onClick={(event) => searchItems('Flyweight')}>Flyweight</button>
                  <button className='btn m-4' onClick={(event) => searchItems('Bantamweight')}>Bantamweight</button>
                  <button className='btn m-4' onClick={(event) => searchItems('Featherweight')}>Featherweight</button>
                  <button className='btn m-4' onClick={(event) => searchItems('Lightweight')}>Lightweight</button>
                  <button className='btn m-4' onClick={(event) => searchItems('Welterweight')}>Welterweight</button>
                  <button className='btn m-4' onClick={(event) => searchItems('Middleweight')}>Middleweight</button>
                  <button className='btn m-4' onClick={(event) => searchItems('Lightheavyweight')}>Lightheavyweight</button>
                  <button className='btn m-4' onClick={(event) => searchItems('Heavyweight')}>Heavyweight</button>
                </div>
                <div class="text=center">
                  <button className='btn btn-danger' class='rounded mx-auto d-block' onClick={(event) => searchItems('')}>Clear Search</button>
                </div>  
            </div>
            <div>
                { showCard ?
                <>
                    <ShowCard filteredResults={filteredResults} setFilteredResults={setFilteredResults} fighters={fighters} showFighter={showFighter} setShowFighter={setShowFighter} cardDisplay={cardDisplay} handleDelete={handleDelete} setFighters={setFighters}/>
                </>
                :
                <>
                    <div className='row'>
                        {filteredResults.map((filteredResults) => {
                            return (
                                <>
                                    <DisplayCards filteredResults={filteredResults} setFighters={setFighters} handleDelete={handleDelete} cardDisplay={cardDisplay}/>
                                </>
                            )
                        })}
                    </div>
                </>
                }
            </div>
            <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="." class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Frontend</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Backend</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Portfolio</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">© BUILT BY MATTHEW CHIN 2023</p>
  </footer>
        </>
    )
}

export default App;
