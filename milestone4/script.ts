const form = document.getElementById('submission-form') as HTMLFormElement;
const submissionDisplayElement = document.getElementById('submission-form-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

const name = (document.getElementById('name') as HTMLInputElement)?.value ||''
const fathername = (document.getElementById('father-name') as HTMLInputElement)?.value || ''
const cnic = (document.getElementById('cnic') as HTMLInputElement)?.value || ''
const email = (document.getElementById('email') as HTMLInputElement)?.value || ''
const phone= (document.getElementById('phone') as HTMLInputElement)?.value || ''
const education = (document.getElementById('education') as HTMLTextAreaElement)?.value || ''
const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value || ''
const skills = (document.getElementById('skills') as HTMLTextAreaElement)?.value || ''

const submissionHTML = `

<h2><b>Editable Submission</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Fathername:</b><span contenteditable="true">${fathername}</span></p>
<p><b>Cnic:</b><span contenteditable="true">${cnic}</span></p>
<p><b>Email:</b><span contenteditable="true">${email}</span></p>
<p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

<h3>Education</h3>
<p contenteditable="true">${education}</p>

<h3>Experience</h3>
<p contenteditable="true">${experience}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills}</p>
`;


if (submissionDisplayElement){
    submissionDisplayElement.innerHTML = submissionHTML;
    submissionDisplayElement.style.display = 'block';
}else {
    console.error('The submission display element is missing');
}
})