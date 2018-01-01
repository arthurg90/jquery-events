// Boilerplate for writing javascript/jquery

// 1. Make sure the .js file is linked with the html & css:
// 	- Check browser
//  - console.log("Hello");
// 2. Write out the problem in plain english
// 3. Declare your variables (think about naming the arguments and values - what do they take and what they return - array/string/number/boolean)
// 4. Write out the structure/Boilerplate of the problem
// 5. Is it a loop? conditional? event?


//add an input and a button. When you click the button, the text inside the input should appear as the first item in a list.
//items need to be stored in a variable
//pressing the button should bring up the variable
//make a new list element below the form => on click (add a "li" on click)


//Boilerplate

$($ => {

	let main = $(".form-group");	// make "form-group" div a jquery element
	let button = $("#button"); 		//make the button a jquery element
	let input = $("#usr")			//input jquery element to pull the item info from
	
	let list = $("<ul />");			//need to make a ul to store the input li values
	main.append(list);				//add outside the event 

	button.on("click", () => {
		let inputVal = input.val();   //takes the input value from the input field
		let li = $("<li />");		  //create a new list item to go in the ul	
		li.text(inputVal)			  //wraps the inputVal text string in a li element
		list.append(li);			  //adds list item to the ul after the form
	});
 
});


