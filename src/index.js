//SIN REACT

/*const element=document.createElement('h1')
element.innerText='Hello React..'

const container=document.getElementById('root')
container.appendChild(element)
*/

//CON REACT

import React from 'react'
import ReactDOM from 'react-dom'
import Exercises from './pages/Exercises'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'

/*const user={
  firstname:'Rocio',
  lastname:'Poppe',
  //avatar:'https://avatar.tobi.sh/'
};

function getName(user){
  return user.firstname +' ' + user.lastname 
}

function getGreeting(user){
  if(user){
    return <h1>Hello {getName(user)}!</h1>
  }
  return <h1>Hello Stranger!</h1>
}
const element=  
  <div>
    <h1>{getGreeting(user)}</h1>
  </div>
*/
const container=document.getElementById('root')

ReactDOM.render(<App/>,container)
