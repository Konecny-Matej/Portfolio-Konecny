function continueAsGuest() {
        
        sessionStorage.setItem('isLoggedIn', 'true');
        
        window.location.href = "main.html"; 
    }
