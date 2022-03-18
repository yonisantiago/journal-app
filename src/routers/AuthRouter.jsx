import React from 'react'
import { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';

export const AuthRouter = () => {
    return (

        <div className="auth__main">
            <div className="floating">
                <div class="background">
                    <div class="shape"></div>
                    <div class="shape"></div>
                </div>
            </div>

            <div className="auth__box-container">

                <Switch>

                    <Route exact path="/auth/login" component={LoginScreen} ></Route>
                    <Route path="/auth/register" component={RegisterScreen} ></Route>
                    <Redirect to="/auth/login" />

                </Switch>
            </div>

        </div>
    )
}
