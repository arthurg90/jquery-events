// Boilerplate for writing javascript/jquery

// 1. Make sure the .js file is linked with the html & css:
// 	- Check browser
//  - console.log("Hello");
// 2. Write out the problem in plain english
// 3. Declare your variables (think about naming the arguments and values - what do they take and what they return - array/string/number/boolean)
// 4. Write out the structure/Boilerplate of the problem
// 5. Is it a loop? conditional? event?


//Create a list of book titles. Use data attributes to store an author and price for each book. When a user clicks one of the book titles, the price and author of the book should be displayed.


//Boilerplate

$($ => {

	let items = $(".item")
	let info = $("#info")

		items.on("click", function () {
			let clicked = $(this);			
			let price = clicked.data("price");
			let author = clicked.data("author");
			clicked.append(" - " + author + " - " + price);
		});	
 });


