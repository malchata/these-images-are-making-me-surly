(function(window, document){
	var filterModes = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "saturate", "sepia"],
		filterImageEl = document.getElementById("filter-image"),
		filterModeEl = document.getElementById("filter-mode"),
		blendModes = ["multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
		blendimageEl = document.getElementById("blend-image"),
		blendModeEl = document.getElementById("blend-mode"),
		omniImageEl = document.getElementById("omni-image"),
		omniFilterEl = document.getElementById("omni-filter-mode"),
		omniBlendEl = document.getElementById("omni-blend-mode");

	filterImageEl.addEventListener("click", function(){
		var filterValue = switchFilterMode();
		filterImageEl.style.filter = filterValue;
		filterModeEl.innerHTML = filterValue;
	});

	blendimageEl.addEventListener("click", function(){
		var randomMode = switchBlendMode();
		blendimageEl.style.backgroundBlendMode = randomMode;
		blendModeEl.innerHTML = randomMode;
	});

	omniImageEl.addEventListener("click", function(){
		var randomMode = switchBlendMode(),
			filterValue = switchFilterMode();

		omniImageEl.style.filter = filterValue;
		omniImageEl.style.backgroundBlendMode = randomMode;
		omniFilterEl.innerHTML = filterValue;
		omniBlendEl.innerHTML = randomMode;
	});

	function getRandomInt(min, max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	}

	function switchFilterMode(){
		var numberFilters = getRandomInt(1, 4),
			activeFilters = [];

		for(var i = 0; i < numberFilters; i++){
			activeFilters.push(filterModes[getRandomInt(0, (filterModes.length - 1))]);
		}

		activeFilters = activeFilters.filter(onlyUnique);
		var filterValue = "";

		for(var i = 0; i < activeFilters.length; i++){
			filterValue += activeFilters[i] + "(";
			var filterAmount;

			switch(activeFilters[i]){
				case "blur":
					filterAmount = getRandomInt(1, 10) + "px";
				break;

				case "brightness":
					filterAmount = Math.random().toString().substr(0, 4);
				break;

				case "hue-rotate":
					filterAmount = getRandomInt(1, 180) + "deg";
				break;

				case "contrast":
					filterAmount = getRandomInt(50, 200) + "%";
				break;

				case "grayscale":
				case "invert":
				case "saturate":
				case "sepia":
					filterAmount = getRandomInt(1, 100) + "%";
				break;
			}

			filterValue += filterAmount + ")"

			if(i < activeFilters.length - 1){
				filterValue += " ";
			}
		}

		return filterValue;
	}

	function switchBlendMode(){
		return blendModes[getRandomInt(0, (blendModes.length - 1))];
	}
})(window, document);
