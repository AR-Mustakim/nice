//Get the button
var topButton = document.getElementById("topBtn");
var toggleBtn = document.getElementById("navbarBtn")
var toggleContainer = document.getElementById("niseNavbarToggler")
var stickyNavbar = document.getElementById("navbar")
var niseLogo = document.getElementById("navbar-nise-logo")
var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight,
  document.documentElement.clientHeight, document.documentElement.scrollHeight,
  document.documentElement.offsetHeight);
var scrheight = screen.height;
var wWidth = window.innerWidth;
var triggerPoint = limit-scrheight*1.2;

console.log(" the  limit is ====:"+ limit);
console.log(" the  triggerpoint  is ====:"+ triggerPoint);
console.log(" the  document.body.scrollTop  is ====:"+ document.documentElement.scrollTop);

// When the user scrolls down 300px from the top of the document,the button appear
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
    topButton.style.display = "block";
    if (wWidth > 780 &&  document.body.scrollTop < triggerPoint  &&  document.documentElement.scrollTop < triggerPoint ) {
      stickyNavbar.style.height = "55px";
      niseLogo.style.height = "50px";
      niseLogo.style.paddingLeft = "150%";
      stickyNavbar.style.opacity = "1";
    } 
    else if (wWidth < 781 && document.body.scrollTop < 1000) {
      stickyNavbar.style.height = "80px";
      niseLogo.style.height = "60px";
      niseLogo.style.padding = "5%";
      stickyNavbar.style.opacity = "1";
    }
    else{
      stickyNavbar.style.height = "0px";
      stickyNavbar.style.opacity = "0";
      niseLogo.style.height = "0px";    
    }
  }
  else {
    if (wWidth > 780) {
      stickyNavbar.style.height = "120px";
      niseLogo.style.height = "90px";
      niseLogo.style.paddingLeft = "100%";
      stickyNavbar.style.opacity = "1";
    } else {
      stickyNavbar.style.height = "80px";
      niseLogo.style.height = "60px";
      niseLogo.style.padding = "5%";
      stickyNavbar.style.opacity = "1";
    }
    topButton.style.display = "none";
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


