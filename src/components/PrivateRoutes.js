import React from "react";
import {Route, Redirect} from "react-router-dom";
import {fakeAuth} from '../functions/auth'

export function StudentRoute({component: Component, ...rest}){
    return (
        <Route
            {...rest}
            render={
                props=>
                    fakeAuth.isAuthenticated ? (
                        <Component {...props}/>
                    ) : (
                        <Redirect to={{
                            pathname: '/studentlogin',
                            state: {from: props.location}
                        }}
                      />
                    )
            }
        />
    );
}

export function TeacherRoute({component: Component, ...rest}){
    return (
        <Route
            {...rest}
            render={
                props=>
                    fakeAuth.isAuthenticated ? (
                        <Component {...props}/>
                    ) : (
                        <Redirect to={{
                            pathname: '/teacherlogin',
                            state: {from: props.location}
                        }}
                      />
                    )
            }
        />
    );
}