function Contact(firstName, lastName, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.getName = function(){
        return firstName + ' ' + lastName;
    };
};

var os = new Contact('Jan', 'Nowak', 'aaa@asd.pl');
var osoba1 = os.getName();
console.log(osoba1);

var c = C$('Jan', 'Kowalski')
var osoba2 = c.fullName();
console.log(osoba2);


var ul = $("ul")
var li = $("ul.people li")

ul.append('<li>'+osoba1+'</li>');
ul.append('<li>'+osoba2+'</li>');
