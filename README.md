![image](https://user-images.githubusercontent.com/109315248/216568215-43dda0d5-34d4-4dc4-9808-946b99c366eb.png)
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

![image](https://user-images.githubusercontent.com/109315248/216568595-ce1120fb-19ae-4bdf-a563-4cc2be2e253c.png)

- [ ] Landing section - Static welcome page with avatar and action text. The "Hire me" button directs you to the next section, i.e. the form.

![image](https://user-images.githubusercontent.com/109315248/216568627-0b629088-f7b5-4119-b0ac-7009fd31944f.png)


- [ ] Projects section - Project cards rendered from a static array. Don't worry, the descriptions of projects are not entirely true 

![image](https://user-images.githubusercontent.com/109315248/216568694-75818cb8-8d82-4b81-ae4c-ac599195dada.png)


- [ ] Contact-me section - Form built with chakra-ui elements, supported with Formik library and verified with Yup based schemas.

![image](https://user-images.githubusercontent.com/109315248/216568743-46883f4c-01d8-47f2-9cf9-32a32669a8ec.png)


    - [ ] useSubmit is a custom hook that is used to submit a form and simulate API call. It uses Math.random() to simulate a random success or failure reponse. 
    - [ ] The alerts feature uses Chakra components and context to handle the "server" response to a form submission.
    
![image](https://user-images.githubusercontent.com/109315248/216568858-3af19359-48c0-4704-9765-0aa6cf70cac4.png)

![image](https://user-images.githubusercontent.com/109315248/216568919-c75f7f2b-7b7c-412c-a091-02f6fdca37fc.png)


    
 ## To-do
The project was an exercise and has been completed.
Project is going to be used as a base for my own portfolio website. 
    
## Sources
This app is inspired by Meta-Front-End Developer Course submission project during React Advanced course. Whole course is available at Coursera. 
Custom hooks for API simulation were provided by the course creators.



