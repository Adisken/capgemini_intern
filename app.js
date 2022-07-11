window.addEventListener('load', () => {
    const form = document.querySelector("#newTaskForm");
    const inputTitle = document.querySelector("#taskTitle");
    const inputBody = document.querySelector("#taskBody");
    const listEl = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskTitle = inputTitle.value;
        const taskBody = inputBody.value;
        
        
        const taskEl = document.createElement("div");
        taskEl.classList.add("task");

        const taskCoEl = document.createElement("div");
        taskCoEl.classList.add("content");

        taskEl.appendChild(taskCoEl);

        //code for title
        const taskTiInEl = document.createElement("input");
        taskTiInEl.classList.add("text");
        taskTiInEl.type = "text";
        taskTiInEl.value = taskTitle;
        taskTiInEl.setAttribute("readonly", "readonly");

        taskCoEl.appendChild(taskTiInEl) //task title goes into task contener
        listEl.appendChild(taskEl);

        //code for body
        const taskBodyInEl = document.createElement("input");
        taskBodyInEl.classList.add("text");
        taskBodyInEl.classList.add("body");
        taskBodyInEl.type = "text";
        taskBodyInEl.value = taskBody;
        taskBodyInEl.setAttribute("readonly", "readonly");

        taskCoEl.appendChild(taskBodyInEl); //task body goes into task contener
        listEl.appendChild(taskEl)

        //code for buttons
        const taskActionEl = document.createElement("div");
        taskActionEl.classList.add("actions");

        const taskEditEl = document.createElement("button");
        taskEditEl.classList.add("edit");
        taskEditEl.innerHTML = "Edit";

        const taskDelEl = document.createElement("button");
        taskDelEl.classList.add("delete");
        taskDelEl.innerHTML = "Delete";

        taskActionEl.appendChild(taskEditEl);
        taskActionEl.appendChild(taskDelEl);
        taskEl.appendChild(taskActionEl);

        //edit task code
        taskEditEl.addEventListener('click', () => {
            if (taskEditEl.innerText.toLowerCase() == "edit") {
                taskTiInEl.removeAttribute("readonly");
            taskBodyInEl.removeAttribute("readonly");
            taskBodyInEl.focus();
            taskEditEl.innerText = "Save";
            } else {
                taskTiInEl.setAttribute("readonly", "readonly");
                taskBodyInEl.setAttribute("readonly", "readonly");
                taskEditEl.innerText = "Edit";
            }
        })

        //delete task code
        taskDelEl.addEventListener('click', () => {
            listEl.removeChild(taskEl);
        })




    })
})