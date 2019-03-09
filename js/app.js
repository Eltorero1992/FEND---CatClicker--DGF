
$(function(){


	let catImage = $("img.catImage");
	let catNames = ["John","Mike"];
	let imgSrc = ["img/625069434_db86b67df8_z.jpg", "img/catTwo.jpeg"]


for (var i = 0 ; i <= catNames.length-1; i++) {

		const newDiv = document.createElement("div");
		const newH1  = document.createElement("h1")
		const newImg = document.createElement("img");
		const newDivCounter = document.createElement("div");
		const catTextName = document.createTextNode(catNames[i])
		const counterInt = document.createTextNode(0);


		$('.container').append(newDiv);

		$(newDiv).attr({
			class: "catContainer" + i
		})

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

}


}());

