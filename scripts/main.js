// Main application controller
document.addEventListener('DOMContentLoaded', () => {
  // Dispatch event when loading is complete
  document.body.addEventListener('animationend', (e) => {
    if (e.animationName === 'fadeIn' && document.body.classList.contains('loaded')) {
      const event = new CustomEvent('loadingComplete');
      window.dispatchEvent(event);
    }
  });

  // Video background handling
  const video = document.getElementById('bg-video');
  video.play().catch(error => {
    console.log('Autoplay prevented, showing fallback:', error);
    // Implement fallback if needed
  });
});