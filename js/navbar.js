// -------------------------------------------------------Start Contact
const linkContact = document.createElement("a");
linkContact.setAttribute("class","nav-link");
linkContact.setAttribute("href","contact.html");
const nodeContact = document.createTextNode("Contact");
linkContact.appendChild(nodeContact);

const itemContact = document.createElement("li");
itemContact.setAttribute("class","nav-item");
itemContact.appendChild(linkContact);
// -------------------------------------------------------End Contact

// -------------------------------------------------------Start News
const linkNews = document.createElement("a");
linkNews.setAttribute("class","nav-link");
linkNews.setAttribute("href","news.html");
const nodeNews = document.createTextNode("News");
linkNews.appendChild(nodeNews);

const itemNews = document.createElement("li");
itemNews.setAttribute("class","nav-item");
itemNews.appendChild(linkNews);
// -------------------------------------------------------End News

// -------------------------------------------------------Start Activity
const linkReadingGroup = document.createElement("a");
linkReadingGroup.setAttribute("href","reading.html");
const nodeReadingGroup = document.createTextNode("Reading Group");
linkReadingGroup.appendChild(nodeReadingGroup)

const linklabAct = document.createElement("a");
linklabAct.setAttribute("href","activity.html");
const nodeLabAct = document.createTextNode("Lab Activities");
linklabAct.appendChild(nodeLabAct);

const dropdownActivityDiv = document.createElement("div");
dropdownActivityDiv.setAttribute("id","ddContent");
dropdownActivityDiv.setAttribute("class","dropdown-content");
dropdownActivityDiv.appendChild(linklabAct);
dropdownActivityDiv.appendChild(linkReadingGroup);

const linkActivity = document.createElement("a");
linkActivity.setAttribute("class","nav-link");
const nodeActivity = document.createTextNode("Activity");
linkActivity.appendChild(nodeActivity);

const itemActivity = document.createElement("li");
itemActivity.setAttribute("class","nav-item dropdown");

itemActivity.appendChild(linkActivity);
itemActivity.appendChild(dropdownActivityDiv);

// -------------------------------------------------------End Activity

// -------------------------------------------------------Start Research

const linkResources = document.createElement("a");
linkResources.setAttribute("href","resources.html");
const nodeResources = document.createTextNode("Resources");
linkResources.appendChild(nodeResources);

const linkPublications = document.createElement("a");
linkPublications.setAttribute("href","publication.html");
const nodePublications = document.createTextNode("Publications");
linkPublications.appendChild(nodePublications);

const linkProject = document.createElement("a");
linkProject.setAttribute("href","project.html");
const nodeProject = document.createTextNode("Project");
linkProject.appendChild(nodeProject);

const dropdownResearchDiv = document.createElement("div");
dropdownResearchDiv.setAttribute("id","ddContent");
dropdownResearchDiv.setAttribute("class","dropdown-content");

dropdownResearchDiv.appendChild(linkProject);
dropdownResearchDiv.appendChild(linkPublications);
dropdownResearchDiv.appendChild(linkResources);

const linkResearch = document.createElement("a");
linkResearch.setAttribute("class","nav-link");
const nodeResearch = document.createTextNode("Research");
linkResearch.appendChild(nodeResearch);

const itemResearch = document.createElement("li");
itemResearch.setAttribute("class","nav-item dropdown");

itemResearch.appendChild(linkResearch);
itemResearch.appendChild(dropdownResearchDiv);

// -------------------------------------------------------End Research

// -------------------------------------------------------Start People
const linkAlumni = document.createElement("a");
linkAlumni.setAttribute("href","alumni.html");
const nodeAlumni = document.createTextNode("Alumni");
linkAlumni.appendChild(nodeAlumni);

const linkMembers = document.createElement("a");
linkMembers.setAttribute("href","members.html");
const nodeMembers = document.createTextNode("Members");
linkMembers.appendChild(nodeMembers);

const dropdownPeopleDiv = document.createElement("div");
dropdownPeopleDiv.setAttribute("id","ddContent");
dropdownPeopleDiv.setAttribute("class","dropdown-content");
dropdownPeopleDiv.appendChild(linkMembers);
dropdownPeopleDiv.appendChild(linkAlumni);

const linkPeople = document.createElement("a");
linkPeople.setAttribute("class","nav-link");
const nodePeople = document.createTextNode("People");
linkPeople.appendChild(nodePeople);

const itemPeople = document.createElement("li");
itemPeople.setAttribute("class","nav-item dropdown");

itemPeople.appendChild(linkPeople);
itemPeople.appendChild(dropdownPeopleDiv);

// -------------------------------------------------------End People

// -------------------------------------------------------Start Home
const linkHome = document.createElement("a");
linkHome.setAttribute("class","nav-link");
linkHome.setAttribute("href","index.html");
const nodeHome = document.createTextNode("Home");
linkHome.appendChild(nodeHome);

const itemHome = document.createElement("li");
itemHome.setAttribute("class","nav-item");
itemHome.appendChild(linkHome);
// -------------------------------------------------------End Home

// .........................................................................................
const navbarUL = document.createElement("ul");
navbarUL.setAttribute("class","navbar-nav ml-auto");

navbarUL.appendChild(itemHome);
navbarUL.appendChild(itemPeople);
navbarUL.appendChild(itemResearch);
navbarUL.appendChild(itemActivity);
navbarUL.appendChild(itemNews);
navbarUL.appendChild(itemContact);

const navPagesList = document.createElement("div");
navPagesList.setAttribute("id","navPagesList");
navPagesList.setAttribute("class","collapse navbar-collapse");
navPagesList.appendChild(navbarUL);

// .........................................................................................
// =========================================================================================
const niseLogo = document.createElement("img");
niseLogo.setAttribute("id","niseLogo");
niseLogo.style.transition = "all 300ms ease";
niseLogo.setAttribute("src","image/logo.jpg");

const navbarBrand = document.createElement("a");
navbarBrand.setAttribute("class","navbar-brand");
navbarBrand.style.transition = "all 300ms ease";
navbarBrand.appendChild(niseLogo);

const navbarDiv = document.createElement("nav");
navbarDiv.setAttribute("id","navbar");
navbarDiv.setAttribute("class","navbar fixed-top navbar-expand-lg navbar-light");
navbarDiv.style.transition = "all 300ms ease";

navbarDiv.appendChild(navbarBrand);
navbarDiv.appendChild(navPagesList);

const niseNavbarDiv = document.getElementById("niseNavbar");
niseNavbarDiv.appendChild(navbarDiv);
// =========================================================================================
// set the nise Navbar style while upon load the page
var screenWidth = window.innerWidth;

if (screenWidth>780){
    navbarDiv.style.height ="120px";
    niseLogo.style.height ="90px";
    niseLogo.style.paddingLeft = "95%";  
}
else{
    navbarDiv.style.height ="90px";
    niseLogo.style.height ="50px";
    navbarBrand.style.height ="60px";
    niseLogo.style.paddingLeft = "5%";  
}
