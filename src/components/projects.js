 
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import  image from '../images/portfolio.png';
import image1 from '../images/resume.png'
import image2 from '../images/guessgame.png'
class projects extends Component {
  
  

 render(){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '60px'}}> React Portfolio </CardTitle>
            <img className="resumeimage"
                  alt="complex"
                  src={image}
                  />
            <CardText>
             React Portfolio.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
               </CardActions>
            <CardMenu style={{color: 'blue'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '60px'}}>React Resume</CardTitle>
            <img className="resumeimage"
                  alt="complex"
                  src={image1}
                  />
            <CardText>
              React Resume
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              
            </CardActions>
            <CardMenu style={{color: 'blue'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '60px'}} >Number guessing gamect Projec</CardTitle>
            <img className="resumeimage"
                  alt="complex"
                  src={image2}
                  />
            <CardText>
          Number Guessing Game
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              
            </CardActions>
            <CardMenu style={{color: 'blue'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    
      } 
    }
  
  
   
  

export default projects

