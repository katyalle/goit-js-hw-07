import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");


function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}


gallery.innerHTML = createGalleryMarkup(galleryItems);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.alt}">`);
    instance.show();
  }
});