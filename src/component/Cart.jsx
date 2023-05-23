import React, {useState} from "react";
//import './App.css';


function Cart() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleSubmit = (e) =>{
    e.preventDefault();
    };
   const addItem= () => {
    if(inputValue.trim() !== ''){
      setItems([...items, inputValue]);
      setInputValue('');
    }
   } 
  
 const deleteItem = (index) =>{
    const newItems = [...items];
    newItems.splice(index,1);
    setItems(newItems);
 };
 



  return(
    <div className="Cart">
      <h1 id="list">Shopping List</h1>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <label>Item to Buy</label> <br />
        <input 
        type="text"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        placeholder="Enter your Item"
        />
         <button onClick={addItem}>Add</button>
        </form>
      </div>
       <div className="break">
      <ul>
        {items.map((item, index)=>(
          <li key={index}>
            <span>{item}</span>
            <button onClick={()=>deleteItem(index)}>X</button>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  )
}
export default Cart;