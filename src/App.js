import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
       <Drawer className="smoothscroll" title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}scrolling>
            <Navigation>
            <Link className="smoothscroll" to ="/">Home</Link>
              <Link className="smoothscroll" to="/aboutme">Aboutme</Link>
              <Link className="smoothscroll" to="/resume">Resume</Link>
              <Link className="smoothscroll" to="/projects">Projects</Link>
              <Link className="smoothscroll" to="/contact">Contact</Link>
            
              
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
