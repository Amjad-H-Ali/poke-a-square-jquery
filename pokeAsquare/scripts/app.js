$('button').on('click',()=>{
	console.log('button Works');
})

//write a function that takes in an argument and populates that many squares inside that square class


const createSquares =(num)=>{

	for (let i = 0; i < num; i ++){

		$('<div>').appendTo($('.squares'))
	}
}

createSquares(5);