// Boilerplate for writing javascript/jquery

// 1. Make sure the .js file is linked with the html & css:
// 	- Check browser
//  - console.log("Hello");
// 2. Write out the problem in plain english
// 3. Declare your variables (think about naming the arguments and values - what do they take and what they return - array/string/number/boolean)
// 4. Write out the structure/Boilerplate of the problem
// 5. Is it a loop? conditional? event?



//Create a page with a number input field and two buttons, "Add" and "Total". When the "Add" button is pressed the number should be added to a list of numbers on screen. When the "Total" button is pressed the total of all the numbers in the list should be displayed. TODO



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

