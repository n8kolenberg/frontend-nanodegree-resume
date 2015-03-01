
/*Bio Object
==================================================*/
var bio = {
	"name" : "Nathaniel Kolenberg",
	"role" : "Web Developer",
	"contacts" : {
	"email" : "nkolenberg@gmail.com",
	"mobile" : "+44(0)747 277 1489",
	"github" : "n8kolenberg",
	"location" : "London, UK",
}, //end contacts object
	"bioPic" : "images/fry.jpg",
	"welcomeMessage" : "Hi, my name is Nathaniel and I'm currently working on becoming a Web Develper",
	"skills" : ['data analytics', 'programming', 'presenting', 'HTML', 'CSS', 'JS' ]
}

/*Work Object using JSON
==================================================*/
var work = {
	"jobs" : [
		{
			"title" : "Senior Analyst",
			"employer" : "Mobile Web Ads",
			"yearsWorked" : 1,
			"workDates"	: "21/07/2014 - currently",
			"workLocation" : "London",
			"workDescription" : "Provide in depth Analysis of Network Performance to Management" 
		},

	 {
			"title" : "Business Analyst",
			"employer" : "Google",
			"yearsWorked" : 1,
			"workDates"	: "01/01/2012 - 31/12/2012",
			"workLocation" : "Dublin",
			"workDescription" : "Provide in depth Analysis of Product Performance to Management"

		},

		{
			"title" : "Online Media Associate",
			"employer" : "Google",
			"yearsWorked" : 1.8,
			"workDates"	: "17/05/2010 - 31/12/2011",
			"workLocation" : "Dublin",
			"workDescription" : "Account Management"
		}
 ] //end jobs array

} // end work object


/*Education object using JSON
==================================================*/
var education = { //start education object
	"school" : [ //start school array
	{	"name"   : "Rotterdam School of Management",
		"degree" : "Master of Science",
		"city"	 : "Rotterdam",
		"major"  : "Strategic Management",
		"minor"  : "Corporate Finance",
		"graduationDate" : "2010",
		"yearsAttended"  : 2
	},

	{ "name"   : "Erasmus University Rotterdam",
		"degree" : "Bachelor of Science",
		"city"   : "Rotterdam",
		"major"  : "International Business Administration",
		"graduationDate" : "2008",
		"yearsAttended"  : 3
	}
	], //end school array

	"onlineCourses" : [ //start onlineCourses
		{
			"name" : "Udacity Front End Web Development Nanodegree",
			"date" : "Jan 2015 - currently",
			"url"	 : "https://www.udacity.com"
		},
		{
			"name" : "Treehouse",
			"date" : "September 2015 - currently",
			"url"  : "https://www.teamtreehouse.com"
		}

	] //end onlineCourses array
} // end education object


/* Projects Object
==================================================*/
var projects = {
	"name" : "Udacity front-end developer nanodegree",
	"date": "Jan 2015 - currently",
	"description" : "Working on coding projects aimed at providing me the skills to become a web developer",
	"projectImage" : "images/udacity.png"
}





/*Replacing bio data in HTML vars
==================================================*/
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var contactGeneric = HTMLcontactGeneric.replace('%data%', bio.contacts);
var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var email = HTMLemail.replace('%data%', bio.contacts.email);
var github = HTMLgithub.replace('%data%', bio.contacts.github);
var currentLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var bioPic = HTMLbioPic.replace('%data%', bio.bioPic);
var welcomeMessage = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
var skills = HTMLskills.replace('%data%', bio.skills);


/* If statement 
(to check if there are skills in the bio object)
==================================================*/
if (bio.skills.length !== 0) {
	$('#header').append(HTMLskillsStart);

	/* Replacing skills data in HTML var and appending straight after */
	for(var i = 0; i < bio.skills.length; i+=1) { 
		var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
		$('#skills').append(formattedSkills);
		} //end for loop

} //end if statement

/* For-in loop
	(to add all jobs in work object to the page)
==================================================*/
for(job in work.jobs) {
	$('#workExperience').append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
	var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].workDates);
	var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].workLocation);
	var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].workDescription);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	
	$('.work-entry:last').append(formattedEmployerTitle);
	$('.work-entry:last').append(formattedWorkDates);
	$('.work-entry:last').append(formattedWorkLocation);
	$('.work-entry:last').append(formattedWorkDescription);
} // end for loop



/*Replacing work data in HTML vars
==================================================*/
var workEmployer = HTMLworkEmployer.replace('%data%', work.employer);
var workTitle = HTMLworkTitle.replace('%data%', work.workTitle);
var workDates = HTMLworkDates.replace('%data%', work.workDates);
var workLocation = HTMLworkLocation.replace('%data%', work.workLocation);
var workDescription = HTMLworkDescription.replace('%data%', work.workDescription);


/*Replacing school data in HTML vars
==================================================*/
var schoolName = HTMLschoolName.replace('%data%', education.school[0].name);
var schoolDegree = HTMLschoolDegree.replace('%data%', education.school[0].degree);


/*Adding the information to the resume page
==================================================*/
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

$('#header').prepend(bioPic);






/* Copied the HTML string replace variables below from helper.js for arranging names above
==================================================*/

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';