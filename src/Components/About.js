import React from 'react'
import { Image, Jumbotron, Container, Row, Col } from 'react-bootstrap'
import './About.css'
import Skills from './Skills';

const About = (props) => {
	return (
		<div className="About">
			<Jumbotron fluid>
				<Container>
					<Row>
						<Col xs={12} md={4}>
							<Image fluid src={props.info.image} roundedCircle id="profilepic" />
						</Col>
						<Col xs={12} md={8}>
							<h1>{props.info.fullName}</h1>
							<p> Nationality: {props.info.nationality}</p>
							<p> Address: {props.info.address.city},  {props.info.address.country}</p>
							<p> Email: {props.info.email}</p>
							<p> Phone Number: {props.info.phoneNumber}</p>
							
							<p id="introduction"> {props.info.introduction.split("\n").map((line, index) => {
								return (
									<span key={index}>
										{line}
										<br />
									</span>
								);
							})
							}
							</p>
						</Col>
					</Row>
				</Container>
			</Jumbotron>

			<Row>
				<Col xs={12} md={4} id="natural-languages">
					<Skills title={"Natural Languages"} skills={props.info.languages.natural} />
				</Col>
				<Col xs={12} md={4} id="programming-languages">
					<Skills title={"Programming Languages"} skills={props.info.languages.programming} />
				</Col>
				<Col xs={12} md={4} id="technologies">
					<Skills title={"Technologies"} skills={props.info.technologies} />
				</Col>
			</Row>

		</div>
	);
};

export default About;