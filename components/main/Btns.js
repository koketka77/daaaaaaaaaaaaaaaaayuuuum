
const Btns = ({status, setkey, item}) => {
    return (
        <>
        {
            status === 'cart' 
            ? <>
            <button onClick={()=>{
                        setkey('deleted', item.id)
                    }}>restore</button>
            <button>remove</button>
            </> :
            <>
             <button>correct</button>
                    <button>important</button>
                    <button onClick={()=>{
                        setkey('deleted', item.id)
                    }}>delete</button>
        </>

        }
        </>
    );
}

export default Btns;
