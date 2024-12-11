const container = document.querySelector("#container");
const btn = document.querySelector("button");
let gridSize = 0;


// container.style = "border: 1px solid black;"
// container.innerHTML = `<p>Hello world</p>`;

btn.addEventListener('click',()=> {

    let result = +prompt("Enter the grid size: ");

    if(result == result && result != 0)
    {
        gridSize = result;
        // console.log(result);

        for(let i = 0; i < gridSize * gridSize; i++)
        {
            const gridItem = document.createElement('div');
            gridItem.style.cssText = "border:1px solid black;width:30px;height: 30px;margin:10px;flex-basis: 9%;";
            gridItem.classList.add('grid-item');

            // gridItem.addEventListener()

            gridItem.addEventListener('mouseover',(event)=> {
                event.target.style.cssText += "background: black;";
            })

            container.appendChild(gridItem);
        }

        //Apply CSS to the grid container and grid items.
        container.style.cssText = `display: flex;border:1px solid black;flex-wrap:wrap;width: ${gridSize * 10}px;height: ${gridSize * 10}px`;
    }

    else
    {
        alert("Please enter a valid digit.");
    }

})
