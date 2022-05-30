// ============================================
// This script file just for content style
// ============================================

const niseContent = document.getElementById("niseNavbar");
niseContent.style.backgroundImage ="url('../image/bg3.jpg')";
niseContent.style.backgroundSize ="cover";
niseContent.style.backgroundRepeat ="no-repeat";

if (screenWidth>780){
    niseContent.style.paddingTop ="100px";
}
else{
    niseContent.style.paddingTop ="50px";
}