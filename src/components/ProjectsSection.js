import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Spacer } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
	{
		title: "Lucky Shrub website",
		description:
			"Internal system for a company dealing in organic plant cultivation and garden design. React, Express and several additional libraries were used to create the system.",
		getImageSrc: () => require("../images/photo1.jpg"),
		url: "https://pioterandrzejewski.github.io/lucky-shrub.github.io/public/index.html",
	},
	{
		title: "Architects' portfolio website",
		description:
			"A young, talented and extremely creative architect. I have created a solution thanks to which customers can fall in love with the work of this architect at first sight 🔥️",
		getImageSrc: () => require("../images/photo2.jpg"),
		url: "http://drarch.pl",
	},
	{
		title: "Architectural visualisation",
		description:
			"Architectural visualizations, animations and 3D graphics. In addition to architecture design and web-development, this is what I do",
		getImageSrc: () => require("../images/photo3.jpg"),
		url: "mailto: p.andrzejewski@outlook.com",
	},
	{
		title: "Youtube video production",
		description:
			"Beautiful camera shots, drone, animations and a thorough analysis of modern architecture. This is how we present the best examples of modern architecture in Poland, which can be seen on YouTube",
		getImageSrc: () => require("../images/photo4.jpg"),
		url: "https://www.youtube.com/@RzutOka",
	},
];

const ProjectsSection = () => {
	return (
		<FullScreenSection
			backgroundColor="#14532d"
			isDarkBackground
			p={8}
			alignItems="flex-start"
			spacing={8}
		>
			<Heading as="h1" id="projects-section">
				Featured Projects
			</Heading>
			<Box
				display="grid"
				gridTemplateColumns="repeat(2,minmax(0,1fr))"
				gridGap={8}
			>
				{projects.map((project) => (
					<Card
						key={project.title}
						title={project.title}
						description={project.description}
						imageSrc={project.getImageSrc()}
						url={project.url}
					/>
				))}
			</Box>
		</FullScreenSection>
	);
};

export default ProjectsSection;
