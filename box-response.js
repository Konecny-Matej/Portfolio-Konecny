
       const loginBox = document.querySelector('.login-box');

loginBox.addEventListener('mousemove', (e) => {

    const rect = loginBox.getBoundingClientRect();
    
    const mouseX = e.clientX - rect.left - rect.width / 5;
    const mouseY = e.clientY - rect.top - rect.height / 2;

   
    const rotateY = mouseX / 10;
    const rotateX = mouseY / 5;

    
    loginBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});


loginBox.addEventListener('mouseleave', () => {
    
    loginBox.style.transform = 'rotateX(0) rotateY(0)';
});




