// Boilerplate for writing javascript/jquery

// 1. Make sure the .js file is linked with the html & css:
// 	- Check browser
//  - console.log("Hello");
// 2. Write out the problem in plain english
// 3. Declare your variables (think about naming the arguments and values - what do they take and what they return - array/string/number/boolean)
// 4. Write out the structure/Boilerplate of the problem
// 5. Is it a loop? conditional? event?


//Create a button that, every time you click on it, updates the number of clicks text of the button




$($ => {

	let main = $("#main");	// make "main" div a jquery element
	let button = $("#button"); //make the button a jquery element
	let counter = 0

	button.on("click", () => {
		let label = $("#button");
		counter++
		label.text("Press Count: "+ counter);

	});
 
});





// text inside the <p>

	

