const list=[];
class ToDo{
    constructor(item){
        this.element=item;
    }
    add(){
        const task=document.querySelector("#input_id").value;
        if(task==""){
            alert("Task field empty!");
        }
        else{
            const object={
                id:list.length,
                text:task,
                isDone:false,
            }
            list.unshift(object);
            this.show();
            document.querySelector("#input_id").value='';        
        }
    }
    Done_NotDone(x){
        const index=list.findIndex((item)=>item.id==x);
        list[index].isDone==false ? list[index].isDone=true:list[index].isDone=false;
        this.show();
    }
    deleteElement(z){
        const delIndex=list.findIndex((item)=>item.id==z);
        list.splice(delIndex,1);
        this.show();
    }
    show(){
        this.element.innerHTML="";
        list.forEach((object_item)=>{
            const lielement=document.createElement("li");
            const delbtn=document.createElement("i");

            lielement.innerText=object_item.text;
            lielement.setAttribute("data-id",object_item.id);

            delbtn.setAttribute("data-id",object_item.id);
            delbtn.classList.add("far","fa-trash-alt");

            lielement.appendChild(delbtn);
            delbtn.addEventListener("click",function(e){
                const delId=e.target.getAttribute("data-id");
                ToDoList.deleteElement(delId);
            })
            lielement.addEventListener("click",function(e){
                const selectId=e.target.getAttribute("data-id");
                ToDoList.Done_NotDone(selectId);
            })
            if(object_item.isDone){
                lielement.classList.add("checked");
            }
            this.element.appendChild(lielement);
        })
    }
}
const listSection=document.querySelector("#mylst");
ToDoList=new ToDo(listSection);
document.querySelector('.btn').addEventListener('click',function(){
    ToDoList.add();
});
