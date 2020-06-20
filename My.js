 

function nav {
    var navbar = document.getElementById("navbar");
    navbar.style.backgroundColor = "green";
}

nav () 
 

function validateemail()  
{  
var x=document.contactForm.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  

Validateemail() 
