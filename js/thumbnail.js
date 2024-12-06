import { updateSVG } from "./commonsSvgFunctions.js";
 
export const loadThumbnail = () => {
  const viewer = document.querySelector("#wrapper .thumbnail-viewer");
  const thumbnail = document.querySelector("#thumbnail");
  thumbnail.innerHTML = "";
  //pour chaque meme
  const newViewer = viewer.cloneNode(true);
  updateSVG(m, newViewer.querySelector("svg"));
 
  thumbnail.appendChild(newViewer);
};
 