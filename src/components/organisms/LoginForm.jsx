import { useState } from "react";

const LoginForm = ({setLoggedIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const onUsernameChange = (e) => setUsername(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const onSubmit = () => setLoggedIn(true);

  return (
    <form>
      <h4 className="mb-4">Login</h4>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
        <input value={username} onChange={onUsernameChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="usernameHelp" className="form-text">We'll never share your data with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input value={password} onChange={onPasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <button
        //type="submit" 
        type="button"
        onClick={onSubmit} className="btn btn-primary">Submit</button>
    </form>
  )
}

export default LoginForm;