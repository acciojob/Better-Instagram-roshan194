let draggedElement = null;

document.querySelectorAll(".image").forEach(item => {
  item.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
  });

  item.addEventListener("dragover", (e) => {
    e.preventDefault(); // Necessary to allow drop
  });

  item.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedElement && draggedElement !== e.target) {
      // Swap the background images
      let tempBackground = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = tempBackground;
    }
  });
});
