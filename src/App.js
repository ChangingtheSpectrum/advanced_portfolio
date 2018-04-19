import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';
import scrollToComponent from 'react-scroll-to-component';
import selfie from './Chiggin.jpeg';
import './index.css';

const image = {
  src: selfie,
  alt: 'Pic of me',
};

class App extends Component {
  render() {
    return (
      <div className="App"
        ref={(section) => { this.App = section; }}>
        <div className="row nav">
          <header className="head container">
            <ul className="navbar">
              <button
                onClick={ () => scrollToComponent(this.App, { 
                  offset: -1000, 
                  align :'middle', 
                  duration: 500, 
                  ease:'outCirc'})}>
                    Hello
              </button>
              <button 
                onClick={ () => scrollToComponent(this.grid, { 
                  offset: 450, 
                  align :'middle', 
                  duration: 500, 
                  ease:'outCirc'})}>
                    Resume
              </button>
              <button>Portfolio</button>
            </ul>
          </header>
        </div>

      <div className="alt-row first-alt">
        <section className="basic-info bar container">
          <h2>Chris Harris</h2>
          <p>Fullstack Developer</p>
          <img
            className="selfie"
            src={image.src}
            alt={image.alt} />
        </section>
      </div>

      <div className="bio-row">
        <section className="bio bar container">
          <p>
            Hey there! My name's Chris -- I'm a recent Computer Science graduate 
            from St. John's University in Queens, NY. I have plenty of experience 
            in developing from database to frontend (check out my GitHub!), garnered through many a YouTube
            tutorial and trial and error. I look forward to hearing from you!
          </p>
        </section>
      </div>

      <div className="content">
        <div 
          className="grid"
          ref={(section) => { this.grid = section; }}>
          <section className="col-1-3">
            <h5>Personal</h5>
              <table>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Chris Harris</td>
                  </tr>
                  <tr>
                    <td>Birthday</td>
                    <td>16th Sept 1994 (23)</td>
                  </tr>
                  <tr>
                    <td>Relationship</td>
                    <td>In a relationship</td>
                  </tr>
                  <tr>
                    <td>Nationality</td>
                    <td>U.S. Citizen</td>
                  </tr>
                  <tr>
                    <td>Languages</td>
                    <td>English, French</td>
                  </tr>
                  <tr>
                    <td>Telephone</td>
                    <td>302-670-3792</td>
                  </tr>
                </tbody>
              </table>

            <h5>Languages</h5>
              <ul className="languages">
                <li>HTML5</li>
                  <Line className="line"
                    percent="80"
                    strokeWidth="3"
                    trailWidth="3"
                    strokeLinecap="square"
                    strokeColor="cornflowerblue"/>
                <li>CSS</li>
                  <Line className="line"
                    percent="75"
                    strokeWidth="3"
                    trailWidth="3"
                    strokeLinecap="square"
                    strokeColor="cornflowerblue"/>
                <li>JavaScript</li>
                  <Line className="line"
                    percent="70"
                    strokeWidth="3"
                    trailWidth="3"
                    strokeLinecap="square"
                    strokeColor="cornflowerblue"/>
                <li>Python</li>
                  <Line className="line"
                    percent="90"
                    strokeWidth="3"
                    trailWidth="3"
                    strokeLinecap="square"
                    strokeColor="cornflowerblue"/>
                <li>SQL</li>
                  <Line className="line"
                    percent="60"
                    strokeWidth="3"
                    trailWidth="3"
                    strokeLinecap="square"
                    strokeColor="cornflowerblue"/>
              </ul>
              {/*<table>
                <tbody>
                  <tr>
                    <td>HTML5</td>
                    <td>
                      <Line className="line"
                        percent="80"
                        strokeWidth="5"
                        trailWidth="5"
                        strokeLinecap="square"
                        strokeColor="cornflowerblue"/>
                    </td>
                  </tr>
                  <tr>
                    <td>CSS</td>
                    <td>
                      <Line className="line"
                        percent="75"
                        strokeWidth="5"
                        trailWidth="5"
                        strokeLinecap="square"
                        strokeColor="cornflowerblue"/>
                    </td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>
                      <Line className="line"
                        percent="70"
                        strokeWidth="5"
                        trailWidth="5"
                        strokeLinecap="square"
                        strokeColor="cornflowerblue"/>
                    </td>
                  </tr>
                  <tr>
                    <td>Python</td>
                    <td>
                      <Line className="line"
                        percent="90"
                        strokeWidth="5"
                        trailWidth="5"
                        strokeLinecap="square"
                        strokeColor="cornflowerblue"/>
                    </td>
                  </tr>
                  <tr>
                    <td>SQL</td>
                    <td>
                      <Line className="line"
                        percent="60"
                        strokeWidth="5"
                        trailWidth="5"
                        strokeLinecap="square"
                        strokeColor="cornflowerblue"/>
                    </td>
                  </tr>
                </tbody>
              </table>*/}

            <h5>Hobbies</h5>
              <ul className="hobby-list">
                <li>
                  <i className="material-icons">headset</i>
                  <span>Music</span>
                </li>
                <li>
                  <i className="material-icons">gamepad</i>
                  <span>Gaming</span>
                </li>
                <li>
                  <i className="material-icons">code</i>
                  <span>Coding</span>
                </li>
                <li>
                  <i className="material-icons">directions_bike</i>
                  <span>Biking</span>
                </li>
                <li>
                  <i className="material-icons">fitness_center</i>
                  <span>Lifting</span>
                </li>
                <li>
                  <i className="material-icons">build</i>
                  <span>Tinkering</span>
                </li>
              </ul>


        </section>{/*

        */}<section className="col-2-3">
          <div className="col-2-content">
            <h5>Work</h5>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>IT Technician @ The Institute for Family Health</p>
                      <ul className="responsibilities">
                        <li>
                          Communicated with clients, employees, 
                          and patients alike to identify and resolve technical issues
                        </li>
                        <li> 
                          Ran diagnostics on a wide range of devices
                        </li>
                        <li>
                          Configured networks of multiple different sites
                        </li>
                      </ul>
                    </td>
                    <td>2018</td>
                  </tr>
                  <tr>
                    <td>
                      <p>Software Engineering Internship @ Citymaps</p>
                        <ul className="responsibilities">
                          <li>
                            Debugged and refactored Java and Scala 
                            based code as part of a small team
                          </li>
                          <li> 
                            Optimized the asynchronous nature of continuously updating maps
                          </li>
                          <li>
                            Worked with team using git and GitHub, made numerous pull requests
                          </li>
                        </ul>
                    </td>
                    <td>2016</td>
                  </tr>
                </tbody>
              </table>

            <h5>Professional Skills</h5>
              <ul>
                <Circle
                  className="circle"
                  percent="90"
                  strokeWidth="5"
                  trailWidth="5"
                  strokeLinecap="square"
                  strokeColor="cornflowerblue">
                </Circle>
                <li className="skill">Backend</li>

                <Circle
                  className="circle"
                  percent="80"
                  strokeWidth="5"
                  trailWidth="5"
                  strokeLinecap="square"
                  strokeColor="cornflowerblue">
                </Circle>
                <li className="skill">Frontend</li>

                <Circle
                  className="circle"
                  percent="65"
                  strokeWidth="5"
                  trailWidth="5"
                  strokeLinecap="square"
                  strokeColor="cornflowerblue">
                </Circle>
                <li className="skill">RDBMS</li>

                <Circle
                  className="circle"
                  percent="90"
                  strokeWidth="5"
                  trailWidth="5"
                  strokeLinecap="square"
                  strokeColor="cornflowerblue">
                </Circle>
                <li className="skill">Teamwork</li>

                <Circle
                  className="circle"
                  percent="100"
                  strokeWidth="5"
                  trailWidth="5"
                  strokeLinecap="square"
                  strokeColor="cornflowerblue">
                </Circle>
                <li className="skill">Barista-ing</li>
              </ul>
            <h5>Education</h5>
              <table className="education">
                <tbody>
                  <tr>
                    <td>
                      <p>BS Computer Science @ St. John's University, New York</p>
                    </td>
                    <td className="date">2017</td>
                  </tr>
                  <tr>
                    <td>
                      <p>High School Degree @ Caravel Academy, Delaware</p>
                    </td>
                    <td className="date">2013</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      <div className="alt-row group">
        <section className="social-media">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/christopher-harris-69a442113/" className="fa fa-linkedin" />
            </li>
            <li>
              <a href="https://github.com/ChangingtheSpectrum" className="fa fa-github" />
            </li>
          </ul>
        </section>
      </div>

      <div className="row">
        <footer className="foot bar container">
          <p>
            219 W 145th St, New York, NY 10039 : Call (302)-670-3792 :
            Email: christopher.harris13@stjohns.edu
          </p>
        </footer>
      </div>
    </div>
    );
  }
}

export default App;
