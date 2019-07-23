import React from "react";
import {Link, withRouter} from "react-router-dom";
import {fakeAuth} from "../functions/auth";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/test/2">Test</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                    <li>
                        <AuthButton/>
                    </li>
                </ul>
            </header>
        );
    }
}

const AuthButton = withRouter(
    ({ history }) =>
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome!{" "}
                <button
                    onClick={() => {
                        fakeAuth.signout(() => history.push("/"));
                    }}
                >
                    Sign out
                </button>
            </p>
        ) : (
            <p>You are not logged in.</p>
        )
)