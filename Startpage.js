//global variables
var backgroundDark = '#313131';
var accentDark = '#DF8917';
var accentDarkHover = '#E7AB5C';
var inputFieldBackgroundDark = '#4F4E4E';
var inputFieldTextColorDark = 'white';

var backgroundLight = '#F7F7F7';
var accentLight = '#3B7583';
var accentLightHover = '#6697A3';
var inputFieldBackgroundLight = 'white';
var inputFieldTextColorLight = 'black';



//onload

window.onload = function(){
	displayTimeAndDayTimeDesign();
	setInterval(displayTimeAndDayTimeDesign,1000);
	document.getElementById("btn-search").onclick = doWebSearchIfPossible;
	document.onkeyup = function(e){
		if(e.keyCode == 13){
			doWebSearchIfPossible();
		}
	}
}

//timed function
function displayTimeAndDayTimeDesign(){
	let txtClock = document.getElementById("time-area");
	let now = new Date();
	let hrs = now.getHours();
	let mins = now.getMinutes();
	let sec = now.getSeconds();
	
	if(hrs >= 20 || hrs < 8 || (hrs == 8 && mins < 30)){
		
		document.documentElement.style.setProperty('--color-background',backgroundDark);
		document.documentElement.style.setProperty('--color-accent',accentDark);
		document.documentElement.style.setProperty('--color-accent-hover',accentDarkHover);
		document.documentElement.style.setProperty('--color-input-field-background',inputFieldBackgroundDark);
		document.documentElement.style.setProperty('--color-input-field-text',inputFieldTextColorDark);
	}
	else{
	
		document.documentElement.style.setProperty('--color-background',backgroundLight);
		document.documentElement.style.setProperty('--color-accent',accentLight);
		document.documentElement.style.setProperty('--color-accent-hover',accentLightHover);
		document.documentElement.style.setProperty('--color-input-field-background',inputFieldBackgroundLight);
		document.documentElement.style.setProperty('--color-input-field-text',inputFieldTextColorLight);
	}
	
	txtClock.innerHTML = addZeroIfNeeded(hrs) + ":" + addZeroIfNeeded(mins) + ":" + addZeroIfNeeded(sec)	
}

//web search function
function doWebSearchIfPossible(){
	var searchText = document.querySelector("#txt-search").value;
	console.log(searchText)
	
	if(searchText.length > 0){
		window.open(createSearchUrl(searchText),"_top");
	}
}

//help functions
function addZeroIfNeeded(num){
	if(num < 10){
		return "0" + num
	}
	else{
		return num + ""
	}
}

function createSearchUrl(searchText){
	const selectorForSearchEngine = document.querySelector("#search_select");
	const selectedSearchEngineId = selectorForSearchEngine.options[selectorForSearchEngine.selectedIndex].id; 
	switch(selectedSearchEngineId){
		case "search_select_duckduckgo":
			return "https://duckduckgo.com/?q="+searchText;
		case "search_select_google":
			return "https://www.google.de/search?q="+searchText;
		case "search_select_ecosia":
			return "https://www.ecosia.org/search?q="+searchText;	
		case "search_select_bing":
			return "https://www.bing.com/search?q="+searchText;	
		case "search_select_wikipedia":
			return "https://de.wikipedia.org/wiki/"+searchText;	
			
	}
}