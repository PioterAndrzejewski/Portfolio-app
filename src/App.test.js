import {
	render,
	screen,
	fireEvent,
	act,
	waitForElement,
} from "@testing-library/react";
import ContactMeSection from "./components/ContactMeSection";
import { AlertProvider } from "./context/alertContext";

describe("Contact-me form", () => {
	test("Submission is disabled if there is no name provided", () => {
		const jestSubmit = jest.fn();

		render(
			<AlertProvider>
				<ContactMeSection onSubmit={jestSubmit} />
			</AlertProvider>
		);

		const emailInput = screen.getByLabelText(/Email Address/);
		fireEvent.change(emailInput, { target: { value: "example@example.com" } });

		const messageInput = screen.getByLabelText(/Your message/);
		fireEvent.change(messageInput, {
			target: {
				value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
			},
		});

		const submitButton = screen.getByRole("button");

		act(() => {
			fireEvent.click(submitButton);
		});

		expect(jestSubmit).not.toHaveBeenCalled();
		expect(submitButton).toHaveAttribute("disabled");
	});

	test("Submission is disabled if there is no email provided", () => {
		const jestSubmit = jest.fn();
		render(
			<AlertProvider>
				<ContactMeSection onSubmit={jestSubmit} />
			</AlertProvider>
		);
		const nameInput = screen.getByLabelText(/Name/);
		fireEvent.change(nameInput, { target: { value: "Andrzej" } });

		const messageInput = screen.getByLabelText(/Your message/);
		fireEvent.change(messageInput, {
			target: {
				value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
			},
		});

		const submitButton = screen.getByRole("button");
		fireEvent.click(submitButton);

		expect(jestSubmit).not.toHaveBeenCalled();
		expect(submitButton).toHaveAttribute("disabled");
	});

	test("Submission is disabled if there is no comment provided", () => {
		const jestSubmit = jest.fn();
		render(
			<AlertProvider>
				<ContactMeSection onSubmit={jestSubmit} />
			</AlertProvider>
		);
		const nameInput = screen.getByLabelText(/Name/);
		fireEvent.change(nameInput, { target: { value: "Andrzej" } });

		const emailInput = screen.getByLabelText(/Email Address/);
		fireEvent.change(emailInput, { target: { value: "example@example.com" } });

		const submitButton = screen.getByRole("button");
		fireEvent.click(submitButton);

		expect(jestSubmit).not.toHaveBeenCalled();
		expect(submitButton).toHaveAttribute("disabled");
	});

	// TODO: submit case
	// TODO: solve act() issue
});
