const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement("p");
para.textContent = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";

const divBlackPink = document.createElement("div");
divBlackPink.style.backgroundColor = "pink";
divBlackPink.style.border="solid black 2px";
divBlackPink.textContent="test content";

const subH1 = document.createElement("h1");
const subPara = document.createElement("p");

subH1.textContent = "I'm in a div";
subPara.textContent = "ME TOO!";

divBlackPink.appendChild(subH1);
divBlackPink.appendChild(subPara);

container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);
container.appendChild(divBlackPink);


function myAlert(e){
    alert("testing");
    console.log(e);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', myAlert);