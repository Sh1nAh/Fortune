const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

function setActiveLink() {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => link.classList.remove('active'));

    if (currentSection) {
        const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

window.addEventListener('scroll', setActiveLink);

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
        });
    });
});

setActiveLink();

const priceTags = document.querySelectorAll('.price-tag');
priceTags.forEach(tag => {
    tag.addEventListener('click', function() {
        priceTags.forEach(tag => tag.classList.remove('active'));
        this.classList.add('active');
    });
});

const sliderDots = document.querySelectorAll('.dot');
sliderDots.forEach(dot => {
    dot.addEventListener('click', function() {
        sliderDots.forEach(dot => dot.classList.remove('active'));
        this.classList.add('active');
    });
});

const form = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');
const successMessage = document.querySelector('.email-success');
const failureMessage = document.querySelector('.email-failure');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    submitButton.disabled = true;
    submitButton.textContent = "Please wait...";
    
    setTimeout(function(){
        form.classList.add('hidden');

        const isSubmissionSuccessful = Math.random() > 0.5;

        successMessage.style.display = 'none';
        failureMessage.style.display = 'none';

        if (isSubmissionSuccessful) {
            successMessage.style.display = 'block';
        }
        else {
            failureMessage.style.display = 'block';
        }
    },2000)
});