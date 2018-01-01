// let spanHeight = $("#height");
// let spanWidth = $("#width");

// let doc = $(document);
// let width = doc.width(); // the width of the web page on the screen
// let height = doc.height(); // the height of the web page on the screen

$($ => {

	let win = $(window);
	let spanHeight = $("#height");
	let spanWidth = $("#width");

	let setSize = () => {	//make a function to display the sizes of the web
	
	let width = win.width(); // the width of the web page on the screen
	let height = win.height(); // the height of the web page on the screen
	spanHeight.text(height);
	spanWidth.text(width);

	}

	setSize();

//Resize event:

	win.on("resize", setSize);

	
});


