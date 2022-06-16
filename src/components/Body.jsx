import React from "react";
import {AuthContext} from "../contexts/AuthContext";
import {Box} from "@chakra-ui/react";

function Body()
{
    const [id,setId]=React.useState("");
    const {isAuth}=React.useContext(AuthContext);
    
    
    const handleRegister=()=>
    {
        
        const data={
            "email":"eve.holt@reqres.in",
            "password":"cityslicka"
        }
        
        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{"Content-type":"Application/json"}
        })
        .then((res)=>
        
            res.json()
        
        )
        .then((res)=>{
           
            setId(res.token)
           
        })
        .catch((error)=>
        {
            console.log(error)
        })

    }
    React.useEffect(
        ()=>
        {
            handleRegister()
        },[]
    );
   
    return (
        <>
        
     <Box textAlign='center'>{isAuth? <><h1>Login Successfull</h1><h3>User Token :{id}</h3></>:<h1>Login Unsuccessfull</h1>}</Box>
        </>
    )
}
export default Body;