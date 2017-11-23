(function(global, $){
    
    var Contact = function(firstName, lastName, email){
        return new Contact.init(firstName, lastName, email);
    }
    
    Contact.prototype = {
        
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        },
        
    };
    
    Contact.init = function(firstName, lastName, email){
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = email || '';
        
    }
    
    Contact.init.prototype = Contact.prototype;
    
    global.Contact = global.C$ = Contact;
    
}(window, jQuery));