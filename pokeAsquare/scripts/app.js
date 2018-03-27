
let score = 0;
let time = 30;
let round = 1;



$('button').on('click',function(){
	$('.squares').empty();

	setUpRound(round);

	$('h1').text('scoreboard: '+score)
})



//write a function that takes an element and applys random color to it


const randomColor =(square)=>{
	

	const randomNum = Math.floor(Math.random() * 3);
	

	if(randomNum === 0){
		square.css('background-color','red')
	}
	else if(randomNum === 1){
		square.css('background-color','green')
	}
	else if(randomNum === 2){
		square.css('background-color','blue')
	}


}

//write a function that takes in an argument and populates that many squares inside that square class


const createSquares =(num)=>{

	for (let i = 0; i < num; i ++){
		const square = $('<div>');
		//Make EACH SQUARE CLICKABLE
		//add an event listener to the square
		square.on('click',(e)=>{
			//event.currentTarget will give us the square we are clicking on
			//so make the squares invisible when clicke on


				

				if($(e.currentTarget).css('opacity') != 0){
					//Pass in to variable to check what color
					checkValidPoke($(e.currentTarget).css('backgroundColor'));
				}				

				//Make This a jquery element with constructo
				$(e.currentTarget).css('opacity','0');

				
				//change scoreboard on DOM
				$('h1').text('scoreboard: '+score)
		})

		randomColor(square)

		square.appendTo($('.squares'));

		// loseTransparency(square)



		
	}

	
}

//write a function that takes a string and if it is blue update the global variable score, if its not, decrease the score



const checkValidPoke = (color)=>{

	if(color === 'rgb(0, 0, 255)'){
		score ++;
	}

	else{
		score --;
	}
}




//write function called set timer that starts an interval and counts dow to 0
//when it reaces 0 you increase the round

 
 const setTimer = ()=>{
 	const timer = setInterval( ()=>{
	time --;

		$('#timer').text('timer: '+ time + 's ');

		
		if(time === 0 ){

			clearInterval(timer);
			round ++;

			$('#round').text('round: '+ round);


			

			if(round === 4){
				alert('GameOver!');
				$('button').remove();
			}

		
		}



		


	}, 1000);

}



//now write function called setUpRound, will reset the score and time
//depending on the round, set up to handle 4 rounds
//round 1  could be 30 s and 50 squares
// round 2, could be 20 sec and 100 squares


const setUpRound = (round)=>{



		score = 0;
		console.log(score);
		time = 35- (round * 5);
		createSquares(round * 100);
		
		setTimer();
	
}

// const loseTransparency = (square)=>{

// 	let opacity = 1;
// 	let opacityStr;

// 	const timer =
// 		setInterval(()=>{
// 			opacity -= .1;
// 			opacityStr = opacity.toString();
// 	square.css('opacity',opacityStr);

// 		}, 1000)
	
	


// }

