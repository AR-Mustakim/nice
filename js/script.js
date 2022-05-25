//Get the button
var mybutton = document.getElementById("topBtn");
var toggleBtn = document.getElementById("navbarBtn")
var toggleContainer = document.getElementById("niseNavbarToggler")

// When the user scrolls down 200px from the top of the document,the button appear
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
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

 function openModal(clicked_id){
  // console.log('The modal id is ---> '+clicked_id);
  var w = window.innerWidth;
  if(w >780){
    var modal = document.getElementById("modal"+clicked_id);
    modal.style.display = "block"
  }
 }

 function closeModal(clicked_id){
  // console.log('The modal id is ---> '+clicked_id);
  var modal = document.getElementById(clicked_id);
  modal.style.display = "none"
 }
