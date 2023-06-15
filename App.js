import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import './style.css';
import {useState, useEffect} from "react";


function App() {
  const [data, setData] = useState([]);
  const [todoList, setTodolist] = useState([]);
  const [status, setStatus] = useState('all')
  const setkey = (key, id) => {
    setData(data.map( item =>{

      if(item.id === id){
        return {
          ...item, 
          [key]: !item[key]
        }
      }else{
        return item
      }
    }))
  }

  useEffect(()=>{

switch (status) {
  case 'completed' : {
    return setTodolist(data.filter(item =>{
      return !item.deleted && item.completed
    }))
  }
  case 'active' : {
    return setTodolist(data.filter(item =>{
      return !item.deleted && !item.completed
    }))
  }
  case 'cart' : {
    return setTodolist(data.filter(item =>{
      return item.deleted 
    }))
  }
  default : {
    setTodolist(data.filter(item => {
  return !item.deleted
}))
  }
   
}
  }, [data, status])

  return (
    <div className="todo">


      <Header data = {data} setData = {setData} />
      <Main status={status} setkey={setkey} todoList={todoList}/>
      <Footer todoList={todoList} status={status} setStatus={setStatus}/>


    </div>
  );
}

export default App;





