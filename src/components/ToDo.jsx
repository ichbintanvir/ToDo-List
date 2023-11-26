import { useRef, useState } from "react";

const ToDo = () => {
    let [List, setList] = useState([]);
    let [Item, setItem] = useState({});
    let [editIndex, setEditIndex] = useState(null);
    let clearInputBox = useRef();

    const userInput = (event) => {
        setItem(event.target.value);
    }
    // const addEle = () => {
    //     List.push(Item);
    //     setList([...List]);
    //     clearInputBox.current.value = "";
    // }


    const addEle = () => {
        if (editIndex !== null) {
            // If editIndex is not null, we are in edit mode
            List[editIndex] = Item;
            setEditIndex(null); // Reset editIndex after editing
        } else {
            // Otherwise, we are adding a new item
            setList([...List, Item]);
        }
        setItem(""); // Clear input after adding/editing
        clearInputBox.current.value = "";
    };

    // const edit = (index) => {
    //     List.splice(index, 1, addEle);
    //     setList([...List]);
    // }
    const edit = (index) => {
        setItem(List[index]);
        setEditIndex(index); // Set the editIndex to the current index
    };
    const remove = (index) => {
        List.splice(index, 1);
        setList([...List]);
    }
    return (
        <div className="container">
            <h1 className="text-danger">ToDo List</h1>
            <input className="w-75" type="text" placeholder="Enter a string" ref={clearInputBox} onKeyUp={userInput} />
            {/* <button onClick={addEle}>Add</button> */}
            <button className="btn btn-primary" onClick={addEle}>{editIndex !== null ? "Edit" : "Add"}</button>
            <ol>{
                List.map((ele, index) => {
                    return (
                        <div>
                            <li className="fs-1">{ele}</li>
                            <button className="btn btn-primary" onClick={() => edit(index)}>edit</button>
                            <button className="btn btn-danger mx-3" onClick={() => remove(index)}>remove</button>
                        </div>
                    )
                })
            }</ol>
        </div>
    );
}
export default ToDo;