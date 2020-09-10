import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Face from "../components/Face"

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Kai Zhang's homepage!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
              <Face/>
          </Col>

           <Col size="md-9">
              <p>
                I am an astrophysicsist who loves making software and webpages. I believe data can change the world.
                Since 2007, I have been observing the universe through huge telescopes and model fantastic galaxies and blackholes.
                We construct different models to fit the data and gain understanding of these mysterious objects.
                Now we are trying to make the biggest 3D map of the universe to unveil the secret dark matter.
                Meanwhile, I am a big fan of software and webpage development. This is a way to express, and to make people's life easier.
              </p>
          </Col>
        </Row>
          <ul class="social">
            <li>
            <a class="sc-github" href="https://github.com/zkdtc" target="_blank"></a>
            </li>
          </ul>
          <a href="https://github.com/zkdtc">Github Profile</a><br/>
          <a href="https://www.linkedin.com/in/kai-zhang-15658b36/">LinkedIn Profile</a><br/>
          <a href="mailto:zkdtckk@gmail.com">Email: zkdtckk@gmail.com </a><br/>
          <a>Phone: 859-559-1811</a><br/>
          <a href="https://github.com/zkdtc/Resume/blob/master/CV%20of%20Kai%20Zhang.pdf">Resume</a>

  
      </Container>
    </div>
  );
}

export default About;
