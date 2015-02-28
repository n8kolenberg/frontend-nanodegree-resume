
var bio = {
	name : 'Nathaniel Kolenberg',
	role : 'Web Developer',
	contacts : {
	email : 'nkolenberg@gmail.com',
	mobile : '+44(0)747 277 1489',
	github: 'n8kolenberg',
	location: 'London, UK',

},
	bioPic : "images/fry.jpg",
	welcomeMessage : "Hi, my name is Nathaniel and I'm currently working on becoming a Web Develper",
	skills : ['data analytics', 'programming', 'presenting', 'HTML', 'CSS', 'JS' ]
}


var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var contactGeneric = HTMLcontactGeneric.replace('%data%', bio.contacts);
var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var email = HTMLemail.replace('%data%', bio.contacts.email);
var github = HTMLgithub.replace('%data%', bio.contacts.github);
var currentLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var bioPic = HTMLbioPic.replace('%data%', bio.bioPic);
var welcomeMessage = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
var skills = HTMLskills.replace('%data%',bio.skills);


$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

$('#header').append(bio.contacts.email);
$('#header').prepend(bioPic);




var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

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