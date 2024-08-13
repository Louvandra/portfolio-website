import React from 'react'

const Login = () => {
  return (
    <div>
        <div>
            <h1>Login</h1>
            <div>
                <input type="email" />
                <label htmlFor="">Your Email</label>
            </div>
            <div>
                <input type="pasword" />
                <label htmlFor="">Your Password</label>
            </div>
            <div>
            <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="Remember Me"></label>
            </div>
            <span>Forgot Password?</span>
        </div>
        <button type="submit">Login</button>
        <div>
            <span>New Here?<link to='Register'>Buat Akun</link></span>
        </div>
        </div>
    </div>
  );
};

export default Login;