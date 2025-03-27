// Query Selectors
const bioWrapper = document.querySelector('.bioWrapper')
const header = document.querySelector('.header');



// bio
const startDate = new Date("2025-01-08")

const today = new Date();
today.setHours(0,0,0,0); 

const timeDifference = today - startDate 
const daysCoding = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

let bio = document.createElement('div');
bio.textContent = `I have been programming for ${daysCoding} days.`;

header.appendChild(bio);
