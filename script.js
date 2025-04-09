let draggedElement = null;

document.querySelectorAll(".image").forEach((div) => {
  // Start dragging
  div.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
  });

  // Allow drop
  div.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  // Handle drop and swap background images
  div.addEventListener("drop", (e) => {
    e.preventDefault();

    if (draggedElement && draggedElement !== e.target) {
      const draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
      const targetBg = window.getComputedStyle(e.target).backgroundImage;

      // Swap background images
      draggedElement.style.backgroundImage = targetBg;
      e.target.style.backgroundImage = draggedBg;
    }
  });
});
