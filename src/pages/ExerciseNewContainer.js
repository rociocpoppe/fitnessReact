import React from 'react'
import FatalError from './FatalError'
import ExerciseNew from './ExerciseNew'

class ExerciseNewContainer extends React.Component{
    
    state = {
        form:{
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        error:null,
        loading:false
    }

    handleChange=e=>{
         this.setState({
            form:{
                ...this.state.form, //mantiene lo que venia anteriormente, si viene algo nuevo, hace la linea siguiente
                [e.target.name]: e.target.value
            } 
         })

    }

   handleSubmit =async e => {
        e.preventDefault()
        this.setState({
            loading:true
        })
        try{
            let config={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res=await fetch ('http://localhost:8000/api/exercises', config )
            let json= await res.json()
            console.log(json)
            this.setState({
                loading:false
            })
            this.props.history.push('/exercise')
        } catch(error){
            this.setState({
                loading:false,
                error
            })
        }

    }

    render(){
        return (
            <ExerciseNew
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        )
    }
}

export default ExerciseNewContainer