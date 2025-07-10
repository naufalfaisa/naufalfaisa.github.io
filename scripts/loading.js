class LoadingScreen {
  constructor() {
    this.progress = 0;
    this.progressBar = document.querySelector('.progress');
    this.loadingText = document.querySelector('.loading-text');
    this.loadingMessages = [
      "Menyiapkan profil...",
      "Memuat video latar...",
      "Menyiapkan tautan...",
      "Hampir selesai..."
    ];
    
    this.init();
  }

  init() {
    this.preloadAssets();
    this.startLoading();
  }

  preloadAssets() {
    // Preload critical assets
    const loadingGif = new Image();
    loadingGif.src = 'assets/image/loading.gif';
    
    const video = document.getElementById('bg-video');
    video.load();
  }

  startLoading() {
    const loadingInterval = setInterval(() => {
      this.progress += Math.random() * 15;
      this.progress = Math.min(this.progress, 100);
      this.progressBar.style.width = `${this.progress}%`;
      
      this.updateLoadingMessage();
      
      if (this.progress >= 100) {
        clearInterval(loadingInterval);
        this.completeLoading();
      }
    }, 300);
  }

  updateLoadingMessage() {
    if (this.progress < 25) {
      this.loadingText.textContent = this.loadingMessages[0];
    } else if (this.progress < 50) {
      this.loadingText.textContent = this.loadingMessages[1];
    } else if (this.progress < 75) {
      this.loadingText.textContent = this.loadingMessages[2];
    } else {
      this.loadingText.textContent = this.loadingMessages[3];
    }
  }

  completeLoading() {
    document.body.classList.add('loaded');
    setTimeout(() => {
      document.getElementById('anime-loading').style.display = 'none';
    }, 800);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new LoadingScreen();
});