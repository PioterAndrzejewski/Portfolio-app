

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
    - [ ] useSubmit is a custom hook that is used to submit a form and simulate API call. It uses Math.random() to simulate a random success or failure. 
    - [ ] The alerts feature uses Chakra components and context to handle the "server" response to a form submission.
