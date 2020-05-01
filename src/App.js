import React from 'react';
import MainRoutes from './Routes/MainRoutes'
import Header from './Component/Header'
import './App.css';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux'
import { getInitialPassengerList, getInitialUserData, userDetailsfromSessionStorage } from './Store/actions/index'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.dispatch(userDetailsfromSessionStorage())

  }
  render() {
    const responseGoogle = (response) => {

      if (!response.error) {
        response.profileObj.isLoggedIn = 'true'
        this.props.dispatch(getInitialUserData(response.profileObj))
      }
    }


    let { loginDetails } = this.props;
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
              cookiePolicy={'single_host_origin'}
            /><br />
            <br />
          </div> : <div>
              {loginDetails.isAdmin ? <Link to='/admin'> Admin</Link> : null}
              <Link to='/airlinestaff'> Airlinestaff </Link>
              <br />
              <br />


            </div>}

        </Route>
      </div >
    );
  }
}


function mapStateToProps(state) {
  return {
    loginDetails: state.loginDetails
  }
}
export default connect(mapStateToProps)(App)