function validateSection(){

    
       
}


function showSection(sectionNumber) {
    document.querySelectorAll('.section').forEach(section => section.classList.add('d-none'));
    document.getElementById('section' + sectionNumber).classList.remove('d-none');
}

function nextSection(sectionNumber) {
    showSection(sectionNumber);
    if (validateSection(sectionNumber - 1)) {
        showSection(sectionNumber);
    }
}


function prevSection(sectionNumber) {
    showSection(sectionNumber);
}

function submitForm(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    document.getElementById("FormSections").reset();
    showSection(5);
}

function showSection(sectionNumber) {
    document.querySelectorAll('.section').forEach(section => section.classList.add('d-none'));
    document.getElementById('section' + sectionNumber).classList.remove('d-none');
}

function nextSection(sectionNumber) {
    showSection(sectionNumber);
}

function prevSection(sectionNumber) {
    showSection(sectionNumber);
}

function submitForm(event) {
    event.preventDefault();
    alert("Submitted Successfully!");
    document.getElementById("FormSections").reset();
    showSection(0);
}


document.addEventListener('DOMContentLoaded', () => showSection(0));

document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('Toggle');
    const currentMode = localStorage.getItem('mode') || 'dark-mode';
    document.body.classList.add(currentMode);

    modeToggle.textContent = currentMode === 'dark-mode' ? 'Light Mode' : 'Dark Mode';

    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        const newMode = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        modeToggle.textContent = newMode === 'dark-mode' ? 'Light Mode' : 'Dark Mode';
        localStorage.setItem('mode', newMode);
    });
});


function nextSection(sectionNumber) {
    if (sectionNumber === 4) {
        document.getElementById("reviewName").innerText = document.getElementById("name").value;
        document.getElementById("reviewLastName").innerText = document.getElementById("name2").value;
        document.getElementById("reviewAge").innerText = document.getElementById("age").value;
        document.getElementById("reviewEmail").innerText = document.getElementById("email").value;
        document.getElementById("reviewPhone").innerText = document.getElementById("phone").value;
        document.getElementById("reviewFeedback").innerText = document.getElementById("feedback").value;
    }
    showSection(sectionNumber);
}