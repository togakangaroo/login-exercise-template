(function(){
    var login
        ;
    
    login = function(username, password) {
        return password === username;
    }
    
    window.loginApp = {
        
        // A function that will return true if the username matches the password
        // and false otherwise
        // USAGE:
        //  var result = window.loginApp.login(username, password);
        login: login
    };
}).call();