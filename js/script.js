//Get the button
var toTopBtn = document.getElementById("topBtn");
var navCloseBtn = document.getElementById("navCloseBtn")
var stickyNavbar = document.getElementById("navbar")
var nise_Logo = document.getElementById("niseLogo")
var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight,
  document.documentElement.clientHeight, document.documentElement.scrollHeight,
  document.documentElement.offsetHeight);
var scrheight = screen.height;
var scrinWidth = window.innerWidth;
var triggerPoint = limit-scrheight*1.2;


// When the user scrolls down 300px from the top of the document,the button appear
window.onscroll = function () { scrollFunction() };


function scrollFunction() {
  
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120 ) {    
    toTopBtn.style.display = "block";

    if (scrinWidth > 780 ) {
      // for laptop or pc view
      stickyNavbar.style.height = "70px";
      nise_Logo.style.height = "50px";
      nise_Logo.style.paddingLeft = "95%";      
    } 
    else{
      stickyNavbar.style.height = "65px";
      nise_Logo.style.height = "45px";
      nise_Logo.style.paddingLeft = "5%"; 
      navCloseBtn.style.top = "20px";
    }
    
  }
  else {
    toTopBtn.style.display = "none";

    if (scrinWidth > 780) {
      stickyNavbar.style.height = "120px";
      nise_Logo.style.height = "90px";
      nise_Logo.style.paddingLeft = "95%";
      
    } else {
      // for laptop or pc view
      stickyNavbar.style.height = "90px";
      nise_Logo.style.height = "50px";
      nise_Logo.style.paddingLeft = "5%";
      navCloseBtn.style.top = "28px";      
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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


