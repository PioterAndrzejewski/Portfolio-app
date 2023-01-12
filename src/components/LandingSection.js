import React from "react";
import {
	Stack,
	Circle,
	Flex,
	useMediaQuery,
	Box,
	Button,
	Image,
	Text,
	Heading,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import FullScreenSection from "./FullScreenSection";
import { Link as AnimatedLink, animateScroll } from "react-scroll";

const greeting = "Hello, I am";
const greetingName = "Piotr Andrzejewski";
const bio1 =
	"Front-End Software Developer, 3d Graphic and Youtuber with an architectural background";

const LandingSection = () => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";

	const [isNotSmallerScreen] = useMediaQuery("(min-width:840px)");

	return (
		<FullScreenSection
			justifyContent="center"
			alignItems="center"
			isDarkBackground
			backgroundColor="#2A4365"
			id="landing-section"
		>
			>
			<Stack p={0}>
				<Circle
					position="absolute"
					bg="blue.100"
					opacity="0.1"
					w="300px"
					h="300px"
					alignSelf="flex-end"
				/>

				<Flex
					direction={isNotSmallerScreen ? "row" : "column"}
					spacing="100px"
					p={isNotSmallerScreen ? "16" : "0"}
					alignSelf="flex-start"
				>
					<Box mt={isNotSmallerScreen ? "0" : "16"} align="flex-start">
						<Text fontSize="4xl" fontWeight="semibold">
							{greeting}
						</Text>
						<Text
							fontSize="6xl"
							fontWeight="bold"
							bgGradient="linear(to-r, cyan.400, blue.500, purple.200)"
							bgClip="text"
						>
							{greetingName}
						</Text>
						<Text color="gray.100">{bio1}</Text>
						<Button
							mt="8"
							colorScheme="blue"
							onClick={() => {
								window.open("https://google.com");
							}}
							variant="solid"
						>
							<AnimatedLink
								href="#contactme"
								to="contactme-section"
								smooth={true}
								spy={true}
							>
								Hire me!
							</AnimatedLink>
						</Button>
					</Box>
					<Image
						alignSelf="center"
						mt={isNotSmallerScreen ? "0" : "12"}
						mb={isNotSmallerScreen ? "0" : "12"}
						ml="30"
						backgroundColor="transparent"
						borderRadius="100%"
						boxShadow="2xl"
						src="https://avatars.githubusercontent.com/u/109315248?s=400&u=35cb3ec0337ee8e60bd5213646ee591c23f0720d&v=4"
						boxSize="300px"
					/>
				</Flex>
			</Stack>
			<Box alignSelf="center" pt="50">
				<Heading fontWeight="extrabold" color="cyan.500" size="3xl">
					2+
				</Heading>
				<Text fontSize="2xl" color="gray.100">
					Years of experience in Front-end development
				</Text>
				<Text fontSize="12px" color="gray.100">
					is what I will get in the next 2 years :)
				</Text>
			</Box>
		</FullScreenSection>
	);
};

export default LandingSection;
