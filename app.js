function setGrid(cols) {
    const items = document.querySelectorAll('#gallery > div');

    items.forEach(item => {
        item.className = cols === 3 ? "col-md-4" : "col-12";
    });
}

// Modal imagen dinámica
const images = document.querySelectorAll('.img-click');
const modalImg = document.getElementById('modalImg');

images.forEach(img => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
    });
});