import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';
import { removeDetailsfromSessionStorage } from '../Store/actions/index'
export class Header extends Component {
    logout = () => {
        this.props.dispatch(removeDetailsfromSessionStorage())
        console.log('logout')
    }
    render() {

        let temp = this.props.loginDetails

        return (
            <div>
                {temp.isLoggedIn ? <div>
                    <div className='login-header-name'>{temp.name}</div>
                    <img src={temp.imageUrl} className='login-header-img' alt={temp.name} height="42" width="42"></img>
                    <br />
                    <GoogleLogout
                        buttonText="Logout"
                        onLogoutSuccess={this.logout}>
                    </GoogleLogout></div> : <Redirect to="/" />}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        loginDetails: state.loginDetails
    }
}

export default connect(mapStateToProps)(Header)
