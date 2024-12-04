const container = document.querySelector("#container");
container.style.cssText = "display: flex;border:1px solid black;flex-wrap:wrap";

// container.style = "border: 1px solid black;"
// container.innerHTML = `<p>Hello world</p>`;

for(let i = 0; i < 256; i++)
{
    const miniDiv = document.createElement('div');
    miniDiv.style.cssText = "border:1px solid black;width:30px;height: 30px;margin:10px;flex-basis: 4.5%;";

    container.appendChild(miniDiv);
}
