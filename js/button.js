// Boilerplate for writing javascript/jquery

// 1. Make sure the .js file is linked with the html & css:
// 	- Check browser
//  - console.log("Hello");
// 2. Write out the problem in plain english
// 3. Declare your variables (think about naming the arguments and values - what do they take and what they return - array/string/number/boolean)
// 4. Write out the structure/Boilerplate of the problem
// 5. Is it a loop? conditional? event?


//Create a button that, every time you click on it, creates a new <p> underneath with the word "Clicked!" in it.
//add a class with a paragraph in it on click of the button.
//needs to repeat everytime it is clicked



$($ => {

 // text inside the <p>

	let main = $("#main");	// make "main" div a jquery element
	let button = $("#button"); //make the button a jquery element
	

	button.on("click", () => {
		let p = $("<p />"); // create a new <p> element and store it in a variable
		p.text("Clicked!"); // these two elements need to be declared inside the event in order to repeat each time the button is "clicked"
		main.append(p);					
	});

});