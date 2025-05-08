import { Cat } from "./types.js";

export function appendImages(images: Cat[]) {
  const catList = document.querySelector("#cat-list");

  images.forEach((items) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = items.url;
    img.height = 200;
    li.appendChild(img);
    catList?.appendChild(li);
  });
}
