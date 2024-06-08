import React from 'react';
import { useSelector } from 'react-redux';
import Public from './publicRouter'
import Admin from './adminRouter'
import User from './userRouter'

const Router = () => {
    const {role} = useSelector((state) => state.user);
    
return (
    <>
        {role==="GUEST" && <Public/>}
        {role==="USER" && <User/>}
        {role==="ADMIN" && <Admin/>}
    </>
)
}
export default Router