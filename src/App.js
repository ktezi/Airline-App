import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainRoutes from './Routes/MainRoutes'
import Header from './Component/Header'
import './App.css';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux'
import { getInitialUserData, userDetailsfromSessionStorage } from './Store/actions/index'


const Components = styled.div`
height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 85%;
    margin: 10px auto;
    box-shadow: 0px 0px 13px 0px rgba(40,0,134,0.91);
    border-radius: 4px;
    padding: 10px 52px;
    font-family: 'Nunito', sans-serif;
*{
    font-family: 'Nunito', sans-serif !important;
}
`
const ComponentElem = styled.div`
width: 250px;
height: 100px;
border: 0.5px solid black;
box-shadow: 0px 0px 13px 0px rgba(40,0,134,0.91);
    border-radius: 4px;
    top: 35%;
    position: relative;
    text-decoration: none !important;
    font-size: 22px;
    color: #000000db;

`

function App(props) {
  let { loginDetails } = props;
  const [loginResponse, updateLoginResponse] = useState({})
  let detailsdata = sessionStorage.getItem('userData');

  useEffect(() => {
    let data = JSON.parse(detailsdata);
    if (data.name && loginResponse !== loginDetails) {
      props.dispatch(userDetailsfromSessionStorage(data))
    }

    return () => {
      // cleanup
    }
  }, [detailsdata])

  useEffect(() => {
    if (loginResponse.name && loginResponse !== loginDetails)
      props.dispatch(getInitialUserData(loginResponse))
  }, [loginResponse])

  const responseGoogle = (response) => {
    if (!response.error) {
      response.profileObj.isLoggedIn = 'true';
      updateLoginResponse(response.profileObj)
    }
  }

  return (
    <div className="App" >
      <Header />
      <br />
      <MainRoutes />
      <Route exact path='/' >
        {!Object.keys(loginDetails).length ? <div>
          <h1>LOGIN WITH GOOGLE</h1>
          <GoogleLogin
            clientId="400865530457-pelm0k6er8vqgldvr7vetekf2rqnii0d.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}

          /><br />
          <br />
        </div>
          : <Components>
            {loginDetails.isAdmin ? <Link to='/admin'><ComponentElem> Admin</ComponentElem></Link> : null}
            <Link to='/airlinestaff'><ComponentElem> Airlinestaff </ComponentElem></Link>
          </Components>}

      </Route>
    </div >
  );

}


function mapStateToProps(state) {
  return {
    loginDetails: state.loginDetails
  }
}
export default connect(mapStateToProps)(App)