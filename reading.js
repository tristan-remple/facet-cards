function readCard(cardSet) {
	
	var cardInfo = JSON.parse(cardSet);
	var pull = parseInt(Math.random() * 24);
	var card = cardInfo[pull];
	var title = card.Card;
	var aspect = parseInt((Math.random() * 2) + 1);
	
	var subtitle = '';
	var message = '';
	
	if (aspect == 1) {
		subtitle = "Upright";
		message = card.Upright;
	} else if (aspect == 2) {
		subtitle = "Reversed";
		message = card.Reversed;
	}
	
	var output = `<h1>${title}</h1>
		<h2>${subtitle}</h2>
		<p>${message}</p>`;
	
	document.getElementById("mainbox").innerHTML = output;
}

function readCardFile() {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
    rawFile.open("GET", "cards.json", true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
			readCard(rawFile.responseText);
        }
    };
	
    rawFile.send(null);
}

document.getElementById("pull").addEventListener("click", readCardFile, false);