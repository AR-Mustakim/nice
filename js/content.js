// ============================================
// This script file just for content style
// ============================================


const niseContent = document.getElementById("niseContent");
niseContent.style.backgroundImage = "url('image/bg3.jpg')";
niseContent.style.backgroundSize = "cover";
niseContent.style.backgroundRepeat = "no-repeat";

const niseContainer = document.getElementById("niseContainer");

if (screenWidth > 780) {
  niseContent.style.paddingTop = "150px";
}
else {
  niseContent.style.paddingTop = "100px";
}


document.getElementById("jourBtn").click();
document.getElementById("filterBtn").click();


// ===========================================
//          For publication tab 
// ===========================================
function openTabs(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

