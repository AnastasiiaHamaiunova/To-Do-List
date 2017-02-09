var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')): {
    todo:[],
    completed:[]
};
var removeI = '<i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>';
var completeI = '<i class="fa fa-check-circle-o fa-2x" aria-hidden="true"></i>';

renderTodoList();

document.getElementById('add').addEventListener("click", function(){
        var value = document.getElementById('item').value;
        if(value) 
            {   data.todo.push(value);
                addItemToDOM(value);
                document.getElementById('item').value = '';
            }

    });

document.getElementById('item').addEventListener('keydown', function (e) {
  var value = this.value;
  if (e.code === 'Enter' && value) {
    addItem(value);
  }
});

 function addItemToDOM(text,completed){
       var list = (completed) ? document.getElementById('completed'):document.getElementById('todo');

        var item = document.createElement('li');
        item.innerText = text;

        var buttons = document.createElement('div');
        buttons.classList.add('buttons');

        var remove = document.createElement('button')
        remove.classList.add('remove')
        remove.innerHTML = removeI;
     //Remove the Item
        remove.addEventListener('click', removeItem);

        var complete = document.createElement('button')
        complete.classList.add('complete')
        complete.innerHTML = completeI;
     
     //completed the item
        complete.addEventListener('click', completedItem);


        buttons.appendChild(remove);
        buttons.appendChild(complete);
        item.appendChild(buttons);

        list.insertBefore(item, list.childNodes[0]);
        
     dataObjectUpdated();

}
function removeItem(){
    
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var parentId = parent.id;
    var value = item.innerText;
    
    if(parentId==='todo'){
        data.todo.splice(data.todo.indexOf(value),1);
    }else{
        data.completed.splice(data.completed.indexOf(value),1);
    }
    console.log(data);
    dataObjectUpdated();

        parent.removeChild(item);
    }


function completedItem(){
   var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var parentId = parent.id;
    var value = item.innerText;
    
    if(parentId==='todo'){
        data.todo.splice(data.todo.indexOf(value),1);
        data.completed.push(value);
    }else{
        data.completed.splice(data.completed.indexOf(value),1);
        data.todo.push(value);
    }
    
    
    console.log(data);
    dataObjectUpdated();
    
    var target = (parentId=="todo")?document.getElementById('completed'):document.getElementById('todo');
    parent.removeChild(item);

   target.insertBefore(item, target.childNodes[0]);
}

function renderTodoList() {
  if (!data.todo.length && !data.completed.length) return;

  for (var i = 0; i < data.todo.length; i++) {
    var value = data.todo[i];
    addItemToDOM(value);
  }

  for (var j = 0; j < data.completed.length; j++) {
    var value = data.completed[j];
    addItemToDOM(value, true);
  }
}
function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(data));
}
   


