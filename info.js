const businessInfo = {
  "name": "Business Name",                     //Business name
  "number": "(123) 456-7890",                  //Business number
  "year": "2025",                              //Current year
  "businessemail": "businessemail@gmail.com",  //Business email
  "about": "About the business goes here",     //About business for about page
  "owner": "Owners name",                      //Business owners name (owns business nunber and emal)
  "mission": "Mission statement"               //Business mission statement
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
});
