import React from 'react';
import './Auth.css';

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-Left">
            <div className="webname">
            <h1><b>MeetMax</b></h1>
            <h5>Meet all the world all the time</h5>
            </div>
        </div>
        <LogIn/>
    </div>
  )
}



function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "16px" }}>
                Don't have an account Sign up
              </span>
            <button className="infoButtonlogin">Login</button>
          </div>
        </form>
      </div>
    );
  }



function Signup() {
    return(
        <div className="a-right">
            <form className="infoForm authForm">
               <h3>Sign up</h3>
               <div>
                <input type="text" placeholder='First name'
                className='infoInput' name='firstname'
                />
                <input type="text" placeholder='Last name'
                className='infoInput' name='lastname'
                />
                </div>
                <div>
                <input type="text" placeholder='User name'
                className='infoInput' name='username'
                />
                </div>
                <div>
                <input type="password" placeholder='Password'
                className='infoInput' name='password'
                />
                <input type="password" placeholder='Confirm password'
                className='infoInput' name='confirmpassword'
                />
                </div>
                <div>
            <span style={{fontSize: '16px'}}>Already have an account. Login!</span>
        </div>
        <button className="infoButton" type="submit">Signup</button>
            </form>
        </div>
    )
}
export default Auth