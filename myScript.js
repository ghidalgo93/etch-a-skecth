// JavaScript for the happy sketch browser application
// Author: Gerardo Hidalgo-Cuellar, gerardohidalgo.com
// Date: 9/22/2020

// Function to create a grid, lay it out and fill it, within a given an HTML element
// input: the html element to become grid container, number of columns, number of rows
function createGrid(gridContainer, columns, rows){
	layoutGrid(gridContainer, columns, rows);
	fillGrid(gridContainer, columns, rows);
	return;
}

// Function to lay out the grid within a container
// input: the html element to become grid container, number of columns, number of rows
function layoutGrid(gridContainer, columns, rows){
	gridContainer.style.display = 'grid';
	gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
	return;
}

// Function to fill the grid container with div elements
// input: the html element to become grid container, number of columns, number of rows
function fillGrid(gridContainer, columns, rows){
	let totalCells = columns * rows;
	//create all cells, adding id's and class, add to cell container
	for (let cellNum = 0; cellNum < totalCells; cellNum++){
		const currentCell = document.createElement('div');
		currentCell.setAttribute('id', `cell${cellNum}`);
		currentCell.setAttribute('class', 'cell');
		gridContainer.appendChild(currentCell);
	}
	return;
}

function clearCells(e){
	const cells = document.querySelectorAll('.cell');
	cells.forEach(cell => cell.classList.remove('drawn'));
}

function removeAllChildNodes(parent){
	while (parent.firstChild){
		parent.removeChild(parent.firstChild);
	}
}

function newCanvas(e){
	let sides = prompt('How many squares per side?');
	removeAllChildNodes(canvas);
	createGrid(canvas, sides, sides);
	let cells = document.querySelectorAll('.cell');
	cells.forEach(cell => cell.addEventListener('mouseenter', drawCell));
}

function drawCell(e){
	this.classList.add('drawn');
	return;
}




//####### START OF SCRIPT ########
let rows = 16;
let columns = 16;

const canvas = document.querySelector('#canvas');
createGrid(canvas, columns, rows);

// cells not declared as cont because later we need to remake cells for a new canvas
let cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseenter', drawCell));

const clearButton = document.querySelector('#clearBtn');
clearButton.addEventListener('click', clearCells);

const newCanvasButton = document.querySelector('#newCanvasBtn');
newCanvasButton.addEventListener('click', function() {
	newCanvas(canvas);	
});


