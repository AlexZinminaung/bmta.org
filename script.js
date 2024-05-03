let mobile_btn = document.getElementsByClassName("menu-for-mobile")[0];
let mobile_navbar = document.getElementsByClassName("navbar-for-mobile")[0];


const openMobileNavbar = () => {
    mobile_navbar.classList.toggle('active');
}


mobile_btn.addEventListener('click', openMobileNavbar);

// Clickable link button for projects 

let mobile_project_link_btn = document.getElementsByClassName('project-link-mobile')[0];
let mobile_project_links = document.getElementsByClassName('dropdown-mobile-projects-links')[0];

const openMobileProject_links = () => {
    mobile_project_links.classList.toggle('active');
}


mobile_project_link_btn.addEventListener('click', openMobileProject_links);


// Clickable link button for teacher training 

let mobile_teacher_training_link_btn = document.getElementsByClassName('training-link-mobile')[0];
let mobile_teacher_training_links = document.getElementsByClassName('dropdown-mobile-teacher-training-links')[0];

const openMobileTraining_links = () => {
    mobile_teacher_training_links.classList.toggle('active');
}

mobile_teacher_training_link_btn.addEventListener('click', openMobileTraining_links);


// Clickable link button for EDUCATION AND EMERGENCY RESPONSE link training 

let mobile_edu_emer_link_btn = document.getElementsByClassName('edu-emer-link-mobile')[0];
let mobile_edu_emer_links = document.getElementsByClassName('dropdown-mobile-edu-emer-links')[0];

const openMobileEduEmer_links = () => {
    mobile_edu_emer_links.classList.toggle('active');
}

mobile_edu_emer_link_btn.addEventListener('click', openMobileEduEmer_links);

// binner slider

let slide_index = 0;
let delay = 4000;
let slides_list = document.getElementsByClassName('binner');

const autoSlide = () => {
    slides_list[slide_index].classList.remove('showSlide');
    if(slide_index < slides_list.length -1)
    {
        slide_index += 1;
        slides_list[slide_index].classList.add('showSlide')
    }

    else {
        slide_index = 0;
        slides_list[slide_index].classList.add('showSlide')
    }

}

slides_list[slide_index].classList.add('showSlide')
// automate slider
setInterval(autoSlide, delay)
