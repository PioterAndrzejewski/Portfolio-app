

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/PioterAndrzejewski/Portfolio-app">
  </a>

<h3 align="center">Portfolio app</h3>

  <p align="center">
    Simple portfolio App 
    <br />
    <br />
    <br />
    <a href="https://pioterandrzejewski.github.io/Portfolio-app/">View Demo</a>
  </p>
</div>

## Getting started

After cloning the repository and installing dependencies run the app using npm start command. 

  ```sh
  $ git clone https://github.com/PioterAndrzejewski/Portfolio-app.git
  $ cd Portfolio-app
  $ npm i
  $ npm start
  ```
Now you're ready to test the app in your browser on localhost:3000

### Built With

- React,
- Chakra-UI
- Formik,
- Yup,

## About The Project

A portfolio application consisting of several elements.

- [ ] Header - with external links (to social media) and internal links (for individual sections) with support for smooth scrolling using the "react-scroll" library.
In addition, the header listens to page scrolling and hides when scrolling down and reappears when scrolling up.

- [ ] Landing section - Static welcome page with avatar and action text. The "Hire me" button directs you to the next section, i.e. the form.

- [ ] Projects section - Project cards rendered from a static array. Don't worry, the descriptions of projects are not entirely true 

- [ ] Contact-me section - Form built with chakra-ui elements, supported with Formik library and verified with Yup based schemas.
    - [ ] useSubmit is a custom hook that is used to submit a form and simulate API call. It uses Math.random() to simulate a random success or failure reponse. 
    - [ ] The alerts feature uses Chakra components and context to handle the "server" response to a form submission.
    
 ## To-do
The project was an exercise and has been completed.
Project is going to be used as a base for my own portfolio website. 
    
## Sources
This app is inspired by Meta-Front-End Developer Course submission project during React Advanced course. Whole course is available at Coursera. 
Custom hooks for API simulation were provided by the course creators.
