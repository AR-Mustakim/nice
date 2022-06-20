// ===========================================================< Books >=====================================================

const book = [
  {
    "Authors": "Seok-Won Lee, Mattia Monga and Jan Jurjens(Editors)",
    "Title": "Proceedings of the Seventh International Workshop on Software Engineering for Secure Systems,",
    "Publisher": "IEEE Press",
    "Date":
    {
      "Day": "",
      "Month": "May",
      "Year": "2011",
    },
    "Source": "",
    "Notes":"(In conjunction with the ICSE 11)",
  },
  {
    "Authors": "*Robin Gandhi and Seok-Won Lee",
    "Title": "Ontology-guided Risk Analysis: From Informal Specifications to Formal Metrics",
    "Publisher": "A book chapter accepted to “Advances in Information and Intelligent Systems” by Springer Studies in Computational Intelligence (Editors: Zbyszek Ras & Bill Ribarsky), SCI 251, pp. 227-249, Springer-Verlag Berlin Heidelberg",
    "Date":
    {
      "Day": "",
      "Month": "Nov",
      "Year": "2009",
    },
    "Source": "http://www.machinediscovery.com/nise/Papers/IIS-bookchapter-02510227.pdf",
    "Notes":"",
  },
  {
    "Authors": "Seok-Won Lee, Mattia Monga and Jan Jurjens (Editors),",
    "Title": "Proceedings of the Sixth International Workshop on Software Engineering for Secure Systems",
    "Publisher": "IEEE Press",
    "Date":
    {
      "Day": "",
      "Month": "May",
      "Year": "2010",
    },
    "Source": "",
    "Notes":"(In conjunction with the ICSE 10) ",
  },
  {
    "Authors": "Seok-Won Lee, *Robin A. Gandhi and Sooyong Park",
    "Title": "Tracing Requirements, A book chapter for the Encyclopedia of Software Engineering, Taylor and Francis Group. Vol. II",
    "Publisher": "CRC Press",
    "Date":
    {
      "Day": "",
      "Month": "Nov",
      "Year": "2010",
    },
    "Source": "",
    "Notes":"",
  },
  {
    "Authors": "",
    "Title": "",
    "Publisher": "",
    "Date":
    {
      "Day": "",
      "Month": "",
      "Year": "",
    },
    "Source": "",
    "Notes":"",
  },
  {
    "Authors": "",
    "Title": "",
    "Publisher": "",
    "Date":
    {
      "Day": "",
      "Month": "",
      "Year": "",
    },
    "Source": "",
    "Notes":"",
  },
  {
    "Authors": "",
    "Title": "",
    "Publisher": "",
    "Date":
    {
      "Day": "",
      "Month": "",
      "Year": "",
    },
    "Source": "",
    "Notes":"",
  },
  {
    "Authors": "",
    "Title": "",
    "Publisher": "",
    "Date":
    {
      "Day": "",
      "Month": "",
      "Year": "",
    },
    "Source": "",
    "Notes":"",
  },

]

book.sort( //sort book by Year - back chronological order
  (old, recent) => (recent.Date.Year - old.Date.Year)
);

// ================================================================================================================
//                                      The Javascript Command-Journal
// ================================================================================================================

const booksContainer = document.getElementById("bookContainer");
for (var b = 0; b <= book.length; b++) {
  
  if (book[b].Authors != "" ) {
    const bAuthors = document.createTextNode(book[b].Authors + ", ");
    
    var spanBTitle = document.createElement("span");    
    const bSource = document.createElement("a");    
    if (book[b].Title != "") {
      var bTitle = document.createTextNode('"'+book[b].Title + '", ');
      spanBTitle.style.fontWeight = "500";
      var lb1 = document.createElement("br");
      spanBTitle.appendChild(lb1);
      spanBTitle.appendChild(bTitle);
      var lb2 = document.createElement("br");
      spanBTitle.appendChild(lb2);
    } else {
      var bTitle = document.createTextNode(" ");
      spanBTitle.appendChild(bTitle);
    }

    const bPublisher = document.createTextNode(book[b].Publisher + ", ");
    const bDate = document.createTextNode(book[b].Date.Month + " " + book[b].Date.Day + " " + book[b].Date.Year + ". ");    

    if (book[b].Source != "") {
      bSource.setAttribute("href", book[b].Source);
      var node_b_Source = document.createTextNode(" [View] ");
      bSource.appendChild(node_b_Source);
    } else {
      var node_b_Source = document.createTextNode(" ");
      bSource.appendChild(node_b_Source);
    }
    
    const bNotes = document.createTextNode(book[b].Notes + ", ");

    var bookContainer = document.createElement("p");
    bookContainer.style.display = "block";
    bookContainer.style.padding = "1%";
    bookContainer.style.margin = "0%";
    bookContainer.style.color = "#000000";
    bookContainer.appendChild(bAuthors);
    bookContainer.appendChild(spanBTitle);
    bookContainer.appendChild(bPublisher);
    bookContainer.appendChild(bDate);
    bookContainer.appendChild(bSource);
    bookContainer.appendChild(bNotes);

    // for the styling purpose
    booksContainer.appendChild(bookContainer);
    if (b % 2 == 0) {      
      bookContainer.style.backgroundColor = "#F6FDED";
    }

  }
}