/*----- constants -----*/
const display = 0;

/*----- state variables -----*/



/*----- cached elements  -----*/
const education = document.getElementById('education');
const work = document.getElementById('work');
const edBtn = document.getElementById('education-btn');
const workBtn = document.getElementById('work-btn');



/*----- event listeners -----*/
edBtn.addEventListener('click', handleEducation);
workBtn.addEventListener('click', handleWork);


/*----- functions -----*/

function handleWork() {
  if(work.style.display === "none") {
    work.style.display = 'block';
    education.style.display = 'none';
  }
}

function handleEducation() {
  if(education.style.display === "none") {
    education.style.display = 'block';
    work.style.display = 'none';
  }
}
