import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";
import { Link as AnimatedLink } from "react-scroll";

const socials = [
	{
		icon: faEnvelope,
		url: "mailto: p.andrzejewski@outlook.com",
	},
	{
		icon: faGithub,
		url: "https://github.com/PioterAndrzejewski",
	},
	{
		icon: faLinkedin,
		url: "https://www.linkedin.com/in/piotr-andrzejewski-6241751a3/",
	},
];

const Header = () => {
	const headerElement = useRef();

	const [navBar, setNavBar] = useState(true);

	let previousScroll = 0;

	const hideNavbar = () => {
		if (window.scrollY < previousScroll) {
			setNavBar(true);
		} else {
			setNavBar(false);
		}

		return (previousScroll = window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", hideNavbar);

		return () => {
			window.removeEventListener("scroll", hideNavbar);
		};
	}, []);

	return (
		<Box
			position="fixed"
			zIndex="2"
			top={0}
			left={0}
			right={0}
			translateY={0}
			transitionProperty="transform"
			transitionDuration=".3s"
			transitionTimingFunction="ease-in-out"
			backgroundColor="#18181b"
			ref={headerElement}
			className={navBar ? "navbar" : "navbar unactive"}
		>
			<Box color="white" maxWidth="1280px" margin="0 auto">
				<HStack
					px={16}
					py={4}
					justifyContent="space-between"
					alignItems="center"
				>
					<nav>
						<HStack>
							{socials.map((e, index) => {
								return (
									<Link href={e.url} pl={index === 0 ? "0" : "8px"} key={index}>
										<FontAwesomeIcon icon={e.icon} size="lg" />
									</Link>
								);
							})}
						</HStack>
					</nav>
					<nav>
						<HStack spacing={8}>
							<AnimatedLink
								href="#landing"
								to="landing-section"
								smooth={true}
								spy={true}
								key="landing"
							>
								Start
							</AnimatedLink>
							<AnimatedLink
								href="#projects"
								to="projects-section"
								smooth={true}
								spy={true}
								key="projects"
							>
								Projects
							</AnimatedLink>
							<AnimatedLink
								href="#contactme"
								to="contactme-section"
								smooth={true}
								spy={true}
								key="contact"
							>
								Contact me!
							</AnimatedLink>
						</HStack>
					</nav>
				</HStack>
			</Box>
		</Box>
	);
};
export default Header;
