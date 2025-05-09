const projects = [
  {
    title: "Techmodal: Amoeba",
    text: "Amoeba, built using Remix, applies complex calculations to ascertain transit times from points dropped on a map. I led the front-end development by producing a wireframe of an optimal user interface, created and prioritised GitHub issues and led review meetings with the Product Owner. I produced reusable components, helped team members with issues and reviewed pull requests. I aided in the amoeba creation function using Dijkstra's algorithm considering the curvature of the earth, no access zones and visualisation on a Leaflet Map using the Web Mercator projection.",
    image: "./static/img/anti-access-zones.png",
    techstack: "Tech Stack: Typescript, Remix, SQLite, Prisma, Docker.",
  },
  {
    title: "Techmodal: Fuel Pipeline",
    text: "The Fuel Pipeline application was built to model fuel consumption and transfer across the UK Government’s fuel pipeline system. The application enables users to calibrate storage facility and pipe parameters, modify network priorities, and run comprehensive what-if scenarios. The tool provides critical insights into network operations, helping to optimise fuel distribution and enhance decision-making processes.",
    image: "./static/img/auto-play.gif",
    techstack: "Tech Stack: Typescript, Remix, PostgreSQL, Prisma, Docker.",
  },
  {
    title: "Techmodal: Desk Booking",
    text: "The app enables employees to book desks ahead of time in a hotdesking environment and know where their colleagues are sitting to enable collaborative working. It also shows HR analytics of office utilisation and whether there are sufficient first aiders and fire marshals in the office each day. It allows certain users to book seats for guests and book reserved desks. I assisted in creating the floorplan component from a Figma design exported as an SVG, with Material UI components, user avatars and click handlers. We used a mobile first design so employees can use the application on any device.",
    image: "./static/img/booking.png",
    techstack: "Tech Stack: Typescript, Remix, SQLite, Prisma, Docker.",
  },
  {
    title: "Pre-course Work",
    text: "Week 0: I built this website for the pre-course work for _nology. The website introduces myself to my peers on the course, including my background and hobbies. I learnt basic HTML, CSS and JavaScript via a list of recommended YouTube videos, to build the website. This was good preparatory learning for the course.",
    image: "./static/img/project1.png",
    techstack: "Tech Stack: HTML, CSS, JavaScript.",
    openGithub: "https://github.com/sophieroe95/pre-course-work",
    openPage: "https://sophieroe95.github.io/pre-course-work/",
  },
  {
    title: "This portfolio",
    text: "Week 1 and 2: At the start of the course we covered HTML and CSS best practice, CSS Grid and Flexbox, linking to other pages, SASS and responsive design, and linking to CDNs. We started to learn about form validation using Javascript. We also learnt to use Git, GitHub and GitHub pages to host our site, save our work and conduct code reviews. During project time we designed and built our project hosting sites.",
    image: "./static/img/project2.png",
    techstack: "Tech Stack: HTML, CSS, Sass, JavaScript.",
    openGithub: "https://github.com/sophieroe95/portfolio",
    openPage: "https://sophieroe95.github.io/portfolio/",
  },
  {
    title: "Javascript Calculator",
    text: "Week 3: During this week of Javascript we covered JS Functions, Control Flow, Loops and Arrays, JS Callback Functions and Iterators, the DOM and Objects. Building a calculator was a good way to practice accessing the HTML through Javascript. It also required string manipulation to allow for the correct numerical calculator display.",
    techstack: "Tech Stack: HTML, CSS, Sass, JavaScript, OOP.",
    image: "./static/img/project3.png",
    openGithub: "https://github.com/sophieroe95/calculator",
    openPage: "https://sophieroe95.github.io/calculator/",
  },
  {
    title: "Minesweeper Game",
    text: "Week 4: This week covered JS Looping Over Objects, Mixing Complex Data Types, JS Classes, JS Unit Testing with Jest, and JS Asynchronous Calls and Promises. While making my minesweeper game I learnt more about dynamically inserting HTML with JS, recursion, the Time object and using inbuilt JS methods (desktop only).",
    techstack: "Tech stack: HTML, CSS, Sass, JavaScript.",
    image: "./static/img/project4.png",
    openGithub: "https://github.com/sophieroe95/minesweeper",
    openPage: "https://sophieroe95.github.io/minesweeper/",
  },
  {
    title: "Morse Code Translator",
    text: "Week 4: Our first Friday challenge was to build a morse code translator within 3 hours. This involved creating JS Objects for the morse and english translators with key value pairs. The input array then uses the hasOwnProperty method on the morse/ english object to return a new translated array and finally string.",
    techstack: "Tech Stack: HTML, CSS, Sass, Bootstrap, JavaScript. ",
    image: "./static/img/project5.png",
    openGithub: "https://github.com/sophieroe95/morse-code-translator",
    openPage: "https://sophieroe95.github.io/morse-code-translator/",
  },
  {
    title: "Goodcode Presentation",
    text: "Week 5: Our task was to answer common interview questions through a presentation format to a pretend company 'Goodcode'. Questions were based around: top soft skill strengths, biggest weakness, biggest achievement, where you see yourself in 5 years time and an interesting technological advancement.",
    techstack:
      "Skills Learnt: Interpersonal Skills, Personal Effectiveness, Wellbeing, Resilience and Presentation Delivery. ",
    image: "./static/img/project6.png",
  },
  {
    title: "Olliedays",
    text: "Week 6: This week we started learning React, we covered components, passing data as props, mapping over data, React FontAwesome and state. This project was a wireframe challenge. I have also added routing, private routing and authentication which we covered in weeks 7 and 8 respectively.",
    techstack:
      "Tech Stack: ReactJS, CSS, Sass, Font Awesome, Authentication and Authorisation, Private Routing.",
    image: "./static/img/project7.png",
    openGithub: "https://github.com/sophieroe95/olliedays",
    openPage: "https://sophiesolliedays.web.app/",
  },
  {
    title: "Brew Dog API",
    text: "Week 7: We next covered routing, functions as props and data requests in React. The friday challenge this week was to build a React App that allowed you to search data fetched from the Brew Dog API.",
    techstack: "Tech Stack: ReactJS, CSS, Sass, REST APIs, Postman.",
    image: "./static/img/project8.png",
    openGithub: "https://github.com/sophieroe95/brew-dog-api",
    openPage: "https://sophiesbrewdogapi.web.app/",
  },
  {
    title: "Travel List",
    text: "Week 8 and 9: In week 9 we covered unit testing in React, Firebase - intro and hosting, Firestore - Create, Read, Update, Delete, Authentication and Authorisation and Private Routing. In week 9 we learnt about context, how we should use it and the focus on Provider/Consumer Cycle. We also started learning Node.js for API development. The challenge this week was to build our own Full Stack API to read (GET), create (POST) and delete (DELETE) data using Node.js, Express and MongoDB.",
    techstack:
      "Tech Stack: ReactJS, CSS, Sass, REST APIs, Postman, Node.js & Express, Firestore - CRUD, MongoDB.",
    image: "./static/img/project9.png",
    openGithub: "https://github.com/sophieroe95/travel-list",
    openPage: "https://travel-list-6d0f5.web.app/",
  },
  {
    title: "Client Project: No1 South East",
    text: "Week 6-10: In a team of 9 _nologists, we built a progressive web app giving members exclusive deals for South East London's independent restaurants. I was responsible for: communicating with the PO, participating in daily scrums and retrospectives, pair programming and delivering tickets for each one week sprint. I really enjoyed the teamwork and solving the daily problems of working on different features in the app.",
    techstack:
      "Tech Stack: ReactJS, jQuery, CSS, Sass, Font Awesome, Google Maps API, Authentication and Authorisation, Private Routing, Firestore - CRUD, Unit testing (Enzyme), Trello, SCRUM, Agile Working.",
    image: "./static/img/project10.png",
  },
  {
    title: "Class Based React To Do List",
    text: "Week 10: This week we looked at the differences between the modern Functional based components and Class based components in React and the component lifecycle. We were introduced to TypeScript to validate code is working correctly. I constructed a to do list and pulled data from Random User Generator API.",
    techstack: "Tech Stack: ReactJS, CSS, Sass, REST API.",
    image: "./static/img/project11.png",
    openGithub: "https://github.com/sophieroe95/class-based-to-do-list",
    openPage: "https://todolist-react-class-based.web.app/",
  },
  // {
  //   title: "Tech Test and Consolidation",
  //   text: "Week 11:",
  //   techstack: "Tech Stack: ",
  //   image: "./static/img/project9.png",
  //   openGithub: "",
  //   openPage: "",
  // },
];

export default projects;
