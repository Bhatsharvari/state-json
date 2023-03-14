import React from "react"

const User=(props)=>{
    let data=props.data
    console.log(props);
    return(
        <div>
       <table border="2px" style={{textAlign:"center",fontWeight:"bold"}}>
        <th>username</th>
        <th>Age</th>
        <th>skills</th>
        <th>occupation</th>
        <th>salary</th>
        <th>photo</th>
        {data.map((x)=>{
            return <tr>
                <td>{x.username}</td>
                <td>{x.Age}</td>
                <td>
                <ol>
                    {x.skills.map((x)=>{
                        return <li>{x}</li>
                    })}
                        </ol> 
                        </td>
                <td>{x.occupation}</td>
                <td>{x.salary}</td>
                <td>
                    <img src={x.photo} alt="" height="100px" width="100px"/>
                </td>
                 
            </tr>
            
            
        })}
        
        
       
       </table>
        </div>
    )
}
export default User