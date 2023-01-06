let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 
// function submitform(){
    const form = document.getElementById('form')
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const number = document.getElementById('number')
    const subject = document.getElementById('subject')
    const message = document.getElementById('message')
    
form.addEventListener('submit', e => {
    e.preventDefault();
alert('Thanks, We have got your feedback!')
   // validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();


    if(nameValue === '') {
        setError(name, 'name is required');
    } else {
        setSuccess(name);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(numberValue === '') {
        setError(number, 'number is required');
    } else if (numberValue.length < 8 ) {
        setError(number, 'number must be at least 8 character.')
    } else {
        setSuccess(number);
    }

    if(subjectValue === '') {
        setError(subject, 'Please write the title of your message');
    
    } 

    if(messageValue === '') {
        setError(message, 'Please write your message here');
    } else if (messageValue.length < 8 ) {
        setError(number, 'message must be at least 8 character.')
    } else {
        setSuccess(message);
    }


};






let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});