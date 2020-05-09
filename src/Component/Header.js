import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';
import { removeDetailsfromSessionStorage } from '../Store/actions/index'


{/* <style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
</style> */}

const HeaderName = styled.div`
font-weight: bold;
font-size: 28px;

`
const LogoImg = styled.img`
height: 65px;
width: 140px;
`;

const LoginCredential = styled.div`
display: flex;
align-items: center;
`
const UserImg = styled.img`
border-radius: 50%;
margin-right:5px;
`

const Button = styled.div`
  background: transparent;
  border-radius: 10px;
  background: palevioletred;
  background: rgba(59, 33, 119, 0.77);
  margin: 0.5em 1em;
  padding: 0.25em 1em;
   * {
    border-radius: 10px !important;
   }
  ${props => props.primary && css`
  background: rgba(59, 33, 119, 0.77);
    color: white;
  `}
`;

const Container = styled.div`
font-family: 'Nunito', sans-serif;
*{
    font-family: 'Nunito', sans-serif !important;
}
  text-align: center;
  display:flex;
  justify-content: space-between;
  align-items: center;
    width: 85%;
    margin: auto;
    margin: 10px auto;
    box-shadow: 0px 0px 13px 0px rgba(40, 0, 134, 0.91);
    border-radius: 4px;
    padding: 10px 52px;
`


export class Header extends Component {





    logout = () => {
        this.props.dispatch(removeDetailsfromSessionStorage())
    }
    render() {

        let { loginDetails } = this.props

        return (


            loginDetails.isLoggedIn ? <Container> {<>
                <LogoImg src="/images/airline-logo.jpg" className='header-airline-img' alt={loginDetails.name} height="42" width="42"></LogoImg>
                <HeaderName>DASHBOARD</HeaderName>
                <LoginCredential>
                    <UserImg src={loginDetails.imageUrl} className='login-header-img' alt={loginDetails.name} height="42" width="42"></UserImg>
                    <div className='login-header-name'>{loginDetails.name}</div>
                    <br />
                    <Button>
                        <GoogleLogout
                            clientId="400865530457-pelm0k6er8vqgldvr7vetekf2rqnii0d.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={this.logout}>
                        </GoogleLogout></Button>
                </LoginCredential>
            </>}</Container> : <Redirect to="/" />


        )
    }
}
function mapStateToProps(state) {
    return {
        loginDetails: state.loginDetails
    }
}

export default connect(mapStateToProps)(Header)
