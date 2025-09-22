function toggleMenu() {
            const sidemenu = document.getElementById("sidemenu");
            const content = document.getElementById("content");
            
            
            sidemenu.classList.toggle('active');
            content.classList.toggle('active');
        }