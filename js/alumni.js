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
    "Name": "Byung-Sun Jo",
    "Degree": "MS",
    "Year": "2020",
    "Dissertation":"A Comparative Study on Requirements Analysis Techniques using Natural Language Processing and Machine Learning",
  },
  {
    "Name": "Yong-Jun Kim",
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
    "Name": "Min-Ju Kim",
    "Degree": "MS",
    "Year": "2019",
    "Dissertation":"Security Requirements Recommendation Framework for Advanced persistent Threat",
  },
  {
    "Name": "Ahmed Abdo Ali",
    "Degree": "MS",
    "Year": "2019",
    "Dissertation":"Reasoning Non-Functional Requirements Trade-off in Self-Adaptive Systems Using Multi-Entity Bayesian Network Modeling",
  },
  {
    "Name": "Mukundwa Chantal",
    "Degree": "MS",
    "Year": "2019",
    "Dissertation":"A Collaborative Requirements Elicitation Model For Crowdsourcing Platforms",
  },
  {
    "Name": "Hye-Kyung Yun",
    "Degree": "MS",
    "Year": "2019",
    "Dissertation":"A Framework to Study Poultry Disease Monitoring and Alarm System Using Deep Learning Approach",
  },
  {
    "Name": "Seung-Jun Kim",
    "Degree": "MS",
    "Year": "2018",
    "Dissertation":"Social Engineering based Security Requirements Recommendation Framework to Prevent an Advanced Persistent Threat",
  },
  {
    "Name": "Woo-Ri Roh",
    "Degree": "MS",
    "Year": "2018",
    "Dissertation":"An Ontology-based Approach to Discover the Conflicts between Security and Usability Requirements in the Requirements Engineering Process",
  },
  {
    "Name": "Pyoung-Woo Park",
    "Degree": "MS",
    "Year": "2018",
    "Dissertation":"A Comparative Study between Machine Learning Algorithms for Diagnosis of Ischemic Heart Disease",
  },
  {
    "Name": "Sung-Hoon Byun",
    "Degree": "MS (SW track)",
    "Year": "2017",
    "Dissertation":"A Comparative Study between Latent Semantic Indexing and Latent Dirichlet Allocation in Constructing Traceability between Functional Requirements and Non-Functional Requirements",
  },
  {
    "Name": "Hee-Soo Kim",
    "Degree": "PhD",
    "Year": "2016",
    "Dissertation":"A Methodology to Develop Dependable Component Models for Modeling and Simulation of Critical Infrastructures",
  },
  {
    "Name": "Hye-Sun Lim",
    "Degree": "MS (SW track)",
    "Year": "2016",
    "Dissertation":"A Method to Specify and Verify Requirements for Safety Critical System",
  },
  {
    "Name": "Dae-Han Wyee",
    "Degree": "MS (SW track)",
    "Year": "2016",
    "Dissertation":"Reverse Engineering Technique Using Architectural Patterns and Design Patterns for Extracting Requirements in Open Source Domain",
  },
  {
    "Name": "Ju-Hye Cho",
    "Degree": "MS (SW track)",
    "Year": "2016",
    "Dissertation":"A Method to Elicit Privacy Requirements and Build Privacy Assurance Cases for Privacy Friendly System",
  },
  {
    "Name": "Sun-Zu Kim",
    "Degree": "MS (SW track)",
    "Year": "2016",
    "Dissertation":"Safety Requirements Checklist Specification Method Using STAMP",
  },
  {
    "Name": "Jonathan Sawyer",
    "Degree": "MS",
    "Year": "2016",
    "Dissertation":"A Step-Wise Methodology using Semi-Supervised Topic Modeling to Recommend Contextual Relationships for an Ontology Engineer",
  },
  {
    "Name": "Bong-Jae Kim",
    "Degree": "MS (NCW)",
    "Year": "2016",
    "Dissertation":"Understanding and Recommending Security Requirements from Problem Domain Ontology: A three-layered Approach",
  },
  {
    "Name": "Meetushi Singh",
    "Degree": "MS",
    "Year": "2016",
    "Dissertation":"A Framework Integrating Problem Fames and Goal Modeling to Support Variability Analysis during Requirements Elicitation",
  },
  {
    "Name": "Hyun-Ju Park",
    "Degree": "MS (SW track)",
    "Year": "2015",
    "Dissertation":"An Architectural Pattern Recommendation Method based on Quality Attributes Trade-off Analysis",
  },
  {
    "Name": "Ki-Beum Park",
    "Degree": "MS (SW track)",
    "Year": "2015",
    "Dissertation":"Requirements Elicitation and Specification Method for the Development of Adaptive User Interface",
  },
  {
    "Name": "Sangeeta Dey",
    "Degree": "MS",
    "Year": "2015",
    "Dissertation":"Requirements Elicitation for Adaptive Socio-technical Systems using Repertory Grid: A Cognitive Approach",
  },
  {
    "Name": "Francois W",
    "Degree": "MS",
    "Year": "2015",
    "Dissertation":"A Stepwise Methodology Towards the Adaptization of Legacy Systems using Agent-oriented Software Engineering",
  },
  {
    "Name": "Kwan-Hong Lee",
    "Degree": "MS",
    "Year": "2015",
    "Dissertation":"Game Theoretic Approach to Win-Win Requirements Negotiation in Software Ecosystems",
  },
  {
    "Name": "Si-Heon Kim",
    "Degree": "MS (SW track)",
    "Year": "2014",
    "Dissertation":"Agent-Based Modeling and Simulation Methodology Using Social Level Characteristics",
  },
  {
    "Name": "Chang-Hee Chung",
    "Degree": "MS (SW track)",
    "Year": "2014",
    "Dissertation":"Service Dependability-Based Self-Adaptation in Service-Oriented Environment",
  },
  {
    "Name": "Chang-Won Seo",
    "Degree": "MS (SW track)",
    "Year": "2014",
    "Dissertation":"Automatic Generation of HTN Planning Code for Effective Operation of Smart Home System",
  },
  {
    "Name": "Jae-Young Kim",
    "Degree": "MS",
    "Year": "2014",
    "Dissertation":"Ontology-based Automatic Video Contents Metadata Generation Scheme using Image Processing ",
  },
  {
    "Name": "Inhee Woo",
    "Degree": "MS",
    "Year": "2014",
    "Dissertation":"Interweaving Method to Support Adaptation and Development process of Self-Adaptive System: Preliminary Study in the Smart Grid Domain ",
  },
  {
    "Name": "Hyo-Eun Eom (co-advising with Prof. MK Kim, AI Lab)",
    "Degree": "MS",
    "Year": "2013",
    "Dissertation":"Mobile Software Development Methodology: Agent Supported Agile Approach",
  },
  {
    "Name": "Keunsoo Lee, Ph.D. (co-advising with Prof. MK Kim, AI Lab)",
    "Degree": "PhD",
    "Year": "2013",
    "Dissertation":"A Method of Ontology Modularization for Effective Knowledge Utilization",
  },
  {
    "Name": "Se-Heon Song, Ph.D. (co-advising with Prof. MK Kim, AI Lab)",
    "Degree": "PhD",
    "Year": "2013",
    "Dissertation":"A Goal-driven Approach for Adaptive Service Composition using Planning",
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