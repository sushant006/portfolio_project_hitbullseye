import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div id="navbar">
        <div id="leftpartnav">
          <img id="pplogo" src="./images/hb.jpg" />
          <p id="ppname">Hitbullseye</p>
        </div>
        <div id="rightpartnav">
          <img id="notilogo" src="./images/notification.jpg" />
          <p id="myname">Sushant Pathak</p>
        </div>
      </div>
      <div id="secondpart">
        <div id="leftpart">
          <div id="aboutme">
            <img id="profilepic" src="./images/profile.jpg" />
            <h2 id="myname1">Sushant Pathak</h2>
          </div>
          <div id="about">
            <h2 id="ab1">About</h2>
            <p id="ab2">
              BTech CSE student at Lovely Professional University enthusiastic
              about web development.
            </p>
          </div>
          <hr id="firsthr" />
          <div id="contact">
            <h2 id="cont">Contacts</h2>
            <p class="left-side-para">
              <i class="fa fa-thin fa-envelope"></i>&nbsp;
              sushantpathak98189@gmail.com
            </p>
            <p class="left-side-para">
              <i class="fa fa-thin fa-phone"></i>&nbsp; 7632948806
            </p>
            <p class="left-side-para">
              <i class="fa fa-brands fa-linkedin"></i>&nbsp; Sushant
            </p>
          </div>
          <div class="Onweb">
            <h2 id="web">On the web</h2>
            <a href="./images/cv.jpg" download>
              📥 Download my CV
            </a>
            <p class="stack">
              <i class="fa-brands fa-instagram"></i>&nbsp; pathaksushant007
            </p>
          </div>
        </div>
        <div id="rightpart">
          <div id="edu">
            <h2 id="educ">Education</h2>
            <hr id="firsthr" />
            <h4 id="dept">Bachelor Of Technology, Computer Science</h4>
            <p>Lovely Professional University</p>
            <p>2024</p>
            <p>7.37</p>
          </div>
          <div id="work">
            <h2 id="we">Work Experience</h2>
            <hr id="firsthr" />
            <h4>Decription:</h4>
            <p class="wex">
              Pro tip
              <ul>
                <li>
                  Mention key job responsibilities, measurable impact or results
                  you helped deliver, any awards/recognition you won during this
                  time
                </li>
                <li>
                  Use action verbs: Built, Led, Drove, Conceptualized, Learnt,
                  etc
                </li>
                <li>
                  Use numbers and percentages wherever possible Keep it to 3-4
                  points
                </li>
              </ul>
            </p>
          </div>
          <div id="pd">
            <h2 id="pde">Academic/Personal Project</h2>
            <hr id="firsthr" />
            <h4>Simple messenger using python.</h4>
            <p>June-2021 - May-2022</p>
            <p>
              Simple messenger made as a class project working on Graphical User
              Interface.
            </p>
          </div>
          <div id="techy">
            <h4>Technologies/Frameworks/Coding Languages</h4>
            <hr id="firsthr" />
            <p>Technologies: Amazon Web Service</p>
            <p>Framework: Javascript</p>
            <p>Coding Languages: C++</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
