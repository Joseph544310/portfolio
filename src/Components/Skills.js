import React from 'react'
import './Skills.css'
import {ProgressBar } from 'react-bootstrap'

const Skills = (props) => {
	return (
		<div className="Skills">
			<h4> {props.title} </h4>
			<ul>
				{props.skills.map((skill, index) => {
					return <li key={index}> <ProgressBar label={skill.name} now={(skill.score / 5) * 100}/> </li>;
					})
				}
			</ul>

		</div>

	);
};

export default Skills;