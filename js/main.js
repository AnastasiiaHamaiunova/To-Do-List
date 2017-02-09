window.addEventListener("DOMContentLoaded", function(e) {	
	document.getElementById("add").addEventListener("click", function(){
		var value = document.getElementById('item').value;
		if(value){
			addItemToDo(value);
		}
	})
	function addItemToDo(text){
		var item = document.createElement('li');
		item.innerText = text;

		var buttons = document.createElement('div');
		buttons.classList.add('buttons');

		var remove = document.createElement('button')
		remove.classList.add('remove')
		
		var complete = document.createElement('button')
		add.classList.add('complete')
	}
})



