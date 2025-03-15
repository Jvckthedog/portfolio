// Query Selectors
const header = document.querySelector('.header');

// Header
let name = document.createElement('div');
name.textContent = "JORDAN MCCOLLUM"

let about = document.createElement('div');
about.textContent = "ABOUT" 

let projects = document.createElement('div');
projects.textContent = "PROJECTS"

let resume = document.createElement('div');
resume.textContent = "RESUME"; 

header.appendChild(name); 
header.appendChild(about); 
header.appendChild(projects); 
header.appendChild(resume); 