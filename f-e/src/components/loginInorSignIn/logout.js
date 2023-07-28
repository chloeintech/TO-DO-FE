import { logOutUser } from '../../utils';
// import { useState } from 'react';

    const Logout = (props) => {
        props.e.preventDefault();

        const logout = async () => {
        localStorage.removeItem(props.cookie)
        props.setIsLoggedin(false)
        window.location.href = "/";
        }
     
    

return (
    <div>
        <button onClick={ () => {logout}}>logout user</button>
    </div>
    

)
    };
export default Logout;