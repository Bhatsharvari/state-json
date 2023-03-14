import React from "react"

const Student=(props)=>{
    let data=props.data
    return(
        <div>
            <table border="2px"style={{textAlign:"center",fontWeight:"bold"}}>
               
                <th>student</th>
                <th>id</th>
                <th>yop</th>
                <th>photo</th>
                <th>subject</th>
                
                {data.map((x)=>{
                    return <tr>
                        <td>{x.student}</td>
                        <td>{x.id}</td>
                        <td>{x.yop}</td>
                        <td>
                            <img src={x.photo} alt=""style={{height:"100px", width:"100px"}} />
                        </td>
                        <td>
                        <ol>
                       
                        {x.subject.map((x)=>{
                            return <li>{x}</li>
                        
                    
                        })}
                    
                        </ol>
                        </td>
                           </tr>
                        })}
                </table>
                </div>
    )
            }
            export default Student