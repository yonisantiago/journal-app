import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>

            <div >
                <h2 className="auth__title">Login Screen</h2>

                <form >
                    <label className="auth__label" for="email">Email</label>
                    <input type="text" placeholder="john@doe.com" name="email" autocomplete="off" className="auth__input" />
                    <label className="auth__label" for="password">Password</label>
                    <input type="password" placeholder="Password" name="password" className="auth__input" />
                    <button className="btn-ys mt-50" type="submit"  >Login</button>



                    <div className="auth__social-networks">
                        <h3 className="auth__h3">Login with Social</h3>

                        <div className="google-btn" >
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                    </div>
                    <div className="btn-ys">

                        <Link to="/auth/register" className="  link">
                            Sign Up
                        </Link>

                    </div>

                </form>

            </div>
        </>
    )
}
