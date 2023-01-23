import {useState} from 'react'
import axios from 'axios'

const Add = (props) => {

    const [newName, setNewName] = useState('')
    const [newNickname, setNewNickname] = useState('')
    const [newCountry, setNewCountry] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newWeightclass, setNewWeightclass] = useState('')
    const [newRecord, setNewRecord] = useState('')
    const [newImgurl, setNewImgurl] = useState('')

    // POST FORM FUNCTIONS
    const handleNewName = (event) => {
        setNewName(event.target.value)
    }

    const handleNewNickname = (event) => {
        setNewNickname(event.target.value)
    }

    const handleNewCountry = (event) => {
        setNewCountry(event.target.value)
    }

    const handleNewAge = (event) => {
        setNewAge(event.target.value)
    }

    const handleNewWeightclass = (event) => {
        setNewWeightclass(event.target.value)
    }

    const handleNewRecord = (event) => {
        setNewRecord(event.target.value)
    }

    const handleNewImgurl = (event) => {
        setNewImgurl(event.target.value)
    }

    // POST ROUTE
    const handleNewFighterForm = (event) => {
        event.preventDefault()
        axios.post(
            'https://fighterbackend.herokuapp.com/fighter',
            {
                name: newName,
                nickname: newNickname,
                country: newCountry,
                age: newAge,
                weightclass: newWeightclass,
                record: newRecord,
                imgUrl: newImgurl,
            }
        ).then(() => {
            axios   
                .get('https://fighterbackend.herokuapp.com/fighter')
                .then((response) => {
                    props.setFilteredResults(response.data)
                })
        })
        event.target.reset()
    }

    return (
        <div>
            <section className="collapse drop-form-div" id="formSection">
                <form className='drop-form' onSubmit={handleNewFighterForm}>
                    <div className='form-input'>
                    Name: <input type="text" className="form-control" onChange={handleNewName} />
                    </div>
                    <div className='form-input'>
                    Nickname: <input type="text" className="form-control" onChange={handleNewNickname} />
                    </div>
                    <div className='form-input'>
                    Country: <input type="text" className="form-control" onChange={handleNewCountry} />
                    </div>
                    <div className='form-input'>
                    Age: <input type="number" className="form-control" onChange={handleNewAge} />
                    </div>
                    <div className='form-input'>
                    Weightclass: <input type="text" className="form-control" onChange={handleNewWeightclass} />
                    </div>
                    <div className='form-input'>
                    Record: <input type="text" className="form-control" onChange={handleNewRecord} />
                    </div>
                    <div className='form-input'>
                    Image Url: <input type="text" className="form-control" onChange={handleNewImgurl} />
                    </div>
                    
                    <button className='btn btn-danger submit-drop-form' data-bs-toggle="collapse" href={`#formSection`} type="submit">Submit Athlete</button>
                </form>
            </section>
        </div>
    )
  }
  
  export default Add