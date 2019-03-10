//eslint development


$(function(){

	let catNames = ["John","Mike", "Abel", "Nico", "Manuel"];
	let imgSrc = ["img/625069434_db86b67df8_z.jpg", "img/catTwo.jpeg" , "img/2290467335_89067c7b51_z.jpg", "img/catfour.jpeg","img/catfive.jpg"]

for (var i = 0 ; i <= catNames.length-1; i++) {

		const newDiv = document.createElement("div");
		const newH1  = document.createElement("h1")
		const newImg = document.createElement("img");
		const newDivCounter = document.createElement("div");
		const catTextName = document.createTextNode(catNames[i])
		const counterInt = document.createTextNode(0);
		const catList = document.createElement("ul");
		const catEntry = document.createElement("li");
		const newA = document.createElement("a");

		if (i === 0) {
			$('.container').append(catList);
		}

		$('ul').append(catEntry);

		catEntry.append(newA);

		newA.appendChild(document.createTextNode(catNames[i]));

		$(newA).attr({
			href: '#' + catNames[i]
		})

		$('.container').append(newDiv);

		$(newDiv).addClass("catContainer" + i)
		$(newDiv).addClass("cat-hidden")

		newDiv.append(newH1);

		console.log(catNames[i])

		newH1.appendChild(catTextName);

		newDiv.append(newImg);

		$(newImg).attr({
			class : "cat" + i,
			src: imgSrc[i]
		});

		newDiv.append(newDivCounter)

		$(newDivCounter).attr({
			class: "counter"
		})

		newDivCounter.append(counterInt);

		$(newImg).on('click', function() {
			newDivCounter.innerText = Number(newDivCounter.innerText) + 1
		});

		$(newA).on('click', function() {
			$(newDiv).toggleClass('cat-hidden')
			console.log($(newDiv))
		})

}


}());

