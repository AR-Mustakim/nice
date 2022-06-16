// -------------------------------------------------------Start Contact
const linkContact = document.createElement("a");
linkContact.setAttribute("class", "nav-link");
linkContact.setAttribute("href", "contact.html");
const nodeContact = document.createTextNode("Contact");
linkContact.appendChild(nodeContact);

const itemContact = document.createElement("li");
itemContact.setAttribute("class", "nav-item");
itemContact.appendChild(linkContact);
// -------------------------------------------------------End Contact

// -------------------------------------------------------Start News
const linkNews = document.createElement("a");
linkNews.setAttribute("class", "nav-link");
linkNews.setAttribute("href", "news.html");
const nodeNews = document.createTextNode("News");
linkNews.appendChild(nodeNews);

const itemNews = document.createElement("li");
itemNews.setAttribute("class", "nav-item");
itemNews.appendChild(linkNews);
// -------------------------------------------------------End News

// -------------------------------------------------------Start Activity
const linkReadingGroup = document.createElement("a");
linkReadingGroup.setAttribute("href", "reading.html");
const nodeReadingGroup = document.createTextNode("Reading Group");
linkReadingGroup.appendChild(nodeReadingGroup)

const linklabAct = document.createElement("a");
linklabAct.setAttribute("href", "activity.html");
const nodeLabAct = document.createTextNode("Lab Activities");
linklabAct.appendChild(nodeLabAct);

const dropdownActivityDiv = document.createElement("div");
dropdownActivityDiv.setAttribute("id", "ddContent");
dropdownActivityDiv.setAttribute("class", "dropdown-content");
dropdownActivityDiv.appendChild(linklabAct);
dropdownActivityDiv.appendChild(linkReadingGroup);

const linkActivity = document.createElement("a");
linkActivity.setAttribute("class", "nav-link");
const nodeActivity = document.createTextNode("Activity");
linkActivity.appendChild(nodeActivity);

const itemActivity = document.createElement("li");
itemActivity.setAttribute("class", "nav-item dropdown");

itemActivity.appendChild(linkActivity);
itemActivity.appendChild(dropdownActivityDiv);

// -------------------------------------------------------End Activity

// -------------------------------------------------------Start Research

const linkResources = document.createElement("a");
linkResources.setAttribute("href", "resources.html");
const nodeResources = document.createTextNode("Resources");
linkResources.appendChild(nodeResources);

const linkPublications = document.createElement("a");
linkPublications.setAttribute("href", "publication.html");
const nodePublications = document.createTextNode("Publications");
linkPublications.appendChild(nodePublications);

const linkProject = document.createElement("a");
linkProject.setAttribute("href", "project.html");
const nodeProject = document.createTextNode("Project");
linkProject.appendChild(nodeProject);

const dropdownResearchDiv = document.createElement("div");
dropdownResearchDiv.setAttribute("id", "ddContent");
dropdownResearchDiv.setAttribute("class", "dropdown-content");

dropdownResearchDiv.appendChild(linkProject);
dropdownResearchDiv.appendChild(linkPublications);
dropdownResearchDiv.appendChild(linkResources);

const linkResearch = document.createElement("a");
linkResearch.setAttribute("class", "nav-link");
const nodeResearch = document.createTextNode("Research");
linkResearch.appendChild(nodeResearch);

const itemResearch = document.createElement("li");
itemResearch.setAttribute("class", "nav-item dropdown");

itemResearch.appendChild(linkResearch);
itemResearch.appendChild(dropdownResearchDiv);

// -------------------------------------------------------End Research

// -------------------------------------------------------Start People
const linkAlumni = document.createElement("a");
linkAlumni.setAttribute("href", "alumni.html");
const nodeAlumni = document.createTextNode("Alumni");
linkAlumni.appendChild(nodeAlumni);

const linkMembers = document.createElement("a");
linkMembers.setAttribute("href", "members.html");
const nodeMembers = document.createTextNode("Members");
linkMembers.appendChild(nodeMembers);

const dropdownPeopleDiv = document.createElement("div");
dropdownPeopleDiv.setAttribute("id", "ddContent");
dropdownPeopleDiv.setAttribute("class", "dropdown-content");
dropdownPeopleDiv.appendChild(linkMembers);
dropdownPeopleDiv.appendChild(linkAlumni);

const linkPeople = document.createElement("a");
linkPeople.setAttribute("class", "nav-link");
const nodePeople = document.createTextNode("People");
linkPeople.appendChild(nodePeople);

const itemPeople = document.createElement("li");
itemPeople.setAttribute("class", "nav-item dropdown");

itemPeople.appendChild(linkPeople);
itemPeople.appendChild(dropdownPeopleDiv);

// -------------------------------------------------------End People

// -------------------------------------------------------Start Home
var linkHome = document.createElement("a");
linkHome.setAttribute("class", "nav-link");
linkHome.setAttribute("href", "index.html");
var nodeHome = document.createTextNode("Home");
linkHome.appendChild(nodeHome);

var itemHome = document.createElement("li");
itemHome.setAttribute("class", "nav-item");
itemHome.appendChild(linkHome);
// -------------------------------------------------------End Home

// .........................................................................................
const navbarUL = document.createElement("ul");
navbarUL.setAttribute("class", "navbar-nav ml-auto");

navbarUL.appendChild(itemHome.cloneNode(true));
navbarUL.appendChild(itemPeople.cloneNode(true));
navbarUL.appendChild(itemResearch.cloneNode(true));
navbarUL.appendChild(itemActivity.cloneNode(true));
navbarUL.appendChild(itemNews.cloneNode(true));
navbarUL.appendChild(itemContact.cloneNode(true));

const navPagesList = document.createElement("div");
navPagesList.setAttribute("id", "navPagesList");
navPagesList.setAttribute("class", "collapse navbar-collapse");
navPagesList.appendChild(navbarUL);

// .........................................................................................
// *****************************************************************************************
//                                Mobile View Navigation
// *****************************************************************************************



const navButton = document.createElement("button");
navButton.setAttribute("id", "navBtn");
navButton.setAttribute("onclick", "navBtnOnClick()");
navButton.style.width = "35px";
navButton.style.height = "30px";
navButton.style.padding = "0";



// ************************************* navToggle Container content

const navCloseButton = document.createElement("button");
navCloseButton.setAttribute("id", "navCloseBtn");
navCloseButton.setAttribute("onclick", "navCloseBtnOnClick()");
navCloseButton.style.width = "30px";
navCloseButton.style.height = "30px";
navCloseButton.style.padding = "0";
const navCloseBtnImg = document.createElement("img");
navCloseBtnImg.setAttribute("src", "image/navCloseBtn-green.png");
navCloseButton.appendChild(navCloseBtnImg);

// **************************************************
var link_Home = document.createElement("a");
link_Home.setAttribute("class", "nav-link");
link_Home.setAttribute("href", "index.html");
var node_Home = document.createTextNode("Home");
link_Home.appendChild(node_Home);
// **************************************************
var link_Member = document.createElement("a");
link_Member.setAttribute("class", "nav-link");
link_Member.setAttribute("href", "members.html");
var node_Member = document.createTextNode("Member");
link_Member.appendChild(node_Member);
// **************************************************
var link_Alumni = document.createElement("a");
link_Alumni.setAttribute("class", "nav-link");
link_Alumni.setAttribute("href", "alumni.html");
var node_Alumni = document.createTextNode("Alumni");
link_Alumni.appendChild(node_Alumni);
// **************************************************
var link_Project = document.createElement("a");
link_Project.setAttribute("class", "nav-link");
link_Project.setAttribute("href", "project.html");
var node_Project = document.createTextNode("Project");
link_Project.appendChild(node_Project);
// **************************************************
var link_Publication = document.createElement("a");
link_Publication.setAttribute("class", "nav-link");
link_Publication.setAttribute("href", "publication.html");
var node_Publication = document.createTextNode("Publication");
link_Publication.appendChild(node_Publication);
// **************************************************
var link_Activity = document.createElement("a");
link_Activity.setAttribute("class", "nav-link");
link_Activity.setAttribute("href", "activity.html");
var node_Activity = document.createTextNode("Activity");
link_Activity.appendChild(node_Activity);
// **************************************************
var link_News = document.createElement("a");
link_News.setAttribute("class", "nav-link");
link_News.setAttribute("href", "news.html");
var node_News = document.createTextNode("News");
link_News.appendChild(node_News);
// **************************************************
var link_Contact = document.createElement("a");
link_Contact.setAttribute("class", "nav-link");
link_Contact.setAttribute("href", "contact.html");
var node_Contact = document.createTextNode("Contact");
link_Contact.appendChild(node_Contact);
// **************************************************

const toggleNavUl = document.createElement("ul");
toggleNavUl.appendChild(link_Home);
toggleNavUl.appendChild(link_Member);
toggleNavUl.appendChild(link_Alumni);
toggleNavUl.appendChild(link_Project);
toggleNavUl.appendChild(link_Publication);
toggleNavUl.appendChild(link_Activity);
toggleNavUl.appendChild(link_News);
toggleNavUl.appendChild(link_Contact);


const toggleNavDiv = document.createElement("div");
toggleNavDiv.setAttribute("class", "toggleNavDiv");
toggleNavDiv.appendChild(toggleNavUl);

const navTC = document.createElement("div");
navTC.setAttribute("id", "navTC");
navTC.appendChild(navCloseButton);
navTC.appendChild(toggleNavDiv);

const navToggleContainer = document.createElement("div");
navToggleContainer.setAttribute("id", "navToggleContainer");
navToggleContainer.style.display = "none";
navToggleContainer.style.right = "-300px";
navToggleContainer.style.width = "45vw";
navToggleContainer.style.height = "100vh";
navToggleContainer.style.zIndex = "10000";
navToggleContainer.style.position = "fixed";
navToggleContainer.appendChild(navTC);
// navToggleContainer.appendChild(toggleNavDiv);


const navBtnImg = document.createElement("img");
navBtnImg.setAttribute("src", "image/navBtn.png");
navButton.appendChild(navBtnImg);

function navBtnOnClick() {
    navToggleContainer.style.display = "block";
    navToggleContainer.style.right = "0px";
    navButton.style.opacity = "0"
    navCloseBtnImg.style.animation = "unsqueeze 300ms";
    navCloseButton.style.visibility = "visible";
}

function navCloseBtnOnClick() {
    navToggleContainer.style.displa = "none";
    navToggleContainer.style.right = "-300px";
    navButton.style.opacity = "1"
    navBtnImg.style.animation = "unsqueeze 300ms";
    navCloseButton.style.visibility = "hidden";
    navCloseBtnImg.style.animation = "squeeze 300ms";
}

// *****************************************************************************************

// =========================================================================================
const niseLogo = document.createElement("img");
niseLogo.setAttribute("id", "niseLogo");
niseLogo.style.transition = "all 300ms ease";
niseLogo.setAttribute("src", "image/logo.jpg");

const navbarBrand = document.createElement("a");
navbarBrand.setAttribute("class", "navbar-brand");
navbarBrand.style.transition = "all 300ms ease";
navbarBrand.appendChild(niseLogo);

const navbarDiv = document.createElement("nav");
navbarDiv.setAttribute("id", "navbar");
navbarDiv.setAttribute("class", "navbar fixed-top navbar-expand-lg navbar-light");
navbarDiv.style.transition = "all 300ms ease";

navbarDiv.appendChild(navbarBrand);
navbarDiv.appendChild(navPagesList);
navbarDiv.appendChild(navButton);

const niseNavbarDiv = document.getElementById("niseNavbar");
niseNavbarDiv.appendChild(navbarDiv);
niseNavbarDiv.appendChild(navToggleContainer);
// =========================================================================================
// set the nise Navbar style while upon load the page
// =========================================================================================


var screenWidth = window.innerWidth;

if (screenWidth > 780) {
    navbarDiv.style.height = "120px";
    niseLogo.style.height = "90px";
    niseLogo.style.paddingLeft = "95%";
    navButton.style.visibility = "Hidden";
}
else {
    navbarDiv.style.height = "90px";
    niseLogo.style.height = "50px";
    navbarBrand.style.height = "60px";
    niseLogo.style.paddingLeft = "5%";
    navButton.style.visibility = "Visible";
}
