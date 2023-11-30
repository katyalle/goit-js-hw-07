import { galleryItems } from "./gallery-items.js";


const galleryContainer = document.getElementById("galleryContainer");


const galleryHTML = galleryItems
  .map(
    (item) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
      </li>
    `
  )
  .join("");

galleryContainer.innerHTML = galleryHTML;


const gallery = new SimpleLightbox(".gallery a",
 { captionsData: 'alt',
  optionPosition: 'bottom',
captionDelay: 250,});
