import { loginUser } from '../../utils';
import './loginsignin.css'
import { useState } from 'react';
import { writeCookie } from '../../common';
import {Logout} from './logout'



const Login = ({newUser}, props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
 
    const login = async (e) => {
        e.preventDefault();
        console.log(username, email, password);

        await loginUser(username, email, password, newUser)
       
        setIsLoggedin(true);
        window.location.href = "/to-do-app";
    };


 
    return (
        <>
            <div>
                <h1>Login </h1>
                {!isLoggedin ? (
                    <>
                        <form action="">
                            <input
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                placeholder="Username"
                            />
                            <br  />
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                            />
                            <br  />
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password"
                            />
                            <br  />
                            <button type="submit" onClick={login}>
                                GO
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <h1>User is logged in</h1>
                        <Logout cookie={props.cookie} setIsLoggedin={setIsLoggedin} />                     
                    </>
                )}
            </div>
        </>
    );
}
 
export default Login;