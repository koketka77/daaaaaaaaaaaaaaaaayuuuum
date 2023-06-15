import { useState } from "react";
const Header = ({data, setData}) => {
    const [text, setText] = useState('');
    
    const addTodo = ()=>{
        if(text.trim() !== '') setData([{
            completed: false, 
            important: false,
            deleted: false,
            correct: false,
            id: Math.random(),
            text,
        }, ...data])

        setText('')
    }
    return (
        <div className="header">
            <button onClick={addTodo} className="circle-btn">+</button>
            <input onChange={e =>{
                setText(e.target.value)
            }} type="text" 
            value={text}/>


        </div>
    );
}

export default Header;
