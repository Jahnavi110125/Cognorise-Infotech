document.addEventListener('DOMContentLoaded', function(){
    const list_div = document.getElementById('list_container');
    const user_task = document.getElementById('task_input');

    const addTaskButton = document.getElementById('add_task');
    const img = addTaskButton.querySelector('img');
    const defaultImage = 'plus.png'; 
    const clickedImage = 'check.png'; 

    addTaskButton.addEventListener('click',function(){

        img.src = clickedImage; 
        setTimeout(function() {
            img.src = defaultImage;
        }, 1000);

        const task_data = user_task.value.trim();
        if(task_data === ''){
            alert('Kindly Fill the task!!!')
            return;
        }

        const task_div = document.createElement('div');
        task_div.style.display = 'flex';
        task_div.style.justifyContent = 'space-between';
        task_div.style.border = '0.1px solid rgba(188,171,229,255)';
        task_div.style.borderRadius = '20px';
        task_div.style.marginBottom = '15px';
        task_div.style.marginLeft = '35px';
        task_div.style.marginRight = '35px';

        const first_div = document.createElement('div');

        const check_box = document.createElement('input');
        check_box.type = 'checkbox';
        check_box.style.width = '15px'; 
        check_box.style.height = '15px';
        check_box.style.verticalAlign = 'middle';
        check_box.style.alignContent = 'center';
        check_box.style.marginTop = '12px';
        check_box.style.marginLeft = '15px';
        check_box.style.marginRight = '6px';
        check_box.style.borderBlockColor = 'black';
        check_box.style.cursor = 'pointer';
        check_box.style.boxShadow = '0 0 0 2px rgba(188,171,229,255) inset'; 
        first_div.appendChild(check_box);

        const inp = document.createElement('p');
        inp.textContent = task_data;
        inp.style.alignContent = 'center';
        first_div.appendChild(inp);
        inp.style.padding = 0;
        inp.style.margin = '5px';
        // inp.style.fontWeight = 'bold';
        inp.style.fontSize = '18px';
        inp.style.color = 'black';

        first_div.style.display = 'flex';
        first_div.style.flexDirection = 'row';

        const button_div = document.createElement('div');
        button_div.style.display = 'flex';
        button_div.style.flexDirection = 'row';

        const delete_button = document.createElement('button');
        delete_button.innerHTML = '<img src="trash.png" alt="Delete Icon" style="width: 20px; height: 20px; vertical-align: middle;">';
        delete_button.style.padding = '10px';
        delete_button.style.border = 'none';
        delete_button.style.outline = 'none';
        delete_button.style.backgroundColor = 'transparent';
        delete_button.style.cursor = 'pointer';

        const edit_button = document.createElement('button');
        edit_button.innerHTML = '<img src="pencil.png" alt="Delete Icon" style="width: 20px; height: 20px; vertical-align: middle;">';
        edit_button.style.marginRight = '10px';
        edit_button.style.padding = '10px';
        edit_button.style.border = 'none';
        edit_button.style.outline = 'none';
        edit_button.style.backgroundColor = 'transparent';
        edit_button.style.cursor = 'pointer';

        button_div.appendChild(edit_button);
        button_div.appendChild(delete_button);

        task_div.appendChild(first_div);
        task_div.appendChild(button_div);

        
        list_div.appendChild(task_div);

        check_box.addEventListener('change', function() {
            if (check_box.checked) {
                inp.style.textDecoration = 'line-through';
                edit_button.style.display = 'none';
            } else {
                inp.style.textDecoration = 'none';
                edit_button.style.display = 'flex';
            }
        });

        delete_button.addEventListener('click', function() {
            list_div.removeChild(task_div);
        });

        edit_button.addEventListener('click', function() {
            const user_task = prompt("Edit task:", inp.textContent); 
            if (user_task !== null && user_task.trim() !== "") { 
                inp.textContent = user_task.trim(); 
            }
        });
        

        document.getElementById('task_input').value = "";
    });

    document.getElementById('delete_button').addEventListener('click', function(){
        list_div.innerHTML = '';
    });

    document.getElementById('all_tasks').addEventListener('click',function(){
        const all_tasks = list_div.querySelectorAll('div');
        all_tasks.forEach(function(tasks){
            // const checkbox_i = tasks.querySelector('input[type="checkbox"]');
            // if (checkbox_i && checkbox_i.checked) {
            //     tasks.style.display = 'none'; 
            // } else {
                tasks.style.display = 'flex'; 
            // }
        });
    });
    
    document.getElementById('complete_button').addEventListener('click',function(){
        const completed_tasks = list_div.querySelectorAll('div');
        completed_tasks.forEach(function(task){
            const checkbox = task.querySelector('input[type="checkbox"]');
            if (checkbox && !checkbox.checked) {
                task.style.display = 'none'; 
            } else {
                task.style.display = 'flex'; 
            }
        });
    });

    document.getElementById('incomplete_button').addEventListener('click',function(){
        const incompleted_tasks = list_div.querySelectorAll('div');
        incompleted_tasks.forEach(function(tasks){
            const checkbox_i = tasks.querySelector('input[type="checkbox"]');
            if (checkbox_i && checkbox_i.checked) {
                tasks.style.display = 'none'; 
            } else {
                tasks.style.display = 'flex'; 
            }
        });
    });
});