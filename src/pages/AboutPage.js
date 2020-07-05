import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          My name is Tyron Joe. I am an aspiring game developer with an
          innovative and open mindset. A punctual and professional individual
          who enjoys working with people who like to think outside the box when
          it comes to team projects. I seek to expand my knowledge of technology
          as well as my skills in coding so that I may one day become a leader
          of a gaming project and pass on my knowledge to the next generation of
          game developers
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
