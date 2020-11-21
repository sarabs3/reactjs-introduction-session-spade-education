import React from "react";
import Avatar from "react-avatar";
import { SocialIcon } from "react-social-icons";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="info">
        <Avatar
          name="Sarabjeet Singh"
          round
          src="https://pbs.twimg.com/profile_images/1324417906747191298/fELaosj0_400x400.jpg"
        />
        <h1>Sarabjeet Singh</h1>
      </div>
      <hr />
      <h2>Eductaion</h2>
      <ul>
        <li>Senior Secondary</li>
        <li>BCA</li>
        <li>Master</li>
      </ul>
      <hr />
      <h2>Skills</h2>
      <ul>
        <li>Senior Secondary</li>
        <li>BCA</li>
        <li>Master</li>
      </ul>
      <hr />
      <h2>Work Experience</h2>
      <ul>
        <li>Senior Secondary</li>
        <li>BCA</li>
        <li>Master</li>
      </ul>
      <hr />
      <h2>Personal Info</h2>
      <ul>
        <li>Senior Secondary</li>
        <li>BCA</li>
        <li>Master</li>
      </ul>
      <hr />
      <h2>Contact</h2>
      <SocialIcon url="https://www.twitter.com/sarabs3" />
      <SocialIcon url="https://www.linkedin.com/in/sarabs3" />
      <SocialIcon url="https://www.github.com/sarabs3" />
    </div>
  );
}
