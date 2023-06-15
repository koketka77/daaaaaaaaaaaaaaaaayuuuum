
const Footer = ({status, setStatus, todoList}) => {
    console.log(status);
    return (
        
        <div className="footer">
            <p>{todoList.length} items</p>

            <div className="footer-center">
                <button className={'allbtn'+status} onClick={()=>{
                    setStatus('all')
                }}>all</button>
                <button className={'activebtn'+status} onClick={()=>{
                    setStatus('active')
                }}>active</button>
                <button className={'compbtn'+status} onClick={()=>{
                    setStatus('completed')
                }}>completed</button>
                <button className={'cartbtn'+status} onClick={()=>{
                    setStatus('cart')
                }}>cart</button>
            </div>

            <button>clear completed</button>
        </div>
    );
}

export default Footer;
