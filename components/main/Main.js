import Btns from "./Btns";

const Main = ({todoList, setkey, status}) => {
    return (
        <div className="main">
            {
                todoList.map(item => {
                    return <div key={item.id} className="main-item">
                        <div className="main-item-left">
                <button onClick={()=>{
                    setkey('completed', item.id)
                }} className="circle-btn">{item.completed ? '+' : ''}
                
               
                </button>
                <p>{item.text}</p>
                
                </div>
                <div className="main-item-tight">
                    <Btns item={item} setkey={setkey} status={status}/>
                    
                </div>
            </div>
                })
            }
            
       
        </div>
    );
}

export default Main;
