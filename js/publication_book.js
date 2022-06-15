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
    "Title": "",
    "Publisher": "Proceedings of the Sixth International Workshop on Software Engineering for Secure Systems, IEEE Press",
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
    "Title": "Tracing Requirements",
    "Publisher": "A book chapter for the Encyclopedia of Software Engineering, Taylor and Francis Group. Vol. II,  CRC Press",
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
for (var i = 0; i <= book.length; i++) {

  if (book[i].Authors != "" ) {
    const bAuthors = document.createTextNode(book[i].Authors + ", ");

    var spanBTitle = document.createElement("span");    
    const bSource = document.createElement("a");    
    if (book[i].Title != "") {
      var bTitle = document.createTextNode('"'+book[i].Title + '", ');
      spanBTitle.style.fontWeight = "500";
      spanBTitle.appendChild(lb1);
      spanBTitle.appendChild(bTitle);
      spanBTitle.appendChild(lb2);
    } else {
      var bTitle = document.createTextNode(" ");
      spanBTitle.appendChild(bTitle);
    }

    const bPublisher = document.createTextNode(book[i].Publisher + ", ");
    const bDate = document.createTextNode(book[i].Date.Month + " " + book[i].Date.Day + " " + book[i].Date.Year + ". ");    

    if (book[i].Source != "") {
      bSource.setAttribute("href", book[i].Source);
      var node_b_Source = document.createTextNode(" [View] ");
      bSource.appendChild(node_b_Source);
    } else {
      var node_b_Source = document.createTextNode(" ");
      bSource.appendChild(node_b_Source);
    }
    
    const bNotes = document.createTextNode(book[i].Notes + ", ");

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
    if (i % 2 == 0) {
      booksContainer.style.backgroundColor = "#F6FDED";
    }

  }
}