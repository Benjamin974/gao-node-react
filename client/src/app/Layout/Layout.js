import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import Ordi from '../views/PageOrdi'
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from '@material-ui/core';

class Layout extends Component {


  render() {
    return (

      <Container>
        <BrowserRouter>

          <nav className="navbar navbar-light bg-light justify-content-between">


            <a className="navbar-brand" href="#"></a>
            <form className="form-inline">
              <Link className="navbar-brand" to="/ordinateurs"> <Tooltip title="Ordinateurs"><IconButton variant="outlined"><Icon>computer</Icon></IconButton></Tooltip></Link>
              <Link className="navbar-brand" to="/login"><Tooltip title="log"><IconButton variant="outlined"><Icon>login</Icon></IconButton></Tooltip></Link>
            </form>
          </nav>

          <Route path="/ordinateurs" component={Ordi} />
        </BrowserRouter>
      </Container >
    );
  }
}

export default Layout;