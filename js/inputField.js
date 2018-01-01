// Boilerplate for writing javascript/jquery

// 1. Make sure the .js file is linked with the html & css:
// 	- Check browser
//  - console.log("Hello");
// 2. Write out the problem in plain english
// 3. Declare your variables (think about naming the arguments and values - what do they take and what they return - array/string/number/boolean)
// 4. Write out the structure/Boilerplate of the problem
// 5. Is it a loop? conditional? event?



//Create a page with an input field and two buttons, "Submit" and "Display". When the "Submit" button is pressed, the input field should be cleared and its value stored. When the "Display" button is pressed all previously submitted bits of text should appear as a list underneath. Nothing should be displayed until the "Display" button is pressed. This should work for any number of text submissions.

//two separate click events - one for storing and clearing the inputfield, one for displaying the stored input
//need a variable to store the input data to be called on
//



$($ => {

	let main = $(".form-group");	// make "form-group" div a jquery element
	let submit = $("#submitB"); 	//make the button a jquery element
	let display = $("#displayB")
	let input = $("#usr")			//input jquery element to pull the item info from
	let list = $("<ul />");			//need to make a ul to store the input li values - acts as an invisible container, only called on when display button is clicked

	submit.on("click", () => {
		let inputVal = input.val();   //takes the input value from the input field
		let li = $("<li />");		  //create a new list item to go in the ul	
		list.hide();				  //hides the list when inputing more values
		li.text(inputVal);			  //wraps the inputVal text string in a li element
		list.append(li);			  //adds list item to the ul after the form (this is not displayed on page)
		input.val('');				  //sets the value of the input field to '' which is blank
	});

	display.on("click", () => {
		list.show()					//shows the list items again when clicked
 		main.append(list);			//adds the list container with the stored items
	});

});

