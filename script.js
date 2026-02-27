function filterGallery(category, event) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.filter-buttons button');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

document.querySelectorAll('.uc-video').forEach(wrapper=>{
  const id = wrapper.dataset.id;
  wrapper.querySelector('.uc-thumb').addEventListener('click', ()=>{
    wrapper.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&controls=1"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen>
      </iframe>`;
  });
});