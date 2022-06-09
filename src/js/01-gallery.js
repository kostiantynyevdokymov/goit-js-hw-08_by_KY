
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const gallery = document.querySelector('.gallery');
function createGalleryImg(galleryItems) {
    const galleryItemsMarkUp = galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
    `;
        })
        .join("");
    return galleryItemsMarkUp;
    }
gallery.innerHTML = createGalleryImg(galleryItems);
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData:`alt`});

console.log(galleryItems);



// const galleryCont = document.querySelector("div.gallery");
// const galleryMarkUp = createGalleryImg(galleryItems);

// galleryCont.insertAdjacentHTML("beforeend", galleryMarkUp);

// function createGalleryImg(galleryItems) {
//     return galleryItems
//         .map(({ preview, original, description }) => {
//         return `
//         <div class="gallery__item">
//     <a class="gallery__link" href="${original}">
//         <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//         />
//     </a>
//     </div>
//     `;
//         })
//         .join("");
//     }
//     galleryCont.addEventListener("click", openImg)
    
//     function openImg(event) {
//         event.preventDefault();
//         if (!event.target.classList.contains("gallery__image")) {
//             return;
//         }
//         const instance = basicLightbox.create(
//             `<img src="${event.target.dataset.source}" alt="${event.target.dataset.description}">`
//         );
//             instance.show();
//     }