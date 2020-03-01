// Code EyesOnMe Component Here
import React, {Component} from "react"

class EyesOnMe extends Component{
  handleOnFocus =() =>{
    console.log("Good!")
  }
  handleOnBlur =() =>{
    console.log("")
  }
  render(){
    return(
      <button> </button>
      )
  }
}