
// toggle icon navbar
let menuIcon =  document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


 
//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop - 100;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

            //active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        //animations that repeat on scroll
        else{
            sec.classList.remove('show-animate');
        }

    });
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100); 

    //close toggle icon and navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active'); 

    //footer animation
    let footer=document.querySelector('footer');

    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

     ////////////////////////////////////////////////////////
     

// Assuming you have a form with the ID "contactForm"
const contactForm = document.getElementById('contact');
const submitMessage = document.getElementById('submitMessage'); // Assuming you've added this element to your HTML

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Your form data processing logic here, e.g., sending data to a server
    // ...

    // Display the "Submitted" message
    submitMessage.textContent = 'Submitted!';

    // Optionally, reset the form after a delay
    setTimeout(() => {
        contactForm.reset();
        submitMessage.textContent = '';
    }, 3000); // Reset after 3 seconds
});

}