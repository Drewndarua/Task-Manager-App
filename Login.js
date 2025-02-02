import {useState} from "react"
import {useNavigate} from "react-router-dom"


const Login=({onLogin})=>{
    const [email, setEmail]= useState('');
    const [password, setPassword]=useState('');
    const [error, setError]=useState('');
    const navigate=useNavigate();


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(onLogin(email,password)){
            navigate('.dashboard');
        }else{
            setError('Invalid email or password.Please try again');
        }
    };

    return(
        <div className="login-container">
            <h2>Welcome Back</h2>
            <p>Sign in to manage</p>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                />
                <label>Password</label>
                <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                />
                <button type ="submit" className="logib-button">Sign In</button>
            </form>

            <div className="login-hint">
                <p>Test Credentials</p>
                <p>Email:abc@gmail.com</p>
                <p>Password:12345</p>
            </div>
        </div>
    );


};

export default Login;