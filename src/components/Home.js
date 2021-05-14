import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import myimage from '../images/mycode.png';

class Home extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
                
          <div className="row banner">
                     <div className="banner-text">
                        <h1 className="responsive-headline">I'm Elsabeth Kidane.</h1>
                        <img className="profile-img"
                  alt="complex"
                  src={myimage}/>
                  
                      
                        <h2 className="mysummary">I'm a frontend <span>web developer</span>, <span>scrum master</span>,<span>illustrator</span> and <span>webdesigner</span> creating awesome and
                            effective visual identities </h2>
                            <br/>
                        <hr />
                        <ul className="social">
                           <li><a href="https://github.com/elizy88"><i className="fa fa-github" /></a></li>
                           <li><a href="https://mail.google.com/mail"><i className="fa fa-mail" /></a></li>
                           <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                        
                        </ul>
                      </div>
                   </div> 
          </Cell>
        </Grid>
      </div>
      
    )
  }
}

export default Home;
