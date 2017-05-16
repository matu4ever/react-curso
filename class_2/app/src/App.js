import React from 'react';
import ReactDOM from 'react-dom';
import Players from './components/players';

let playerList = [
	{id: 1, name: "Driussi", points: 12, cup: "gold.png"},
	{id: 2, name: "Alario", points: 10, cup: "silver.png"},
	{id: 3, name: "Pity", points: 7, cup: "bronze.png"},
	{id: 4, name: "Tevez", points: 0, cup: "milk.png"}
];

ReactDOM.render(<Players list={playerList} />, document.getElementById("root"))
