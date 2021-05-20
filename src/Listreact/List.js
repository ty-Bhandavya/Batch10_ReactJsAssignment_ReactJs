import React , {useState , useEffect}  from 'react'; 
import axios from 'axios';
import {Table} from 'react-bootstrap'
export default function List() {
    const [users , setUsers] =useState([]);
    const [singleUsers , setsingleUsers] =useState([]);
    useEffect(function(){
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>setUsers(response.data))
        .then((error)=>console.log(error));
    },[]);
    const onddlChange = (e)=>{
        //alert(e.target.value);
        axios
        .get("https://jsonplaceholder.typicode.com/users/" + e.target.value)
        .then((response)=>setsingleUsers(response.data))
        .then((error)=>console.log(error));
    
    };
    return (
        <div>
        <select className="from-control col-md-3" onChange={onddlChange}>
            <option value="0">--Select User--</option>
            {users.map((user)=>(
                    <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
        </select>
        <br/><br/>
        <Table striped bordered hover style={{color:"red"}}>
            <thead>
                <td>Id</td>
                <td>Name</td>
                <td>UserName</td>
                <td>Email</td>
            </thead>
            <tbody>
                </tbody> 
                <tr>
                  <td>{singleUsers.id}</td> 
                  <td>{singleUsers.name}</td>
                  <td>{singleUsers.username}</td>
                  <td>{singleUsers.email}</td> 
                    </tr>       
                </Table>
        </div>
    );
}
