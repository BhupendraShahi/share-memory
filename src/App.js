import React, { useState, useEffect } from "react";

import NavBar from "./components/NavBar";

import bubbleSort from './algorithms/bubbleSort';

function App() {
    //states
    const [completed, setCompleted] = useState(false);
    const [sorting, setSorting] = useState(false);
    const [sortedIndex, setSortedIndex] = useState([]);
    const [blocks, setBlocks] = useState([])

    //generating shuffled array of 1 to n
    // const generateRandomArray = (len) => {
    //     setCompleted(false)
    //     setSorting(false);
    //     setSortedIndex(false);

    //     const randomArray = Array.from(Array(len + 1).keys()).slice(1);

    //     for (let i = randomArray.length - 1; i > 0; i--) {
    //         const randomIndex = Math.floor(Math.random() * (i - 1))
    //         const temp = randomArray[i]

    //         randomArray[i] = randomArray[randomIndex]
    //         randomArray[randomIndex] = temp
    //     }

    //     setBlocks(randomArray);
    // }

    // // Generating random array every time the length is changed by th user
    // useEffect(() => {
    //     generateRandomArray(len)
    // }, [len, algo])

    return (
        <div className="App">
            <NavBar />
        </div>
    )
}

export default App;
