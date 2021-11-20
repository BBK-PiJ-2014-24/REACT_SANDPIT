import React, {useState} from 'react';


const Conditional = () => {

const [list, setList] = useState([{id: 1, word: "one"},{ id: 2, word: "two"}, {id:3, word: "three"}]);    
const [showList, setShowList] = useState(true);

// You can use this handle for an inline fn in the render
const handleDelete = (id) => {
    setList((prevState) => prevState.filter(i => i.id !== id));
}

// This handle will work by referencing the html's text to elements in the list object
const handleDelete2 = (e) => {
    console.log(e.target); // e.target is the <li>One</li>
    console.log(e);
    console.log(e.target.outerText); // identify the outerText
    setList(prevState => prevState.filter(i => i.word !== e.target.outerText));
}

// ****** This is the BEST handle and will work if the html element has an attribute that the e can detect. In this case <li id= ...
// the object itself and its elements cannot be seen by the event 
const handleDelete3 = (e) => {
    console.log(e.target);
    const id = parseInt(e.target.getAttribute("id"));
    setList(prevState => prevState.filter(elem => elem.id !== id));
}

const handleButtonShowClick = (e) => {
    setShowList(true);
}

const handleButtonHideClick = (e) => {
    setShowList(false);
}

return (
   // Conditionals: <THE CONDITION>  && <div> ... </div> - 
   // WRAP EVERYTHING IN A DIV OR U WILL HAVE TO USE "&&"" TO CONNECT EACH SIBLING html 
   // N.b. you can also use a Fragment as a wrapper in order to avoid html bloat
    <div>
        {showList && 
            <React.Fragment> {/* WRAPPER DIV or FRAGMENT */}
                <h1>Array State and Conditional Rendering</h1>
                <ul>
                    {list.map((i) => (
                        <li id={i.id} key={i.id} onClick={handleDelete3}>
                            {i.word}
                        </li>
                    
                    ))}
                </ul>
            
                <div>
                    <button onClick={handleButtonHideClick}>Hide List</button>
                </div>
            </React.Fragment>
        }
        {!showList &&
            <div>
                <button onClick={handleButtonShowClick}>Show List</button>
            </div>
        }
    </div>
)

}

export default Conditional;