import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import './style.css';
import {useState, useEffect} from "react";


function App() {
  const [data, setData] = useState([]);
  const [todoList, setTodolist] = useState([]);

  useEffect(()=>{
setTodolist(data.filter(item => {
  return !item.deleted
}))
  }, [data])

  return (
    <div className="todo">


      <Header data = {data} setData = {setData} />
      <Main todoList={todoList}/>
      <Footer/>


    </div>
  );
}

export default App;
