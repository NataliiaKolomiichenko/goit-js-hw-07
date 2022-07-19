import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item"> <a class="gallery__link" href="large-image.jpg"> <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a> </div>`).join('');

galleryEl.insertAdjacentHTML('afterbegin', markup);


galleryEl.addEventListener('click', (event => {
    event.preventDefault()
    const bigImageSrc = event.target.dataset.source;

    const bigImage = basicLightbox.create(`<img src="${bigImageSrc}" width="1280" >`);

    bigImage.show();
}));