var q = $("ul.people li").addClass("newClass");
console.log(q);

var test = 'Test';
var p = document.getElementById('p1');
p.textContent = test + ' ' + p.textContent + ' ' + q[0].outerText;


var g = G$('John', 'Doe');
//console.log(g);
g.greet().setLang('en').greet(true).log();


$('#login').click(function() {
   
    var loginGrtr = G$('John', 'Doe');
    
    $('#logindiv').hide();
    
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});