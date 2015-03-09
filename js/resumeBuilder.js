
/*Bio Object
==================================================*/
var bio = {
	"name" : "Nathaniel Kolenberg",
	"role" : "Web Developer",
	
	"contacts" :
		{
		"email" : "nkolenberg@gmail.com",
		"twitter" : "@nkolenberg",
		"mobile" : "+44(0)747 277 1489",
		"github" : "n8kolenberg",
		"location" : "London, UK",
		}, //end contacts object
	"bioPic" : "images/fry.jpg",
	"welcomeMessage" : "Hi, my name is Nathaniel and I'm currently working on becoming a Web Developer",
	"skills" : ['Analytics', 'HTML', 'CSS', 'JS' ]
}

/* Function to display Bio on the page
==================================================*/
function displayBio() {

		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		var bioPic = HTMLbioPic.replace('%data%', bio.bioPic);	
		var formattedBioWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
		var formattedBioMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedBioEmail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedBioGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedBioLocation = HTMLlocation.replace('%data%', bio.contacts.location);

		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
		$('#header').append(bioPic);
		$('#header').append(formattedBioWelcomeMsg);
		
		$('#topContacts, #footerContacts').append(formattedBioMobile);
		$('#topContacts:last, #footerContacts:last').append(formattedBioEmail);
		$('#topContacts:last, #footerContacts:last').append(formattedBioGithub);
		$('#topContacts:last, #footerContacts:last').append(formattedBioLocation);
	

		/* If statement 
		(to check if there are skills in the bio object
		and then append them to the page)
		==================================================*/
		if (bio.skills.length !== 0) {
			$('#header').append(HTMLskillsStart);

			/* Replacing skills data in HTML var and appending straight after */
			for(var i = 0; i < bio.skills.length; i+=1) { 
				var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
				$('#skills').append(formattedSkills);
				} //end for loop
		} //end if statement

} // end displayBio() function

displayBio();


/*Work Object
==================================================*/
var work = {
	"jobs" : [
		{
			"title" : "Senior Analyst",
			"employer" : "Mobile Web Ads",
			"yearsWorked" : 1,
			"workDates"	: "21/07/2014 - currently",
			"location" : "London, UK",
			"workDescription" : "Provide in depth Analysis of Network Performance to Management" 
		},
		
		{
			"title" : "Marketing Analyst",
			"employer" : "Vistaprint",
			"yearsWorked" : 1,
			"workDates"	: "01/01/2013 - 31/12/2013",
			"location" : "Barcelona, Spain",
			"workDescription" : "Provide in depth Analysis of Product Performance to Management"

		},
	 
	 {
			"title" : "Business Analyst",
			"employer" : "Google",
			"yearsWorked" : 1,
			"workDates"	: "01/01/2012 - 31/12/2012",
			"location" : "Dublin, Ireland",
			"workDescription" : "Provide in depth Analysis of Product Performance to Management"

		},

		{
			"title" : "Online Media Associate",
			"employer" : "Google",
			"yearsWorked" : 1.8,
			"workDates"	: "17/05/2010 - 31/12/2011",
			"location" : "Dublin, Ireland",
			"workDescription" : "Growing the Google AdSense product userbase in the Netherlands primarily and the British Islands"
		}
 ] //end jobs array

} // end work object

/* Function to display Work on the page
==================================================*/
function displayWork(){

	/* For-in loop
		(to add all jobs in work object to the page) */
	for(job in work.jobs) {
		$('#workExperience').append(HTMLworkStart); //create a new Work div
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].workDates);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].workDescription);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$('.work-entry:last').append(formattedEmployerTitle);
		$('.work-entry:last').append(formattedWorkDates);
		$('.work-entry:last').append(formattedWorkLocation);
		$('.work-entry:last').append(formattedWorkDescription);
	} // end for loop
} // end displayWork function

displayWork();



/*Education object
==================================================*/
var education = { //start education object
	"schools" : [ //start school array
	{	"name"   : "Rotterdam School of Management",
		"degree" : "Master of Science",
		"location"	 : "Rotterdam, Netherlands",
		"major"  : "Strategic Management",
		"minor"  : "Corporate Finance",
		"dates" : 2010,
		"yearsAttended"  : 2
	},

	{ "name"   : "Erasmus University Rotterdam",
		"degree" : "Bachelor of Science",
		"location"   : "Rotterdam, Netherlands",
		"major"  : "International Business Administration",
		"dates" : 2008,
		"yearsAttended"  : 3
	}
	], //end school array

	"onlineCourses" : [ //start onlineCourses array
		{
			"name" : "Udacity Front End Web Development Nanodegree",
			"school" : "Udacity",
			"date" : "2015",
			"url"	 : "https://www.udacity.com"
		},
		{
			"name" : "Front End Web Developer Track",
			"school" : "Treehouse",
			"date" : "2015",
			"url"  : "https://www.teamtreehouse.com"
		}

	] //end onlineCourses array
} // end education object



/* Function to display Education on the page
==================================================*/
function displayEducation(){
	for (schools in education.schools) {
		$('#education').append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[schools].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[schools].degree);
		var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[schools].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[schools].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[schools].major);

		$('.education-entry:last').append(formattedSchoolName);
		$('.education-entry:last').append(formattedSchoolLocation);
		$('.education-entry:last').append(formattedSchoolMajor);
		$('.education-entry:last').append(formattedSchoolDegree);
		$('.education-entry:last').append(formattedSchoolDates);

	} // end Schools for-loop

	for (onlineCourse in education.onlineCourses) {
		var formattedOnlineCourse = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].name);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].date);
		var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);

		$('.education-entry:last').append(HTMLonlineClasses);
		$('.education-entry:last').append(formattedOnlineCourse);
		$('.education-entry:last').append(formattedOnlineSchool);
		$('.education-entry:last').append(formattedOnlineDates);
		$('.education-entry:last').append(formattedOnlineURL);

	} //end onlineCourses for-loop

} // end displayEducation function

displayEducation();




/* Projects Object using JSON
==================================================*/
var projects = {
		"projects" : [
			{
			"name" : "Udacity front-end developer nanodegree",
			"date": "Jan 2015 - currently",
			"description" : "Working on coding projects aimed at providing me the skills to become a web developer",
			"projectImage" : 
			[
				"images/udacity.png",
				"images/100.png"
			]
		},
		{
			"name" : "Business Society Management Study Trip",
			"date": "April 2010",
			"description" : "Project to investigate differences in sustainability efforts within companies in Dubai and Shanghai",
			"projectImage" :
				[
				"images/whaleVsSub.png"
				]
		}
	] // end projects list
}// end projects object



function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].name);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].date);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
			
		$('.project-entry:last').append(formattedProjectTitle);
		$('.project-entry:last').append(formattedProjectDates);
		$('.project-entry:last').append(formattedProjectDescription);

	if (projects.projects[project].projectImage.length > 0) {
		for (image in projects.projects[project].projectImage) {
			var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].projectImage[image]);
			$('.project-entry:last').append(formattedProjectImage);
		}
	} //end if statement to check if there are multiple pictures in the pictureImage array

		$("#projects img").addClass('projectImage');

	} //end for loop
} //end display function

displayProjects();


/* Testing out locationizer function 
to give me strings of locations I've worked in
==================================================
function locationizer(work_obj){
	var localeArray = [];
	for (job in work_obj.jobs) {
		var newLocale = work_obj.jobs[job].workLocation;
		localeArray.push(newLocale);
	} //end for loop
	return localeArray
}// end locationizer function

console.log(locationizer(work));
*/

/* Function for internationalize button
==================================================*/
// $('#main').append(internationalizeButton);
// function inName(name){
// 	var nameArray = bio.name.trim().split(" ");
// 	firstName = nameArray[0].slice(0,1).toUpperCase();
// 	firstName += nameArray[0].slice(1).toLowerCase();
// 	lastName = nameArray[1].toUpperCase();
// 	name = firstName + " " + lastName;
// 	return name;
// }


$('#mapDiv').append(googleMap);







