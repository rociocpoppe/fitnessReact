import React from 'react'
import buttomImg from '../images/add.png'
import {Link} from 'react-router-dom'

//quiero hacerlo como una arrow function porque es mas moderno y expresivo

const AddExerciseButton=()=>(
    <Link to="/exercise/new">
        <img src={buttomImg} className="Fitness-Add" />
    </Link>
)
/*function AddExerciseButton(props){
    return(
        <Link to="/exercise/new">
            <img src={buttomImg} className="Fitness-Add" />
        </Link>
    )
}*/

export default AddExerciseButton 
