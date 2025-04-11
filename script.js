// 获取DOM元素
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const counterElement = document.getElementById('counter');
const statusMessage = document.getElementById('status-message');
let count = 0;

// 更新计数和状态信息
function updateCounter() {
    counterElement.textContent = count;
    statusMessage.textContent = `计数: ${count}`;
    
  switch (true) {
    case count < 0:
        document.body.style.backgroundColor = 'pink';
        document.body.style.color = 'pink';
        document.getElementById("status-message").style.color = 'pink';
        document.querySelector("h1").style.color = 'pink';
        break;
    case count >= 35:
        document.body.style.backgroundColor = 'violet';
        document.body.style.color = 'violet';
        document.getElementById("status-message").style.color = 'violet';
        document.querySelector("h1").style.color = 'violet';
        break;
    case count >= 30:
        document.body.style.backgroundColor = 'indigo';
        document.body.style.color = 'indigo';
        document.getElementById("status-message").style.color = 'indigo';
        document.querySelector("h1").style.color = 'indigo';
        break;
    case count >= 25:
        document.body.style.backgroundColor = 'blue';
        document.body.style.color = 'blue';
        document.getElementById("status-message").style.color = 'blue';
        document.querySelector("h1").style.color = 'blue';
        break;
    case count >= 20:
        document.body.style.backgroundColor = 'green';
        document.body.style.color = 'green';
        document.getElementById("status-message").style.color = 'green';
        document.querySelector("h1").style.color = 'green';
        break;
    case count >= 15:
        document.body.style.backgroundColor = 'yellow';
        document.body.style.color = 'yellow';
        document.getElementById("status-message").style.color = 'yellow';
        document.querySelector("h1").style.color = 'yellow';
        break;
    case count >= 10:
        document.body.style.backgroundColor = 'orange';
        document.body.style.color = 'orange';
        document.getElementById("status-message").style.color = 'orange';
        document.querySelector("h1").style.color = 'orange';
        break;
    case count >= 5:
        document.body.style.backgroundColor = 'red';
        document.body.style.color = 'red';
        document.getElementById("status-message").style.color = 'red';
        document.querySelector("h1").style.color = 'red';
        break;
    default:
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.getElementById("status-message").style.color = 'black';
        document.querySelector("h1").style.color = 'black';
        break;
}

}

// 增加计数
increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

// 减少计数
decreaseBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

// 初始化
updateCounter();