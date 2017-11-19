var q = $("ul.people li");
console.log(q);

var test = 'Test';
var p = document.getElementById('p1');
p.textContent = test + ' ' + p.textContent + ' ' + q[0].outerText;
