import React from 'react';
import Logo from '../../logo.svg';
class Login extends React.Component {
  render(){
    return(
      <div className='container'>
        <div className='wraper'>
          <img className='logo' alt="" src={Logo} />
          <input type="password"
          placeholder="Email"
           />
          <input 
          placeholder="Password"/>
          <button>login</button>
        </div>
      </div>
    )
  }
}
export default Login;
