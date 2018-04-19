import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';
import selfie from './Chiggin.jpeg';
import './index.css';

const image = {
  src: selfie,
  alt: 'Pic of me',
};

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="row">
          <header className="head container">
            <ul className="navbar">
              <li>Hello</li>
              <li>Resume</li>
              <li>Portfolio</li>
            </ul>
          </header>
        </div>

      <div className="alt-row">
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
            Lorem ipsum dolor sit amet, sed ne mundi dicam mandamus. Vel an regione salutatus,
            nam ut accusata mediocritatem, an vis adhuc mazim incorrupte. Mea id tractatos
            posidonium, ad nam putent utroque. Ei inermis graecis phaedrum mea.
            Saperet persequeris pro te. In eam liber audire, ut natum salutandi consulatu nam.
          </p>
        </section>
      </div>

      <div className="content">
        <div className="grid">
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
              <table>
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
              </table>

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
                      <p>
                        Ei inermis graecis phaedrum mea.
                        Saperet persequeris pro te. In eam liber audire, ut natum salutandi
                        consulatu nam.
                      </p>
                    </td>
                    <td>2018</td>
                  </tr>
                  <tr>
                    <td>
                      <p>Software Engineering Internship @ Citymaps</p>
                      <p>
                        Ei inermis graecis phaedrum mea.
                        Saperet persequeris pro te. In eam liber audire, ut natum salutandi
                        consulatu nam.
                      </p>
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
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>BS Computer Science @ St. John's University, New York</p>
                      <p>
                        Ei inermis graecis phaedrum mea.
                        Saperet persequeris pro te. In eam liber audire, ut natum salutandi
                        consulatu nam.
                      </p>
                    </td>
                    <td>2017</td>
                  </tr>
                  <tr>
                    <td>
                      <p>High School Degree @ Caravel Academy, Delaware</p>
                      <p>
                        Ei inermis graecis phaedrum mea.
                        Saperet persequeris pro te. In eam liber audire, ut natum salutandi
                        consulatu nam.
                      </p>
                    </td>
                    <td>2013</td>
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
