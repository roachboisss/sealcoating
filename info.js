const businessInfo = {
  "name": "Business Name", 
  "number": "(123) 456-7890", 
  "year": "2025", 
  "email": "businessemail@gmail.com", 
  "about": "About the business goes here", 
  "owner": "Owners name", 
  "mission": "Mission statement"
};

// Wait for the DOM to be fully loaded before trying to access elements
document.addEventListener('DOMContentLoaded', function() {
  // Update page title
  document.title = businessInfo.name;
  
  // Update all elements with ID "name"
  const nameElements = document.querySelectorAll('#name');
  nameElements.forEach(element => {
    element.textContent = businessInfo.name;
  });
  
  // Update other elements
  if(document.getElementById("number")) document.getElementById("number").textContent = businessInfo.number;
  if(document.getElementById("year")) document.getElementById("year").textContent = businessInfo.year;
  if(document.getElementById("email")) document.getElementById("email").textContent = businessInfo.email;
  if(document.getElementById("about")) document.getElementById("about").textContent = businessInfo.about;
  if(document.getElementById("owner")) document.getElementById("owner").textContent = businessInfo.owner;
  if(document.getElementById("mission")) document.getElementById("mission").textContent = businessInfo.mission;
});
