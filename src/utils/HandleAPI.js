import axios from 'axios';

const baseUrl ="https://fullstack-todo-app-backend-bza0.onrender.com";

const getalltodo = (setToDo)=>
{
    axios.get(baseUrl)
    .then(({data}) => {
        console.log('data', data);
        setToDo(data);  
    })
}

const addtodo = (text,settext,setToDo) => {
    axios.post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        settext("")
        getalltodo(setToDo);
        })
    .catch((err)=>console.log(err));      
}


const updateToDo = (toDoId,text,setToDo,settext,setisUpDating) => {
    axios.post(`${baseUrl}/update`, {_id: toDoId,text})
    .then((data) => {
        settext("")
        setisUpDating(false);
        getalltodo(setToDo);
        })
    .catch((err)=>console.log(err));       
}

const deleteToDo = (_id,setToDo) => {
    axios.post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data);
        getalltodo(setToDo);
        })
    .catch((err)=>console.log(err));
}


export {getalltodo, addtodo, updateToDo, deleteToDo}; 