// ===========================================================< Journals >=====================================================
let journal = [
  {
    "Authors": "Sangeeta Dey, Seok-Won Lee",
    "Title": "Are We Training with The Right Data? Evaluating Collective Confidence in Training Data using Dempster Shafer Theory",
    "Published": "The 44th International Conference on Software Engineering (ICSE 2022) New Ideas and Emerging Results (NIER)",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    
    "Level": "International",
    "Peprint": "dasdasdasdasdasdasd",
  },
  {
    "Authors": "Sangeeta Dey, person 2021",
    "Title": "Are We Training with The Right Data? Evaluating Collective Confidence in Training Data using Dempster Shafer Theory",
    "Published": "The 44th International Conference on Software Engineering (ICSE 2022) New Ideas and Emerging Results (NIER)",
"Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2021",
      },
    
    "Level": "International",
    "Peprint": "NA",
  },
  {
    "Authors": "person 1 person 2018",
    "Title": "2020-01-05 13:42:19.324003",
    "Published": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2018",
      },
    
    "Level": "Domestic",
    "Peprint": "NA",
  },
  {
    "Authors": "person 2005 person 2",
    "Title": "2020-01-05 13:42:19.324003",
    "Published": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2005",
      },
    
    "Level": "Domestic",
    "Peprint": "as123456431263146413643",
  }
]


 journal.sort( //sort journal by Year - back chronological order
  (old, recent) => (recent.Date.Year - old.Date.Year)
 );
// ===========================================================< Books >=====================================================

const book = [
  {
    "Authors": "Sangeeta Dey, Seok-Won Lee",
    "Title": "Are We Training with The Right Data? Evaluating Collective Confidence in Training Data using Dempster Shafer Theory",
    "Published": "The 44th International Conference on Software Engineering (ICSE 2022) New Ideas and Emerging Results (NIER)",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    "Year": "2022",
    "Peprint": "",
  },
  {
    "Authors": "person 1 person 2",
    "Title": "2020-01-05 13:42:19.324003",
    "Published": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    
    "Peprint": null,
  },
  {
    "Authors": "person 1 person 2",
    "Title": "2020-01-05 13:42:19.324003",
    "Published": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    
    "Peprint": "",
  }
]

book.sort( //sort book by Year - back chronological order
  (old, recent) => (recent.Date.Year - old.Date.Year)
 );

// ===========================================================< Magazines >=====================================================

const magazine = [
  {
    "Authors": "Sangeeta Dey, Seok-Won Lee",
    "Title": "Are We Training with The Right Data? Evaluating Collective Confidence in Training Data using Dempster Shafer Theory",
    "Published": "The 44th International Conference on Software Engineering (ICSE 2022) New Ideas and Emerging Results (NIER)",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    "Year": "2022",
    "Peprint": "",
  },
  {
    "Authors": "person 1 person 2",
    "Title": "2020-01-05 13:42:19.324003",
    "Published": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    
    "Peprint": null,
  },
  {
    "Authors": "person 1 person 2",
    "Title": "2020-01-05 13:42:19.324003",
    "Published": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    
    "Peprint": "",
  }
]

magazine.sort( //sort magazine by Year - back chronological order
  (old, recent) => (recent.Date.Year - old.Date.Year)
 );
// ===========================================================< Conferences >=====================================================

const conference = [
  {
    "Authors": "Sangeeta Dey, Seok-Won Lee",
    "Title": "Are We Training with The Right Data? Evaluating Collective Confidence in Training Data using Dempster Shafer Theory",
    "Published": "The 44th International Conference on Software Engineering (ICSE 2022) New Ideas and Emerging Results (NIER)",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    "Year": "2022",
    "Peprint": "",
  },
  {
    "Authors": "person 1 person 2",
    "Title": "2020-01-05 13:42:19.324003",
    "Published": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    
    "Peprint": null,
  },
  {
    "Authors": "person 1 person 2",
    "Title": "2020-01-05 13:42:19.324003",
    "Published": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    
    "Peprint": "",
  }
]

conference.sort( //sort conference by Year - back chronological order
  (old, recent) => (recent.Date.Year - old.Date.Year)
 );
// ===========================================================< Thesis/Technical Report >=====================================================

const thesis = [
  {
    "Authors": "Sangeeta Dey, Seok-Won Lee",
    "Title": "Are We Training with The Right Data? Evaluating Collective Confidence in Training Data using Dempster Shafer Theory",
    "Published": "The 44th International Conference on Software Engineering (ICSE 2022) New Ideas and Emerging Results (NIER)",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    "Year": "2022",
    "Peprint": "",
  },
  {
    "Authors": "person 1 person 2",
    "Title": "2020-01-05 13:42:19.324003",
    "Published": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    
    "Peprint": null,
  },
  {
    "Authors": "person 1 person 2",
    "Title": "2020-01-05 13:42:19.324003",
    "Published": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "Date": 
      {
      "Day": "25",
      "Month": "May",
      "Year": "2022",
      },
    
    "Peprint": "",
  }
]

thesis.sort( //sort thesis by Year - back chronological order
  (old, recent) => (recent.Date.Year - old.Date.Year)
 );


// ================================================================================================================
//                                      The Javascript Command-Journal
// ================================================================================================================


const months = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];
console.log("Selamat Datang");

// years = [];
// for(var i=0; i<= journal.length; i++){
//   // years.push(journal[i].Date.Year);
//   let tahun = journal[i].Date.Year;
//   console.log(tahun);
//   years.push(tahun);
// }
// newList = journal.rows.map(e => e.Date.Year);
// console.log("--------------------"+newList);   


// console.log("Selamat Datang");

const journalContainer = document.getElementById("journalContainer");
for(i=0; i<= journal.length; i++){
   

  const jAuthors = document.createTextNode(journal[i].Authors+ ", ");
  console.log("Selamat Datang");
  var spanTitle = document.createElement("span");
  const jTitle = document.createTextNode(journal[i].Title+ ", ");
  spanTitle.style = "font-weight: 500;";
  spanTitle.appendChild(jTitle);
  const jPublished = document.createTextNode(journal[i].Published+ ", ");
  const jDate = document.createTextNode(journal[i].Date.Month+ " " +journal[i].Date.Day+ "," +journal[i].Date.Year+". ");
  // const jYear = document.createTextNode(journal[i].Year+ ".");
  const jPeprint = document.createElement("a");
  
  if(journal[i].Peprint != "NA"){
    jPeprint.setAttribute("href",journal[i].Peprint);
    var nodePeprint = document.createTextNode(" [PePrint] ");
    jPeprint.appendChild(nodePeprint);

  } else{
    var nodePeprint = document.createTextNode(" .");
    jPeprint.appendChild(nodePeprint);
  }

  var paperContainer = document.createElement("p");
  paperContainer.style.display ="block";
  paperContainer.style.padding ="1%";
  paperContainer.style.margin ="0%";
  paperContainer.style.color ="#000000";
  paperContainer.appendChild(jAuthors);
  paperContainer.appendChild(spanTitle);
  paperContainer.appendChild(jPublished);
  paperContainer.appendChild(jDate);
  // paperContainer.appendChild(jYear);
  paperContainer.appendChild(jPeprint);

  // for the styling purpose
  journalContainer.appendChild(paperContainer);
  if(i%2==0){
    paperContainer.style.backgroundColor ="#F6FDED";
  }
}


