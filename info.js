const txt = '{"name":"Business Name", "number":"(123) 456-7890", "year":"2025", "email":"businessemail@gmail.com"}'

const obj = JSON.parse(txt);
document.getElementById("name").innerHTML = obj.name + " ";
document.getElementById("number").innerHTML = obj.number + " ";
document.getElementById("year").innerHTML = obj.year + " ";
document.getElementById("email").innerHTML = obj.email + " ";
