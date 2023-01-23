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
            .get('http://localhost:3000/fighter')
            .then((response) => {
                setFighters(response.data)
                setFilteredResults(response.data)
            })
    }, [])

    // DELETE ROUTE
    const handleDelete = (fighterData) => {
        console.log(fighterData._id)
        axios
            .delete(`http://localhost:3000/fighter/${fighterData.fighter_id}`)
            .then(() => {
                axios
                    .get('http://localhost:3000/fighter')
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
                    
                    <div className="d-flex me-4">
                        <button className="btn" type="submit">Sign In</button>
                    </div>
                </div>
            </nav>
            <div>
                <form className='d-flex justify-content-center'>
                    <input className='form-control w-50 my-4' type="text" onChange={(event) => searchItems(event.target.value)}/>
                </form>
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
                    <button className="btn m-5" data-bs-toggle="collapse" href={`#formSection`} aria-expanded="false" aria-controls={`#formSection`}>
                        Add New Athlete
                    </button>
                    <Add setFighters={setFighters} setFilteredResults={setFilteredResults}/>
                </>
                }
            </div>
            
        </>
    )
}

export default App;
