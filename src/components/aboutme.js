import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import  image from '../images/elsabeth.jpg';

import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

class aboutme extends Component {


  render() {
    return (
      <div >
        <Paper className="aboutMe-Paper">
          <Grid >
            <Cell col={6} style={{paddingLeft:"20px"}}>
              <ButtonBase style={{ width: 300, height: 400 }}>
                <img className="aboutMe-img"
                  alt="complex"
                  src={image}
                  
                />
              </ButtonBase>
            </Cell>
            <Cell
              col={6}
              style={{ fontSize: 20,paddingRight: "30px" }}
            >
              <h3>About Me</h3>
              <p>I am Elsabeth Kidane</p>
              <p>
              I am a Front End developer.I like to code and Design.                                                               
              It is my passion to conceptualize, develop, and deploy
              ideas to this great environment we call the internet. 
              I am an advocate for Higher Education advancement and
              when I set my goals I sink my teeth into them.
              </p>
              <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1cJBWSEuffGrgEW9K3q0_0kqRFODE6l3c/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV<i className="icon-download4" /></a></p>
            </Cell>
          </Grid>
        </Paper>
      </div>
    )
  }
}
export default aboutme