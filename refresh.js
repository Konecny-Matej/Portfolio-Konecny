
        if (sessionStorage.getItem('isLoggedIn') !== 'true') {
           
            window.location.replace("login.html");
        }
        
        
        window.addEventListener('beforeunload', function() {
            sessionStorage.removeItem('isLoggedIn');
        });

