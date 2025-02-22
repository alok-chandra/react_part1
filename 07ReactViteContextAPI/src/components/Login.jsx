import React,{useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const {setUser} = React.useContext(UserContext);
    const handleSubmit = (e) => {
        console.log('Login')
        e.preventDefault();
        setUser({userName, password});

    };
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div>
    <h2>Login</h2>
    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder="Password" />
    <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login