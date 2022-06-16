import React from "react";
import {  Box ,Button} from '@chakra-ui/react'
import {AuthContext} from "../contexts/AuthContext"

function Navbar()
{
    const {isAuth,toggleAuth}=React.useContext(AuthContext);
    return (
        <Box display='flex' flexDirection='row-reverse' backgroundColor='greenyellow' padding='5' borderRadius='2xl'>
        <Button onClick={()=>(toggleAuth(isAuth ? false :true))}>{isAuth?"Logout":"Login"}</Button>
        </Box>
    )
}

export default Navbar