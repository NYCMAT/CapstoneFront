import {useState} from "react";
import Edit from './edit'


const ShowCard = (props) => {

    return (
        <>
        <div>
            <div className='location-header'>
                <h1 className='ms-5 mt-4'>{props.showFighter.name}</h1>
                <div className='location-subheading'>
                    <div>
                        <p className='ms-5'>{props.showFighter.nickname} • {props.showFighter.record} Record</p>
                    </div>
                    <div>
                        <p className='me-5'>Share • Save</p>
                    </div>
                </div>
            </div>
            <div className='location-body'>
                <div className='card' style={{width: '30vw'}}>
                    <div className='card-body m-5'>
                        <p className='card-text'>{props.showFighter.country}</p>
                        
                    </div>
                    <p className='m-5'>{props.showFighter.weightclass}</p>
                    <p className='m-5'>Age: {props.showFighter.age}</p>         
                </div>
                <div className='location-image-container' >
                    <img className='location-image mt-3' style={{minHeight: '50vh'}} src={props.showFighter.imgurl}/>
                </div>
            </div>
        </div>
        <div className="button-container">
            <div className="button-box">
                <button className="btn" data-bs-toggle="collapse" href={`#UpdateForm${props.showFighter.fighter_id}`} aria-expanded="false" aria-controls={`UpdateForm${props.showFighter.fighter_id}`}>
                                Edit
                </button>
                <button className='btn ms-5' onClick={(event) => {props.cardDisplay(props.fighters)}}>Back To Browse</button>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <div className='collapse drop-form-div' id={`UpdateForm${props.showFighter.fighter_id}`}>
                    <Edit showFighter={props.showFighter} setFilteredResults={props.setFilteredResults} fighters={props.fighters} setFighters={props.setFighters} setShowFighter={props.setShowFighter}/>
                    <button className='btn btn-primary mt-3' data-bs-toggle="collapse" onClick={ (event) => {props.handleDelete(props.showFighter)}}>Delete Athlete</button> 
                </div>
            </div>
        </div>

        </>
    )
}

export default ShowCard