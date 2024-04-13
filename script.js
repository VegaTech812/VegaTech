document.addEventListener('DOMContentLoaded', function () {
    const particleContainer = document.getElementById('particles');
    const particleCount = 250;

    setTimeout(() => {
      for (let i = 0; i < particleCount; i++) {
        createParticle();
      }
    });
  
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particleContainer.appendChild(particle);
  
      const size = Math.random() * 1 + 1;
      const duration = Math.random() * 2 + 2;
  
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.backgroundColor = 'white';
      particle.style.borderRadius = '200%';
      particle.style.position = 'absolute';
      particle.style.opacity = 0;
      particle.style.zIndex = -100
  
      const initialLeft = Math.random() * 100 + '%';
      const initialTop = Math.random() * 100 + '%';
  
      particle.style.left = initialLeft;
      particle.style.top = initialTop;
  
      animateParticle(particle, duration);
    }
  
    function animateParticle(particle, duration) {
      let startTime;
  
      function animate(time) {
        if (!startTime) {
          startTime = time;
        }
  
        const progress = (time - startTime) / (duration * 1000);
        
        if(progress<0.25){
            particle.style.opacity = progress*4
        }

        if (progress < 1) {
          const newX = progress * 0.1 + parseFloat(particle.style.left);
          const newY = progress * 0.1 + parseFloat(particle.style.top);
  
          particle.style.left = newX + '%';
          particle.style.top = newY + 'vh';
            
          if(progress > 0.75){
            particle.style.opacity = 1 - progress;
          }
  
          requestAnimationFrame(animate);
        } else {
          particle.remove();
          createParticle();
        }
      }
  
      requestAnimationFrame(animate);
    }
  });
  