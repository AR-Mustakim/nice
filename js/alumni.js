// ===========================================================< alumnis >=====================================================

const alumni = [
  
  {
    "Name": "Ji-Wook Jung",
    "Degree": "MS",
    "Year": "2022",
    "Dissertation":"A method for Security Requirement Recomendation using Case-Based Problem Domain Ontology",
  },
  {
    "Name": "Kyung-Sik Kim",
    "Degree": "MS",
    "Year": "2020",
    "Dissertation":"Using Requirements Engineering to support Non-Functional Requirements Elicitation for DAQ System",
  },
  {
    "Name": "Jin-Seoung Oh",
    "Degree": "MS",
    "Year": "2021",
    "Dissertation":"AI Reasoning on Emotion-Needs for Autism Spectrum Disorder",
  },
  {
    "Name": "Jin-Young Choi",
    "Degree": "MS",
    "Year": "2020",
    "Dissertation":"An Analysis of Learning Models for Stock Price movements Prediction System based on Technical Indicators",
  },
  {
    "Name": "Byung-sun Jo",
    "Degree": "MS",
    "Year": "2020",
    "Dissertation":"A Comparative Study on Requirements Analysis Techniques using Natural Language Processing and Machine Learning",
  },
  {
    "Name": "Yong-jun Kim",
    "Degree": "MS",
    "Year": "2020",
    "Dissertation":"A Study of Rule-based Analysis for Big 5 Personality using Unsupervised Learning",
  },
  {
    "Name": "Theresia Ratih Dewi Saputri",
    "Degree": "PHD",
    "Year": "2020",
    "Dissertation":"INSURE: An Integrated Framework for Buliding Sustainable Software Systems",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },
  {
    "Name": "",
    "Degree": "",
    "Year": "",
    "Dissertation":"",
  },

]

alumni.sort( //sort alumni by Year - back chronological order
  (old, recent) => (recent.Year - old.Year)
);

// ================================================================================================================
//                                      The Javascript Command-Journal
// ================================================================================================================


const alumniContainer = document.getElementById("alumniContainer");
const path = "";
for (var i = 0; i <= alumni.length; i++) {

  if (alumni[i].Name != "" ) {
    var peoplePhoto = document.createElement("div");
    peoplePhoto.setAttribute("class","col-sm-2 people-photo");
    var alumniPhoto = document.createElement("img");
    alumniPhoto.setAttribute("src", "image/people/Alumni/"+alumni[i].Name+".jpg");
    peoplePhoto.appendChild(alumniPhoto);    
    
    var alumniYear = document.createElement("div");
    alumniYear.setAttribute("class","col-sm-1 alumni-year");
    let node_alumniYear = document.createTextNode(alumni[i].Year);
    let node_degree = document.createTextNode(alumni[i].Degree);
    var lb1 = document.createElement("br");
    alumniYear.appendChild(node_degree);
    alumniYear.appendChild(lb1);
    alumniYear.appendChild(node_alumniYear);
    
    var peopleDesc = document.createElement("div");
    peopleDesc.setAttribute("class","col-sm-9 people-description");
    var node_alumniName = document.createTextNode(alumni[i].Name);
    var span_peopleName = document.createElement("span");
    span_peopleName.setAttribute("class", "people-name");
    span_peopleName.appendChild(node_alumniName)
    
    var p_tt = document.createElement("p");
    let bold = document.createElement("b");
    let node_Tt = document.createTextNode("Thesis Title: ");
    bold.appendChild(node_Tt);
    var node_t=document.createTextNode(alumni[i].Dissertation);    
    
    p_tt.appendChild(span_peopleName);
    var lb2 = document.createElement("br");
    p_tt.appendChild(lb2);
    p_tt.appendChild(bold);
    p_tt.appendChild(node_t);
    // peopleDesc.appendChild(span_peopleName);
    peopleDesc.appendChild(p_tt);
    
    var rowAlumni = document.createElement("div");
    rowAlumni.setAttribute("class","row alumni");
    rowAlumni.appendChild(peoplePhoto);
    rowAlumni.appendChild(alumniYear);
    rowAlumni.appendChild(peopleDesc);
    var hr= document.createElement("hr");
     
    
    alumniContainer.appendChild(rowAlumni);
    alumniContainer.appendChild(hr);

    

    












    // const bName = document.createTextNode(alumni[i].Name + ", ");

    // var spanBDegree = document.createElement("span");    
    // con
    // if (alumni[i].Degree != "") {
    //   var bDegree = document.createTextNode('"'+alumni[i].Degree + '", ');
    //   spanBDegree.style.fontWeight = "500";
    //   spanBDegree.appendChild(lb1);
    //   spanBDegree.appendChild(bDegree);
    //   spanBDegree.appendChild(lb2);
    // } else {
    //   var bDegree = document.createTextNode(" ");
    //   spanBDegree.appendChild(bDegree);
    // }

    // const bYear = document.createTextNode(alumni[i].Year + ", ");
     
    // const bDissertation = document.createTextNode(alumni[i].Dissertation + ", ");

    // var alumniContainer = document.createElement("p");
    // alumniContainer.style.display = "block";
    // alumniContainer.style.padding = "1%";
    // alumniContainer.style.margin = "0%";
    // alumniContainer.style.color = "#000000";
    // alumniContainer.appendChild(bName);
    // alumniContainer.appendChild(spanBDegree);
    // alumniContainer.appendChild(bYear);
    // alumniContainer.appendChild(bDate);
    // alumniContainer.appendChi
    // alumniContainer.appendChild(bDissertation);

    // // for the styling purpose
    // alumnisContainer.appendChild(alumniContainer);
    // if (i % 2 == 0) {
    //   alumnisContainer.style.backgroundColor = "#F6FDED";
    // }

  }
}