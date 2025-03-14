const txt = '{"name":"Business Name", "number":"(123) 456-7890", "year":"2025", "email":"businessemail@gmail.com", "about":"About the business goes here", "owner":"Owners name", "mission":"Mission statement"}'
//VARIABLES
//name - name of business
//number - business number
//year - current year
//email - business email
//about - about the business
//owner - name of the company owner
//mission - the mission statement
const obj = JSON.parse(txt);
document.getElementById("name").innerHTML = obj.name + " ";
document.getElementById("number").innerHTML = obj.number + " ";
document.getElementById("year").innerHTML = obj.year + " ";
document.getElementById("email").innerHTML = obj.email + " ";
document.getElementById("about").innerHTML = obj.about + " ";
document.getElementById("owner").innerHTML = obj.owner + " ";
document.getElementById("mission").innerHTML = obj.mission + " ";
