document.addEventListener('DOMContentLoaded', () => {
const newDiv = document.createElement('div');
const newH1 = document.createElement('h1');
const newP = document.createElement('p');
newH1.innerText = 'page 2';
newP.innerText = 'This is page 2';
newDiv.appendChild(newH1);
newDiv.appendChild(newP);
document.body.appendChild(newDiv);
    
newDiv.style.backgroundColor = '#f0f0f0';
newDiv.style.padding = '20px';
newDiv.style.borderRadius = '10px';

newH1.style.color = '#333';
newH1.style.fontSize = '24px';

newP.style.color = '#333';
newP.style.fontSize = '16px';
});
