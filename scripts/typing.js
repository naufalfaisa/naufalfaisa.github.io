class TypingEffect {
  constructor() {
    this.text = `> Hi! I'm a beginner developer learning to build creative projects with Python, web, and Telegram bots.`;
    this.typingElement = document.getElementById("typing-text");
    this.index = 0;
    this.init();
  }

  init() {
    // Start typing after loading completes
    window.addEventListener('loadingComplete', () => {
      setTimeout(() => this.type(), 1000);
    });
  }

  type() {
    if (this.index < this.text.length) {
      this.typingElement.textContent += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), 70);
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new TypingEffect();
});