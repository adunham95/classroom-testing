import React from "react";
import {fakeAuth} from "../../functions/auth";
import {Redirect} from "react-router-dom";

export default class TeacherLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;

        return (
            <div>
                <h1>Teacher Login</h1>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}