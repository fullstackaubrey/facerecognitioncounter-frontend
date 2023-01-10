import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitRegister = () => {
        fetch('https://facereco-backend.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json()) 
            .then(user => {
                if (user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
        return (
            <article className="SignFunctionsMain br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
                        <main className="pa4 black-80">
                        <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Username</label>
                                <input 
                                className="InputAreaPurple b pa2 input-reset ba bg-black near-white w-100" 
                                type="text" 
                                name="username"  
                                id="username" 
                                onChange={this.onNameChange}
                                />
                            </div>
                            <div>
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                className="InputAreaPink b pa2 input-reset ba bg-black near-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                                onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                className="InputAreaBlue b pa2 input-reset ba bg-black near-white w-100"
                                type="password" 
                                name="password"  
                                id="password" 
                                onChange={this.onPasswordChange}
                                />
                            </div>
                            </fieldset>
                            <div className="">
                                <input 
                                onClick={this.onSubmitRegister}
                                className="ph3 pv2 input-reset ba b--black bg-black near-white grow pointer f6 dib" 
                                type="submit"
                                value="Submit" />
                            </div>
                            <div className="lh-copy mt3">
                        </div>
                    </div>
                </main>
            </article>
    );
 }
}

export default Register;