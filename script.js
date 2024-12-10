        const input = document.getElementById('taskInput'); // get the input element
        const button = document.getElementById('addButton'); // get the button
        const taskList = document.getElementById('taskList'); // get the list

        button.addEventListener('click', ()=>{  
            const taskText = input.value;  // get input value
            if(taskText.trim()=== ''){
                alert('task cannot be empty');  // show error message if taskText is empty
                return;
            }
            
             // create list item
            const listItem = document.createElement('li');
            listItem.textContent = taskText; // set text content
            listItem.classList.add('list-item')  // add class to list item

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'delete';
            deleteButton.classList.add('deleteButton');  // add a class to the button for styling purposes
            listItem.appendChild(deleteButton);
            
            // Append the list item to the task list
            taskList.appendChild(listItem); 
            // clear input value 
            input.value =''; 

            //add delete functionality
            deleteButton.addEventListener('click', ()=>{
                taskList.removeChild(listItem);
            })

            // Create a checkbox
            const checkBox = document.createElement('input');
            checkBox.classList.add('check-box');
            checkBox.type = 'checkbox';
            listItem.appendChild(checkBox);

            // add checkbox functionality
            checkBox.addEventListener('change',()=>{
            listItem.classList.toggle('completed'); // toggle completed
            })

            
        })  