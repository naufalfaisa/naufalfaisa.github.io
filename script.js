const text = `> Hi! I'm a beginner developer learning to build creative projects with Python, web, and Telegram bots.`;

const typingElement = document.getElementById("typing-text");
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 70); // Kecepatan ketikan (ms)
  }
}

window.onload = () => {
  type();
};
