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
	min-width: 200px;
`;

function Projects() {
	return (
		<div>
			<h1>My Projects</h1>
			<ProjectList>
				{projectList.map((currentProject, currentProjectIndex) => 
					<ProjectItem key={currentProjectIndex}>
						<h3>Title: {currentProject.title}</h3>
						<p><a href={currentProject.githubUrl}>Github Source</a></p>
						<p><a href={currentProject.liveUrl}>Live App</a></p>
						<p>{currentProject.description}</p>
					</ProjectItem>
				)}
			</ProjectList>
		</div>
	)
}

export default Projects;