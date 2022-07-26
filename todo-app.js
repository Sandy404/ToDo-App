window.addEventListener("load",()=>{
    const form1=document.getElementById("form1");
    const input1=document.getElementById("input1");
    const table=document.getElementById("table");
    

    form1.addEventListener("submit",(el)=>{
        el.preventDefault();
        const task=input1.value;

        
        if(!task){
            const refill=document.getElementById("refill");
            refill.style.display="block";
            refill.style.color="crimson";
            return;

        }
       const newTask=document.createElement("div");
       newTask.classList.add("box");

       const description=document.createElement("div");
       description.classList.add("description");

       const newInput=document.createElement("input");
       newInput.type="text";
       newInput.value=task;
       newInput.setAttribute("readonly","readonly");

       description.appendChild(newInput);
       newTask.appendChild(description);
       table.appendChild(newTask);

       const changes=document.createElement("div");
       changes.classList.add("changes");

       const edit=document.createElement("button");
       edit.classList.add("edit");
       edit.innerHTML="Edit";

       const trash=document.createElement("button");
       trash.classList.add("delete");
       trash.innerHTML="Delete";

       changes.appendChild(edit);
       changes.appendChild(trash);
       
       newTask.appendChild(changes);
       edit.addEventListener("click",()=>{
        if(edit.innerHTML=="Edit"){
        newInput.removeAttribute("readonly");
        newInput.focus();
        edit.innerHTML="save";
        }
        else{
        newInput.setAttribute("readonly","readonly");
        edit.innerHTML="Edit";
        }
       })
       trash.addEventListener("click", ()=>{
        table.removeChild(newTask);
       })
    })
})

