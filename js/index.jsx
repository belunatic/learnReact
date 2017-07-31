function logout() {
    FB.logout();
}

function checkLoginStatusAndLoadUserLikes() { 
    FB.login( function( response) 
    { 
        console.log(' We are live!!'); 
    }); 
}
