// ===========================================================< Books >=====================================================

const magazine = [
  {
    "Authors": "Lee, S.W., *Gandhi, R., Ahn, G.",
    "Title": "Establishing Trustworthiness in Services of the Critical Infrastructure through Certification and Accreditation”  ACM SIGSOFT Software Engineering Notes”, Vol. 30",
    "Publisher": "ACM Press, New York, NY",
    "Date":
    {
      "Day": "",
      "Month": "July",
      "Year": "2004",
    },
    "Source": "http://www.machinediscovery.com/nise/Papers/p3-bruschi.pdf",
    "Notes": " (Also appeared in SESS workshop at ICSE ’05)",
  },
  {
    "Authors": "",
    "Title": "Musical Ventures, Volunteer Work, Travel, and Research Make Summer for Some More Than a Day at the Beach: Faculty/Staff News, Mason Gazette",
    "Publisher": "A Publication for Faculty and Staff of George Mason University",
    "Date":
    {
      "Day": "",
      "Month": "September",
      "Year": "1999",
    },
    "Source": "",
    "Notes": "",
  },
  {
    "Authors": "Seok Won Lee",
    "Title": "A Methodological Knowledge Discovery Framework for Constructive Induction-based Multistrategy Learning",
    "Publisher": "Korean-American Scientists and Engineers Association (KSEA) Letters, Volume 27, No.3, pp. 42-46",
    "Date":
    {
      "Day": "",
      "Month": "March",
      "Year": "1999",
    },
    "Source": "",
    "Notes": "",
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
    "Notes": "",
  },

]

magazine.sort( //sort book by Year - back chronological order
  (old, recent) => (recent.Date.Year - old.Date.Year)
);

// ================================================================================================================
//                                      The Javascript Command-Journal
// ================================================================================================================

const magazinesContainer = document.getElementById("magazineContainer");
for (var m = 0; m <= magazine.length; m++) {

  if (magazine[m].Authors != "" || magazine[m].Title != "") {

    if (magazine[m].Authors != "") {
      var mAuthors = document.createTextNode(magazine[m].Authors + ", ");
    } else {
      var mAuthors = document.createTextNode("");
    }
    
    var spanmTitle = document.createElement("span");
    const mSource = document.createElement("a");
    if (magazine[m].Title != "") {
      var mTitle = document.createTextNode('"' + magazine[m].Title + '", ');
      spanmTitle.style.fontWeight = "500";      
      spanmTitle.appendChild(mTitle);
    } else {
      var mTitle = document.createTextNode(" ");
      spanmTitle.appendChild(mTitle);
    }

    const mPublisher = document.createTextNode(magazine[m].Publisher + ", ");
    const mDate = document.createTextNode(magazine[m].Date.Month + " " + magazine[m].Date.Day + " " + magazine[m].Date.Year + ". ");

    if (magazine[m].Source != "") {
      mSource.setAttribute("href", magazine[m].Source);
      var node_m_Source = document.createTextNode(" [View] ");
      mSource.appendChild(node_m_Source);
    } else {
      var node_m_Source = document.createTextNode(" ");
      mSource.appendChild(node_m_Source);
    }

    const mNotes = document.createTextNode(magazine[m].Notes + ", ");

    var magazineContainer = document.createElement("p");
    magazineContainer.style.display = "mlock";
    magazineContainer.style.padding = "1%";
    magazineContainer.style.margin = "0%";
    magazineContainer.style.color = "#000000";
    magazineContainer.appendChild(mAuthors);
    magazineContainer.appendChild(spanmTitle);
    magazineContainer.appendChild(mPublisher);
    magazineContainer.appendChild(mDate);
    magazineContainer.appendChild(mSource);
    magazineContainer.appendChild(mNotes);

    // for the styling purpose
    magazinesContainer.appendChild(magazineContainer);
    if (m % 2 == 0) {
      magazineContainer.style.backgroundColor = "#F6FDED";
    }

  }
}