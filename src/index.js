

var courseBox = document.querySelector('.course-box');
var container = document.querySelector('.course-list-container');

var copy;

for (var i = 0; i < 10; i++) {
	copy = courseBox.cloneNode(true);
	container.appendChild(copy);
}