import {
	Heading,
	HStack,
	Image,
	Text,
	VStack,
	Link,
	Spacer,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
	return (
		<VStack
			mx="1"
			direction="column"
			justify="flex-end"
			bgColor="white"
			rounded="xl"
		>
			<Link href={url} isExternal>
				<Image
					src={imageSrc}
					rounded="xl"
					opacity={0.3}
					_hover={{
						opacity: "1",
					}}
					transition="0.2s"
					cursor="pointer"
				/>
			</Link>
			<Heading
				color={"black"}
				letterSpacing="0.5px"
				fontSize="md"
				fontWeight="bold"
				p="3"
				alignSelf="flex-start"
			>
				{title}
			</Heading>
			<Text
				color={"gray.800"}
				fontSize="18px"
				fontWeight="light"
				p="3"
				alignSelf="flex-start"
			>
				{description}
			</Text>
			<Spacer />
			<Link pb="3" pl="2" href={url} alignSelf="flex-start" isExternal>
				<HStack>
					<Text color={"gray.800"} fontSize="18px" fontWeight="semibold" p="2">
						{title === "Architectural visualisation"
							? "Contact with me to see pricing"
							: "See more"}
					</Text>
					<FontAwesomeIcon icon={faArrowRight} color="black" size="1x" />
				</HStack>
			</Link>
		</VStack>
	);
};

export default Card;
