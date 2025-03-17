const businessInfo = {
  //General info
  "name": "Business name",                     //Business name
  "number": "(123) 456-7890",                  //Business number
  "year": "2025",                              //Current year
  "businessemail": "businessemail@gmail.com",  //Business email
  "about": "About the business goes here",     //About business for about page
  "owner": "Owners name",                      //Business owners name (owns business nunber and emal)
  "mission": "Mission statement",              //Business mission statement
  //Services                                   //
   "service1": "Service 1 name",               //Service 1
   "service1desc": "About service 1 here",     //Service 1 description
   "service2": "Service 2 name",               //Service 2
   "service2desc": "About service 2 here",     //Service 2 description
   "service3": "Service 3 name",               //Service 3
   "service3desc": "About service 3 here"      //Service 3 description
};

document.addEventListener('DOMContentLoaded', function() {
  document.title = businessInfo.name;
  
  const nameElements = document.querySelectorAll('#name');
  nameElements.forEach(element => {
    element.textContent = businessInfo.name;
  });
  
  if(document.getElementById("number")) document.getElementById("number").textContent = businessInfo.number;
  if(document.getElementById("year")) document.getElementById("year").textContent = businessInfo.year;
  if(document.getElementById("businessemail")) document.getElementById("businessemail").textContent = businessInfo.businessemail;
  if(document.getElementById("about")) document.getElementById("about").textContent = businessInfo.about;
  if(document.getElementById("owner")) document.getElementById("owner").textContent = businessInfo.owner;
  if(document.getElementById("mission")) document.getElementById("mission").textContent = businessInfo.mission;
  if(document.getElementById("service1")) document.getElementById("service1").textContent = businessInfo.service1;
  if(document.getElementById("service1desc")) document.getElementById("service1desc").textContent = businessInfo.service1desc;
  if(document.getElementById("service2")) document.getElementById("service2").textContent = businessInfo.service2;
  if(document.getElementById("service2desc")) document.getElementById("service2desc").textContent = businessInfo.service2desc;
  if(document.getElementById("service3")) document.getElementById("service3").textContent = businessInfo.service3;
  if(document.getElementById("service3desc")) document.getElementById("service3desc").textContent = businessInfo.service3desc;
});
