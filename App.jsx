import React from "react"
import { Component } from "react"
import User from './user table/user';
import JSON from "./user table/userdata.json"

class App extends Component{
    constructor(){
        super()
        this.state={
            json:JSON
        }
    }
    render(){
        return(
            <div>
                <User data={this.state.json}/>
                
            </div>
        )
    }
}
export default App

// import React from "react"
// import { Component } from "react"
// import Student from "./student table/Student.jsx"
// import JSON from "./student table/Student.json"

// class App extends Component
// {
//     constructor()
//     {
//         super()
//         this.state={
//             json:JSON
//         }
//     }
//     render()
//     {
//         return(
//             <div>
//                 <Student data={this.state.json}/>
//             </div>
//         )
//     }
// }
// export default App