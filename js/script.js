//Get the button
var toTopBtn = document.getElementById("topBtn");
var toggleBtn = document.getElementById("navbarBtn")
var toggleContainer = document.getElementById("niseNavbarToggler")
var stickyNavbar = document.getElementById("navbar")
var nise_Logo = document.getElementById("niseLogo")
var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight,
  document.documentElement.clientHeight, document.documentElement.scrollHeight,
  document.documentElement.offsetHeight);
var scrheight = screen.height;
var scrinWidth = window.innerWidth;
var triggerPoint = limit-scrheight*1.2;

console.log(" the  screen inner width is ====:"+ (scrinWidth/10)+"%");
// console.log(" the  screen width is ====:"+ scrWidth);
// console.log(" the  triggerpoint  is ====:"+ triggerPoint);
// console.log(" the  document.body.scrollTop  is ====:"+ document.documentElement.scrollTop);


// When the user scrolls down 300px from the top of the document,the button appear
window.onscroll = function () { scrollFunction() };


function scrollFunction() {
  
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {    
    toTopBtn.style.display = "block";
    if (scrinWidth > 780 &&  document.body.scrollTop < triggerPoint  ||  document.documentElement.scrollTop < triggerPoint ) {
      stickyNavbar.style.height = "55px";
      nise_Logo.style.height = "50px";
      nise_Logo.style.paddingLeft = "95%";      
    } 
    else if (document.body.scrollTop < triggerPoint  ||  document.documentElement.scrollTop < triggerPoint) {
      stickyNavbar.style.height = "80px";
      nise_Logo.style.height = "60px";
      nise_Logo.style.paddingLeft = "5%";     
      
    }
    
  }
  else {
    toTopBtn.style.display = "none";
    if (scrinWidth > 780) {
      stickyNavbar.style.height = "120px";
      nise_Logo.style.height = "90px";
      nise_Logo.style.paddingLeft = "95%";
      
    } else {
      stickyNavbar.style.height = "80px";
      nise_Logo.style.height = "60px";
      nise_Logo.style.paddingLeft = "5%";      
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function closeNavBar() {
  toggleContainer.style.visibility = 'hidden';
}

function openModal(clicked_id) {
  // console.log('The modal id is ---> '+clicked_id);
  var w = window.innerWidth;
  if (w > 780) {
    var modal = document.getElementById("modal" + clicked_id);
    modal.style.display = "block"
  }
}

function closeModal(clicked_id) {
  // console.log('The modal id is ---> '+clicked_id);
  var modal = document.getElementById(clicked_id);
  modal.style.display = "none"
}


