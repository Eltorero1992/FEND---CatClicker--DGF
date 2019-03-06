
$(function(){


	const catImage = $("img.catImage")

	catImage.on('click', function() {
		const counter = document.querySelector("div.counter")
		counter.innerText = Number(counter.innerText) + 1
	});

}());

