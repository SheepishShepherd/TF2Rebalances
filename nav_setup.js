// Adds the back to top button
const topPanel = document.getElementById("back-to-top-panel");
var topButton = document.createElement("div");
topButton.classList.add("img-nav-btn", "nav-btn", "nav-top");
topButton.title = "Back to top";
topButton.addEventListener("click", function () {
	history.replaceState(null, document.title, window.location.pathname + window.location.search);
	window.scrollTo(0, 0);
	var audio = new Audio('../resources/sounds/hint.wav');
	audio.currentTime = 0;
	audio.volume = 0.2;
	audio.play();
});
topPanel.appendChild(topButton);

// sets up bookmark redirects and audio cues for all navigational buttons
const nav_buttons = document.querySelectorAll('.nav-panel .nav-item'); // selects all elements with a 'nav-item' class and a 'nav-panel' class for its parent element
nav_buttons.forEach(button => {
	var bookmark = button.id.replace("nav-", "");
	var soundPath = "";
	if (button.parentElement.id == "class-selection") {
		if (button.parentElement.classList.contains("mvm-nav")) {
			soundPath = "mvm_class_menu_" + bookmark.replace("_Upgrades", "");
		}
		else {
			soundPath = "class_menu_" + bookmark;
		}
	}
	else {
		soundPath = "hint";
	}

	button.addEventListener('click', () => {
		location.replace('#' + bookmark)
		var audio = new Audio('../resources/sounds/' + soundPath + '.wav');
		audio.currentTime = 0;
		audio.volume = 0.2;
		audio.play();
	});
});

// MvM weapon icons link to their respective rebalanced stat cards on weapons.html
const elements = document.querySelectorAll('.mvm-mini-item');
elements.forEach(element => {
	element.addEventListener('click', function () {
		window.location = "weapons.html#" + element.title.replaceAll(" ", "_");
	});
});
