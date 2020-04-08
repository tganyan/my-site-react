import React from 'react';
import styled from 'styled-components';

import projectList from '../../assets/projectList';

const ProjectList = styled.ul`
	padding-left: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

`;
const ProjectItem = styled.li`
	min-width: 280px;
	h3 {
		margin-bottom: 10px;
	}
	figure {
		position: relative;
		margin: 0;
	}
	img {
		width: 100%;
	}
`;
const ProjectLabel = styled.figcaption`
	background-color: #8c8187;
	color: #ffffff;
	font-size: .5em;
	padding: 4px;
	position: absolute;
	text-transform: uppercase;
	top: 0;
	width: 50%;
`;

let projectLable = '';

function Projects() {
	return (
		<div>
			<h1>My Projects</h1>
			<ProjectList>
				{projectList.map((currentProject, currentProjectIndex) => {
					switch(currentProject.type) {
						case 'game':
							projectLable = 'Game';
							break;
						case 'wordpress':
							projectLable = 'Wordpress Theme';
							break;
						case 'chrome':
							projectLable = 'Chrome Extesion';
							break;
						default:
							projectLable = 'General';
							break;
					}
 
					return <ProjectItem key={currentProjectIndex}>
						<h3>Title: {currentProject.title}</h3>
						<figure>
							<img src={currentProject.imagePath} alt={currentProject.imageAlt} />
							<ProjectLabel>{projectLable}</ProjectLabel>
						</figure>	
						<p><a href={currentProject.githubUrl}>Github Source</a></p>
						<p><a href={currentProject.liveUrl}>Live App</a></p>
						<p>{currentProject.description}</p>
					</ProjectItem>
				})}
			</ProjectList>
		</div>
	)
}

export default Projects;