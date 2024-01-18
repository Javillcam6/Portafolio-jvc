import React from 'react';
import '../animations/SkillA.css';

const SkillsCard = () => {
  return (
    <div class="container">
  <div class="skill-box">
    <span class="title">Html5</span>

    <div class="skill-bar">
      <span class="skill-per html">
        <span class="tooltip">90%</span>
      </span>
    </div>
  </div>

  <div class="skill-box">
    <span class="title">CSS3</span>

    <div class="skill-bar">
      <span class="skill-per css">
        <span class="tooltip">70%</span>
      </span>
    </div>
  </div>
  <div class="skill-box">
    <span class="title">Javascript</span>

    <div class="skill-bar">
      <span class="skill-per javascript">
        <span class="tooltip">55%</span>
      </span>
    </div>
  </div>
  <div class="skill-box">
    <span class="title">React</span>

    <div class="skill-bar">
      <span class="skill-per nodejs">
        <span class="tooltip">65%</span>
      </span>
    </div>
  </div>
</div>

  );
};

export default SkillsCard;

