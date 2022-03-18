import React from 'react';
import { Link } from 'react-router-dom';


export const RegisterScreen = () => {
  return (
    <>

      <div >
        <h2 className="auth__title">Sign Up</h2>

        <form >
          <label className="auth__label" for="Name" >Name</label>
          <input type="text" placeholder="John Doe" name="name" className="auth__input" autocomplete="off" />
          <label className="auth__label" for="email">Email</label>
          <input type="text" placeholder="john@doe.com" name="email" autocomplete="off" className="auth__input" />
          <label className="auth__label" for="password">Password</label>
          <input type="password" placeholder="Password" name="password" className="auth__input" autocomplete="off" />
          <input type="password" placeholder="Confirm password" name="password2" className="auth__input" autocomplete="off" />
          <button className="btn-ys mt-5 mb-5" type="submit"  >Sign Up</button>




          <div className="">

            <Link to="/auth/login" className="link mt-5">
              Already signed up?
            </Link>

          </div>

        </form>

      </div>
    </>
  )
}
