import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import './Global.css';

import Landing from './components/landing/Landing';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';

// Component styles
const AppContainer = styled.div`
  text-align: center;
  color: #ffffff;
`;
const MyName = styled.h1`
  font-size: 3.25em;
  margin: 0;
  position: absolute;
  text-transform: uppercase;
  top: 25%;
  transform: translate(-50%, 0);
  left: 50%;
`;
const MyTitle = styled.span`
  font-size: .25em;
  color: #d04040;
  margin: 0;
  position: absolute;
  transform: translate(-50%, 0);
  right: -21%;
  top: 80%
`;
const StyledHeaderLine = styled.div`
  background-color: #ffffff;
  bottom: 8%;
  position: absolute;
  width: 56%;
  height: 2%;
`;
const Header = styled.header`
  position: relative;
  margin-top: 5%;
  height: 200px;
`;
const Nav = styled.nav`
  width: 50%;
  margin: 0 auto;
`;
const NavList = styled.ul`
  padding-left: 0;
  display: flex;
  list-style: none;
  justify-content: space-around;
`;
const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <MyName>
          Tyler Anyan
          <StyledHeaderLine></StyledHeaderLine>
          <MyTitle>front end developer</MyTitle>
        </MyName>
      </Header>
      <BrowserRouter>
        <div>
          <Nav>
            <NavList>
              <NavItem><Link to='/'>Home</Link></NavItem>
              <NavItem><Link to='/about'>About me</Link></NavItem>
              <NavItem><Link to='/projects'>Stuff I've Done</Link></NavItem>
              <NavItem><Link to='/work'>Previous Roles</Link></NavItem>
              <NavItem><Link to='/contact'>Drop me a Line!</Link></NavItem>
            </NavList>
          </Nav>
          <Route exact path={'/'} component={Landing}/>
          <Route exact path={'/about'} component={About}/>
          <Route exact path={'/projects'} component={Projects}/>
          <Route exact path={'/work'} component={Work}/>
          <Route exact path={'/contact'} component={Contact}/>
        </div>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
