import logo from './logo.svg';
import { useState, useEffect } from "react";
import MenuItem from "./MenuItem.js";
import './App.css';

function App() {

  const [items, setItems] = useState([]);
  const [cats, setCats] = useState([]);

useEffect(() => {fetch("http://localhost:8000/getItems").then((res) => res.json()).then((data) => setItems(data))}, []);

useEffect(() => {fetch("http://localhost:8000/getCats").then((res) => res.json()).then((data) => setCats(data))}, []);

//now to display categories.  We'd need some kind of double layered loop.

/*okay, what you need is an array of objects, where the cat is the key.  Like this:
{
fries: [{friesObj1}, {friesObj2}, {friesObj3}],
burgers: [{burgerObj1}, {burgerObj2}]
}

So, now the question becomes how do you make an object with those keys
*/
console.log(cats);
let menuObj = {};

for (let x of cats)
{
Object.assign(menuObj, x)
}

console.log(menuObj);
//okay, that's weird, it treats every letter as an individual item, and only goes through the first item.  
//WTF!!!

  return (
    <div>{/*
      //this is my first attempt at hte double layer loop thing.
      {cats.map((cat) => 
      {
        <h1>{cat}</h1>
        {
          let thisCatsItems = items.filter(item => item.cat == cat);
          thisCatsItems.map((item) => <MenuItem name={item.name}/>)
        }
      }
        )}
   */}
    </div>
  );
}

export default App;
