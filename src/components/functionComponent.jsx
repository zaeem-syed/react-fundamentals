function Myname(){
    return (
        <div>
            <input type="text" name="" id="" onChange={clickme} />
            <button onClick={clickme}>click here for the future </button>
        </div>
    )
}
function clickme(){
    alert("hi i am inside the function component");
}
export default Myname;