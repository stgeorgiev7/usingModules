import "../scss/app.scss";
const R = require('ramda');

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];

  const articles = document.querySelectorAll("article");
  const getClasses = R.pluck('class');
  const extractedClasses = getClasses(arrayToPluck);
  
  articles.forEach(element => {
    element.classList = extractedClasses.shift();
  });
  
});
