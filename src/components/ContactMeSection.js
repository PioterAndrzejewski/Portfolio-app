import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	Textarea,
	VStack,
	Text,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import basicSchema from "./schemas/basicSchema";

const ContactMeSection = () => {
	const { isLoading, response, submit } = useSubmit();
	const { onOpen } = useAlertContext();

	const {
		values,
		handleBlur,
		handleChange,
		handleSubmit,
		errors,
		touched,
		isSubmitting,
		resetForm,
	} = useFormik({
		initialValues: {
			firstName: "",
			email: "",
			type: "hireMe",
			comment: "",
		},
		onSubmit: async (values, actions) => {
			submit("www.example.com", values);
		},
		validationSchema: basicSchema,
	});

	useEffect(() => {
		if (response) {
			onOpen(response.type, response.message);
			if (response.type === "success") {
				resetForm();
			}
		}
	}, [response]);

	return (
		<FullScreenSection
			isDarkBackground
			backgroundColor="#512DA8"
			py={16}
			spacing={8}
		>
			<VStack w="1024px" p={32} alignItems="flex-start">
				<Heading as="h1" id="contactme-section">
					Contact me
				</Heading>
				<Box p={6} rounded="md" w="100%">
					<form onSubmit={handleSubmit} autoComplete="off">
						<VStack spacing={4}>
							<FormControl isInvalid={errors.firstName && touched.firstName}>
								<FormLabel htmlFor="firstName">Name</FormLabel>
								<Input
									id="firstName"
									name="firstName"
									value={values.firstName}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<FormErrorMessage>
									{errors.firstName && touched.firstName
										? errors.firstName
										: ""}
								</FormErrorMessage>
							</FormControl>
							<FormControl isInvalid={errors.email && touched.email}>
								<FormLabel htmlFor="email">Email Address</FormLabel>
								<Input
									id="email"
									name="email"
									type="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<FormErrorMessage>
									{errors.email && touched.email ? errors.email : ""}
								</FormErrorMessage>
							</FormControl>
							<FormControl>
								<FormLabel htmlFor="type">Type of enquiry</FormLabel>
								<Select
									id="type"
									name="type"
									value={values.type}
									onChange={handleChange}
									onBlur={handleBlur}
								>
									<option value="hireMe">Freelance project proposal</option>
									<option value="openSource">
										Open source consultancy session
									</option>
									<option value="other">Other</option>
								</Select>
							</FormControl>
							<FormControl isInvalid={errors.comment && touched.comment}>
								<FormLabel htmlFor="comment">Your message</FormLabel>
								<Textarea
									id="comment"
									name="comment"
									height={250}
									value={values.comment}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<FormErrorMessage>
									{errors.comment && touched.comment ? errors.comment : ""}
								</FormErrorMessage>
							</FormControl>
							<Button
								type="submit"
								colorScheme="purple"
								width="full"
								disabled={isSubmitting || Object.keys(errors).length > 0}
							>
								{isLoading ? "Processing..." : "Submit"}
							</Button>
							<Text>
								Note: the form is not related to the backend. API response after
								submitting will be simulated.
							</Text>
						</VStack>
					</form>
				</Box>
			</VStack>
		</FullScreenSection>
	);
};

export default ContactMeSection;
