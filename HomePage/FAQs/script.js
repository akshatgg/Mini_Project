function showPopup() {
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = 'block';
}

function closePopup() {
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = 'none';
}

// window.onload = showPopup();   


let signinbtn = document.getElementById("signinbtn");
let signupbtn = document.getElementById("signupbtn");
let title = document.getElementById("title");
let firstN = document.getElementById("firstN");
let lastN = document.getElementById("lastN");

let login = true;

function setup() {
    signinbtn.addEventListener("click", () => {
        login = true;
        title.innerText = "Sign in";
        firstN.style.display = 'none';
        lastN.style.display = 'none';
    });

    signupbtn.addEventListener("click", () => {
        login = false;
        title.innerText = "Sign up";
        firstN.style.display = 'block';
        lastN.style.display = 'block';
    });
}

// Call the setup function to set up the event listeners
setup();




// JavaScript to add a class on the first hover and remove the hover event listener



document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function hoverHandler() {
        if (!this.classList.contains('darken')) {
            this.classList.add('darken');
            this.removeEventListener('mouseenter', hoverHandler);
        }
    });
});