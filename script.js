document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
  });

  const hoverableElements = document.querySelectorAll('.hoverable');
  
  hoverableElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
          cursor.classList.add('expand-cursor');
      });

      element.addEventListener('mouseleave', () => {
          cursor.classList.remove('expand-cursor');
      });
  });
});
