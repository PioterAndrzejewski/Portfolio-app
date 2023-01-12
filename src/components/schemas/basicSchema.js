import * as Yup from "yup";

const basicSchema = Yup.object({}).shape({
	firstName: Yup.string("Please provide a valid name")
		.min(2, "Please provide a valid name that is at least 2 characters.")
		.required("Please provide your name."),
	email: Yup.string("Please provide a valid email")
		.email("Please enter valid email")
		.required(
			"Please provide your e-mail address, so I can get in touch with you."
		),
	type: Yup.string().oneOf(["hireMe", "openSource", "other"]),
	comment: Yup.string()
		.min(10, "Please provide a message that is at least 10 characters.")
		.required("Please provide a message that is at least 10 characters."),
});

export default basicSchema;
