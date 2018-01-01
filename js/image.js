
//previous needs to be saved in a variable to be compared to and then double in size, the new doube sized image is the new previous size
//original size needs to be saved in a variable to reset to
//first click doubles the original image, consequent clicks double the previous image

$($ => {

	let kitten = $("#image")	
	let originalHeight = kitten.height(); 
	let originalWidth = kitten.width(); //declared outside the event as it needs to get the original size which is constant

	//Reset button

	let button= $('<input type="button" value="Reset"/>');
    $(".page-header").append(button);

    button.on("click", () => {
    	kitten.css({			  
			height: originalHeight,
			width: originalWidth,		
        });

    });

// Cat image

	kitten.on("click", () => {
		let currentWidth = kitten.width();
		let currentHeight = kitten.height();

		kitten.css({			  
			height: currentHeight * 2,
			width: currentWidth *2,		
        });

	});

});



