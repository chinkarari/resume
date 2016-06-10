/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Kazuhiro Nagatsuka",
  "role" : "Job seeker",
  "contacts" : {
    "mobile" : "000-0000-000",
    "email" : "udacity@gmail.com",
    "twitter" : "@chinkarari",
    "github" : "chinkarari",
    "location" : "Tokyo",
  },
  "welcomeMessage" : "Thanks for visiting my page",
  "skills" : [
    "programming (HTML, CSS, JS, Python)",
    "Japanese & English", "Teaching", "Cooking"
  ],
  "biopic" : "images/bio-pic.jpg",
};



var education = {
  "schools" : [{
    "name" : "Internatinoal Christian University",
    "location" : "Mitaka",
    "degree" : "Bachelor",
    "majors" : ["Economics"],
    "dates" : "2011-2016",
    "url" : "http://www.icu.ac.jp/en/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "IPND",
      "school" : "Udacity",
      "date" : "2016",
      "url" : "https://udacity.com/",
    }
  ]
};



var work = {
  "jobs" : [
    {
      "employer" : "hechican",
      "title" : "part time jobs",
      "location" : "Kichijoji",
      "dates" : "2011-2016",
      "description": "Restaurant"
    },
    {
      "employer" : "Zaisan.net",
      "title" : "part time jobs",
      "location" : "Tokyo",
      "dates" : "2016",
      "description": "Fintech venture"
    }
  ]
};


var projects = {
  "projects" : [{
    "title" : "Writing articles",
    "dates" : "2016",
    "description" : "In Zaisan.net, my role is writing articles about money such as tax, insurance, house budget and so on.",
    "images" : ["images/fry.jpg"]
    }
  ]
};

var data = "%data%";

bio.display = function() {
  var formattedRole = HTMLheaderRole.replace(data, bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace(data, bio.name);
  $("#header").prepend(formattedName);

  var formattedbioPic = HTMLbioPic.replace(data, bio.biopic);
  $("#header").append(formattedbioPic);

  var formattedwelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
  $("#header").append(formattedwelcomeMessage);

  var formattedmobile = HTMLmobile.replace(data, bio.contacts.mobile);
  $("#topContacts").append(formattedmobile);
  $("#footerContacts").append(formattedmobile);

  var formattedemail = HTMLemail.replace(data, bio.contacts.email);
  $("#topContacts").append(formattedemail);
  $("#footerContacts").append(formattedemail);

  var formattedtwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
  $("#topContacts").append(formattedtwitter);
  $("#footerContacts").append(formattedtwitter);

  var formattedlocation = HTMLlocation.replace(data, bio.contacts.location);
  $("#topContacts").append(formattedlocation);
  $("#footerContacts").append(formattedlocation);

  var formattedGitHub = HTMLgithub.replace(data, bio.contacts.github);
  $("#topContacts").append(formattedGitHub);
  $("#footerContacts").append(formattedGitHub);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);


    for (var index = 0; index < bio.skills.length; index++) {
      var formattedSkill = HTMLskills.replace(data, bio.skills[index]);
      $("#skills").append(formattedSkill);
    }
  }
};


bio.display();

work.display = function() {
  for (var index = 0; index < work.jobs.length; index++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace(
      data, work.jobs[index].employer);
    var formattedTitle = HTMLworkTitle.replace(
      data, work.jobs[index].title);
    var formattedEmployerTitle =
    formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace(data, work.jobs[index].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace(data, work.jobs[index].description);
    $(".work-entry:last").append(formattedDescription);

    var formattedLocation = HTMLworkLocation.replace(data, work.jobs[index].location);
    $(".work-entry:last").prepend(formattedLocation);
  }
};

work.display();

education.display = function() {
  for (var index = 0; index < education.schools.length; index++) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace(
      data, education.schools[index].name);
    var formattedDegree = HTMLschoolDegree.replace(
      data, education.schools[index].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);

    var formattedDates = HTMLschoolDates.replace(
      data, education.schools[index].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace(
      data, education.schools[index].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace(
      data, education.schools[index].majors);
    $(".education-entry:last").append(formattedMajor);

  }

  for (var indexCounts = 0; indexCounts < education.onlineCourses.length; indexCounts++) {
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace(
      data, education.onlineCourses[indexCounts].title);
    var formattedSchool = HTMLonlineSchool.replace(
      data, education.onlineCourses[indexCounts].school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedTitleSchool);

    var formattedonlineDates = HTMLonlineDates.replace(
      data, education.onlineCourses[indexCounts].date);
    $(".education-entry:last").append(formattedonlineDates);

    var formattedUrl = HTMLonlineURL.replace(
      data, education.onlineCourses[indexCounts].url);
    $(".education-entry:last").append(formattedUrl);
  }
};

education.display();


projects.display = function() {
  for (var index = 0; index < projects.projects.length; index++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[index].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace(data, projects.projects[index].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[index].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[index].images.length > 0) {
      for (var indexCounts = 0; indexCounts < projects.projects[index].images.length; indexCounts++) {
        var formattedImage = HTMLprojectImage.replace(data, projects.projects[index].images[indexCounts]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

projects.display();



function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

