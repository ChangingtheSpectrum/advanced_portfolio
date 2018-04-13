import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="row">
          <header className="head container">
            <ul>
              <li>Hello</li>
              <li>Resume</li>
              <li>Portfolio</li>
            </ul>
          </header>
        </div>

        <section className="basic-info bar container">
          <h2>Chris Harris</h2>
          <p>Fullstack Developer</p>
          <img src="asdf" className="selfie" alt="A pic of me"/>
        </section>

        <section className="bio bar container">
          <p>
            Lorem ipsum dolor sit amet, sed ne mundi dicam mandamus. Vel an regione salutatus, 
            nam ut accusata mediocritatem, an vis adhuc mazim incorrupte. Mea id tractatos 
            posidonium, ad nam putent utroque. Ei inermis graecis phaedrum mea. 
            Saperet persequeris pro te. In eam liber audire, ut natum salutandi consulatu nam.
          </p>
        </section>

        <div className="grid">
          <section className="col-1-3">
            <h5>Personal</h5>
              <table>
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
              </table>

            <h5>Languages</h5>
              <table>
                <tr>
                  <td>HTML5</td>
                  <td>
                    <div className="w3-blue"/>{/* IMPORT W3'S STYLESHEET FOR PROGRESS BAR*/}
                  </td>
                </tr>
                <tr>
                  <td>CSS</td>
                  <td>
                    <div className="w3-blue"/>{/* IMPORT W3'S STYLESHEET FOR PROGRESS BAR*/}
                  </td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>
                    <div className="w3-blue"/>{/* IMPORT W3'S STYLESHEET FOR PROGRESS BAR*/}
                  </td>
                </tr>
                <tr>
                  <td>Python</td>
                  <td>
                    <div className="w3-blue"/>{/* IMPORT W3'S STYLESHEET FOR PROGRESS BAR*/}
                  </td>
                </tr>
                <tr>
                  <td>SQL</td>
                  <td>
                    <div className="w3-blue"/>{/* IMPORT W3'S STYLESHEET FOR PROGRESS BAR*/}
                  </td>
                </tr>
              </table>

            <h5>Hobbies</h5>
              <ul>
                <li>Music</li>
                <li>Gaming</li>
                <li>Coding</li>
                <li>General Tinkering</li>
              </ul>


        </section>{/*

        */}<section className="col-2-3">
          <h5>Work</h5>
            <table>
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
            </table>

          <h5>Professional Skills</h5>
            <ul>
              <li>Backend</li>
              <li>Frontend</li>
              <li>DB Management</li>
              <li>Teamwork</li>
              <li>DevOps</li>
            </ul>
          <h5>Education</h5>
            <table>
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
            </table>
          </section>
        </div>

        <section className="social-media">
          <ul>
            <li>
              <a href="https://www.facebook.com/chris.harris.188">#</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/christopher-harris-69a442113/">#</a>
            </li>
            <li>
              <a href="https://github.com/ChangingtheSpectrum">#</a>
            </li>
          </ul>
        </section>

        <footer className="foot bar container">
          <p>
            219 W 145th St, New York, NY 10039 : Call (302)-670-3792 : 
            Email: christopher.harris13@stjohns.edu
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
