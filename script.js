const projects = [ //Takes array info of the card and in generateProjectCard func it plugs it in for all projects
  

{ 
    title:"Pokedex",
    image:"assets/pokemon.png",
    madeWith:["Nodejs","Html","Css","JavaScript"],
    liveDemoLink:"https://inventory-application-production-899c.up.railway.app",
    sourceLink:"https://github.com/stbam/Inventory-Application"
    },

{ 
title:"Mini Message Board",
image:"assets/Message Board.png",
madeWith:["Nodejs","Html","Css","JavaScript"],
liveDemoLink:"https://message-chat-board.up.railway.app/index",
sourceLink:"https://github.com/stbam/Mini-message-board"
}
  ,{
    title:"Cv Application Maker",
    image:"assets/Cvapplication.png",
    madeWith:["React","Html","Css"],
    liveDemoLink:"https://cvapplicationgenerator.pages.dev",
    sourceLink:"https://github.com/stbam/CVApplicationGenerator"
   }

    ,{
      title: "Scribble Book",
      image: "assets/book.png",
      madeWith: ["React", "Nodejs", "JavaScript"],
      liveDemoLink: "https://scribblebook-frontend.onrender.com",
      sourceLink: "https://github.com/stbam/login-signup",
    }, 
    {
        title: "Weather App",
        image: "assets/WeatherApp.png",
        madeWith: ["javascript", "react", "nodejs"],
        liveDemoLink: "https://github.com/stbam/WeatherApplication",
        sourceLink: "https://github.com/stbam/WeatherApplication",
      },
      {
        title:"TicTacToe",
        image:"assets/ticatactoe.png",
        madeWith:["javascript","html","css"],
        liveDemoLink:"https://stbam.github.io/TicTacToe/",
        sourceLink:"https://github.com/stbam/TicTacToe",
      },
      {
        title:"Library",
        image:"assets/library.png",
        madeWith:["javascript","html","css"],
        liveDemoLink:"https://stbam.github.io/Library/",
        sourceLink:"https://github.com/stbam/Library"
      }
  ];





const words = ["a programmer","learner","experimenter","gamer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing-text");
  const speed = 150; // Adjust the typing speed in milliseconds

  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, isDeleting ? letterIndex - 1 : letterIndex + 1);
  typingElement.textContent = currentText;

  if (!isDeleting && letterIndex === currentWord.length) {
    isDeleting = true;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Move to the next word
  }

  letterIndex += isDeleting ? -1 : 1;
  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect(); // starts the typing effect


/*
 <div class="project-card">
            <div class="img-container">
                <a href="https://inventory-application-production-899c.up.railway.app">
                    <img class="demo-pictures" src="scribble.png" alt="some words" >
                </a> 
            </div>
            <div class="link">
                <a href="https://inventory-application-production-899c.up.railway.app">Inventory App <span>  <img class="githubimg" src="github.png" alt=""></span></a>
            </div>
        </div>
*/



function generateProjectCard(project){
    return `         
        <div class="project-card">
        <div class="img-container">
            <a href="${project.liveDemoLink}">
                <img class="demo-pictures" src="${project.image}" alt="some words" >
            </a> 
        </div>
        <div class="link">
            <a href="${project.sourceLink}"> ${project.title} <span>  <img class="githubimg" src="github.png" alt=""></span></a>
        </div>
    </div>
    `
}

const projectsContainer =  document.querySelector('.projects');
console.log(projectsContainer)
projects.forEach(project => {
    const projectCardHTML = generateProjectCard(project);
    projectsContainer.innerHTML += projectCardHTML;
  });