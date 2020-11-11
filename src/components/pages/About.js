import React from "react";
import ProfilePic from "../../images/IMG_0083 (2).JPG";

function About() {
  return (
    <>
    <h3 className="text">About Fernando</h3>
    <hr />
    <img className="float-left mr-3 profilepic" src={ProfilePic} alt="ProfilePic" />
    <p className="text">Hello I am Fernando Rivas, I am currently enrolled in the
      Penn LPS Full time coding bootcamp program and am currently learning all
      the fundamental skills to make me a fullstack developer. I graduated
      highschool in 2020 and couldn't be more eager to start working as a junior
      developer and start a business in this field after I learn the market and
      how it functions.</p>
      <p className="text"> This is my portfolio website where all of my
      qualifications can be seen. As of right now currently it is empty but just
      wait for my magnificence. Stay updated with me Fernando! and I promise all
      future employers you will be infatuated with me</p>
    <h6 className="h6About">
      <a className="aboutEmailLink" href="mailto:fernandorivascastillo011@gmail.com" target="_blank">fernansorivascastillo011@gmail.com</a>
      <br />
      phone: 215-475-7702
      <br />
      <a className="aboutResumeLink" href="https://docs.google.com/document/d/1mf4VJzKUvCmWD2RuQbIk5neHxF_LsjduED1i9oZzhL4/edit?usp=sharing" target="_blank">Resume</a>
    </h6>
    </>
  );
}

export default About;
