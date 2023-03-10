import {useState} from 'react'
import axios from 'axios'

const Edit = (props) => {

    const [updatedName, setUpdatedName] = useState()
    const [updatedNickname, setUpdatedNickname] = useState()
    const [updatedCountry, setUpdatedCountry] = useState()
    const [updatedAge, setUpdatedAge] = useState()
    const [updatedWeightclass, setUpdatedWeightclass] = useState()
    const [updatedRecord, setUpdatedRecord] = useState()
    const [updatedImgurl, setUpdatedImgurl] = useState()

    const handleNameUpdate = (event) => {   
        setUpdatedName(event.target.value)
    }

    const handleNicknameUpdate = (event) => {  
        setUpdatedNickname(event.target.value) 
    }

    const handleCountryUpdate = (event) => {   
        setUpdatedCountry(event.target.value)
    }

    const handleAgeUpdate = (event) => {
        setUpdatedAge(event.target.value)
    }

    const handleWeightclassUpdate = (event) => {
        setUpdatedWeightclass(event.target.value)
    }

    const handleRecordUpdate = (event) => {
        setUpdatedRecord(event.target.value)
    }

    const handleImgurlUpdate = (event) => {
        setUpdatedImgurl(event.target.value)
    }

    // PUT ROUTE
    const handleUpdateForm = (event) => {
        event.preventDefault();

        axios.put(
            `https://fighterbackend.herokuapp.com/fighter`+`${props.showFighter.fighter_id}`,
            {
                
                name: updatedName,
                nickname: updatedNickname,
                country: updatedCountry,
                age: updatedAge,
                weightclass: updatedWeightclass,
                record: updatedRecord,
                imgUrl: updatedImgurl
            }
        ).then(() => {
            axios
                .get(`https://fighterbackend.herokuapp.com/fighter`)
                .then((response) => {
                    props.setFilteredResults(response.data)
                })
            axios
                .get(`https://fighterbackend.herokuapp.com/fighter`+ `${props.showFighter.fighter_id}`)
                .then((response) => {
                    props.setShowFighter(response.data)
                })
        })
    }

    return (
            <form className='pt-3 drop-form' onSubmit={handleUpdateForm}>
                <div className='form-input'>
                Name: <input type="text" className="form-control" defaultValue={props.showFighter.name} onChange={handleNameUpdate} />
                </div>
                <div className='form-input'>
                Nickname: <input type="text" className="form-control" defaultValue={props.showFighter.nickname} onChange={handleNicknameUpdate} /><br />
                </div>
                <div className='form-input'>
                Country: <input type="text" className="form-control" defaultValue={props.showFighter.country} onChange={handleCountryUpdate} /><br />
                </div>
                <div className='form-input'>
                Age: <input type="number" className="form-control" defaultValue={props.showFighter.age} onChange={handleAgeUpdate} /><br />
                </div>
                <div className='form-input'>
                Weightclass: <input type="text" className="form-control" defaultValue={props.showFighter.weightclass} onChange={handleWeightclassUpdate} /><br />
                </div>
                <div className='form-input'>
                Record: <input type="text" className="form-control" defaultValue={props.showFighter.record} onChange={handleRecordUpdate} /><br />
                </div>
                <div className='form-input'>
                Image Url: <input type="text" className="form-control" defaultValue={props.showFighter.imgurl} onChange={handleImgurlUpdate} /><br />
                </div>
                
                <button className='btn btn-danger submit-drop-form' data-bs-toggle="collapse" href={`#UpdateForm${props.showFighter.fighter_id}`} type="submit">Update Athlete</button>
            </form>
    )
  }
  
  export default Edit
//retried edit route, something not passing through on the front end. 
// import {useState} from 'react'
// import axios from 'axios'

// const Edit = (props) => {

//     const [updatedName, setUpdatedName] = useState()
//     const [updatedNickname, setUpdatedNickname] = useState()
//     const [updatedCountry, setUpdatedCountry] = useState()
//     const [updatedAge, setUpdatedAge] = useState()
//     const [updatedWeightclass, setUpdatedWeightclass] = useState()
//     const [updatedRecord, setUpdatedRecord] = useState()
//     const [updatedImgurl, setUpdatedImgurl] = useState()

//     const handleNameUpdate = (event) => {   
//         setUpdatedName(event.target.value)
//     }

//     const handleNicknameUpdate = (event) => {  
//         setUpdatedNickname(event.target.value) 
//     }

//     const handleCountryUpdate = (event) => {   
//         setUpdatedCountry(event.target.value)
//     }

//     const handleAgeUpdate = (event) => {
//         setUpdatedAge(event.target.value)
//     }

//     const handleWeightclassUpdate = (event) => {
//         setUpdatedWeightclass(event.target.value)
//     }

//     const handleRecordUpdate = (event) => {
//         setUpdatedRecord(event.target.value)
//     }

//     const handleImgurlUpdate = (event) => {
//         setUpdatedImgurl(event.target.value)
//     }

//     // PUT ROUTE
//     const handleUpdateForm = (event) => {
//         event.preventDefault();

//         axios.put(
//             `https://fighterbackend.herokuapp.com/fighter/${props.showFighter.fighter_id}`,
//             {
//                 name: updatedName,
//                 nickname: updatedNickname,
//                 country: updatedCountry,
//                 age: updatedAge,
//                 weightclass: updatedWeightclass,
//                 record: updatedRecord,
//                 imgUrl: updatedImgurl,
//             }
//         ).then(() => {
//             axios
//                 .get(`https://fighterbackend.herokuapp.com/fighter`)
//                 .then((response) => {
//                     props.setFilteredResults(response.data)
//                 })
//             axios
//                 .get(`https://fighterbackend.herokuapp.com/fighter/${props.showFighter.fighter_id}`)
//                 .then((response) => {
//                     props.setShowFighter(response.data)
//                 })
//         })
//     }

//     return (
//             <form className='pt-3 drop-form' onSubmit={handleUpdateForm}>
//                 <div className='form-input'>
//                 location: <input type="text" className="form-control" defaultValue={props.showFighter.name} onChange={handleNameUpdate} />
//                 </div>
//                 <div className='form-input'>
//                 city: <input type="text" className="form-control" defaultValue={props.showFighter.nickname} onChange={handleNicknameUpdate} /><br />
//                 </div>
//                 <div className='form-input'>
//                 zip: <input type="number" className="form-control" defaultValue={props.showFighter.country} onChange={handleCountryUpdate} /><br />
//                 </div>
//                 <div className='form-input'>
//                 description: <input type="number" className="form-control" defaultValue={props.showFighter.age} onChange={handleAgeUpdate} /><br />
//                 </div>
//                 <div className='form-input'>
//                 image: <input type="text" className="form-control" defaultValue={props.showFighter.weightclass} onChange={handleWeightclassUpdate} /><br />
//                 </div>
//                 <div className='form-input'>
//                 rating: <input type="text" className="form-control" defaultValue={props.showFighter.record}  onChange={handleRecordUpdate} /><br />
//                 </div>
//                 <div className='form-input'>
//                 tags: <input type="text" className="form-control" defaultValue={props.showFighter.imgurl} onChange={handleImgurlUpdate} /><br />
//                 </div>
                
//                 <button className='btn btn-primary submit-drop-form' data-bs-toggle="collapse" href={`#UpdateForm${props.showFighter.fighter_id}`} type="submit">Update Athlete</button>
//             </form>
//     )
//   }
  
//   export default Edit