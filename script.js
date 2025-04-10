let draggedElement = null;

document.querySelectorAll(".image").forEach((div) => {
  const img = div.querySelector("img");

  // Start dragging
  img.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
  });

  // Allow drop on the container div
  div.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  // Handle drop and swap image sources
  div.addEventListener("drop", (e) => {
    e.preventDefault();

    const targetImg = div.querySelector("img");

    if (draggedElement && draggedElement !== targetImg) {
      // Swap the src attributes of dragged and target images
      const tempSrc = draggedElement.src;
      draggedElement.src = targetImg.src;
      targetImg.src = tempSrc;
    }
  });
});
