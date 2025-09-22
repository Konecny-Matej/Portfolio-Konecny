function continueAsGuest() {
        
        sessionStorage.setItem('isLoggedIn', 'true');
        
        window.location.href = "index.html"; 
    }
