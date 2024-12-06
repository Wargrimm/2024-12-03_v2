let currentMeme = new Meme();
let editorRootSvg = undefined;

function loadEditor(params) {
  editorRootSvg = document.querySelector("#wrapper svg");
  console.log(params);
  loadEditorEvent();
  promiseImage.then((arrayImages) => {
    loadSelectImagesInForm(arrayImages);
  });
  updateForm();
  updateSVG();
}
function treatInputStringEventChange(evt) {
  currentMeme[evt.target.name] = evt.target.value;
  updateSVG(currentMeme, editorRootSvg);
}
function treatInputNumberEventChange(evt) {
  currentMeme[evt.target.name] = parseInt(evt.target.value);
  updateSVG(currentMeme, editorRootSvg);
}
function treatCheckEventChange(evt) {
  currentMeme[evt.target.name] = evt.target.checked;
  updateSVG(currentMeme, editorRootSvg);
}
function loadEditorEvent() {
  document.forms["editor-form"].addEventListener("submit", function (evt) {
    evt.preventDefault();
    currentMeme.save();
  });
  document.forms["editor-form"]["text"].addEventListener(
    "input",
    treatInputStringEventChange
  );
  document.forms["editor-form"]["imageId"].addEventListener(
    "change",
    treatInputNumberEventChange
  );
  document.forms["editor-form"]["x"].addEventListener(
    "change",
    treatInputNumberEventChange
  );
  document.forms["editor-form"]["y"].addEventListener(
    "change",
    treatInputNumberEventChange
  );
  document.forms["editor-form"]["color"].addEventListener(
    "change",
    treatInputStringEventChange
  );
  document.forms["editor-form"]["fontSize"].addEventListener(
    "change",
    treatInputNumberEventChange
  );
  document.forms["editor-form"]["fontWeight"].addEventListener(
    "change",
    treatInputStringEventChange
  );
  document.forms["editor-form"]["underline"].addEventListener(
    "change",
    treatCheckEventChange
  );
  document.forms["editor-form"]["italic"].addEventListener(
    "change",
    treatCheckEventChange
  );
}
/**
 *
 * @param {Images} images
 */
const loadSelectImagesInForm = (images) => {
  const select = document.forms["editor-form"]["imageId"];
  const optionBase = select.children[0];
  select.innerHTML = "";
  select.appendChild(optionBase);
  images.forEach((image) => {
    const optionClone = optionBase.cloneNode(true);
    optionClone.value = image.id;
    optionClone.innerHTML = image.name;
    select.appendChild(optionClone);
  });
  // debugger;
};

const updateSVG = (meme, svgRootNode) => {
  const img = images.find((i) => i.id === meme.imageId);
  // 1-viewBow à faire dans SVG
  svgRootNode.setAttribute(
    "viewBox",
    `0 0 ${undefined !== img ? img.w : 500} ${undefined !== img ? img.h : 500}`
  );
  svgRootNode.innerHTML = "";

  // 2-sélection à partir de svgRootNode
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.innerHTML = meme.text;

  // 3-texte.setAttributes(x,meme.x, y, y,meme.y, ...)
  text.setAttribute("x", meme.x);
  text.setAttribute("y", meme.y);
  text.setAttribute("font-weight", meme.fontWeight);
  text.setAttribute("font-size", meme.fontSize);
  text.setAttribute("fill", meme.color);
  text.setAttribute("text-decoration", meme.underline ? "underline" : "none");
  text.setAttribute("font-style", meme.italic ? "italic" : "normal");

  svgRootNode.appendChild(text);

  if (undefined !== img) {
    const image = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "image"
    );
    image.setAttribute("x", 0);
    image.setAttribute("y", 0);
    image.setAttributeNS("http://www.w3.org/1999/xlink", "href", img.url);
    svgRootNode.insertBefore(image, text);
  }
};

const updateForm = () => {
  document.forms["editor-form"]["text"].value = meme.text;
  document.forms["editor-form"]["x"].value = meme.x;
  document.forms["editor-form"]["y"].value = meme.y;
  document.forms["editor-form"]["color"].value = meme.color;
  document.forms["editor-form"]["imageId"].value = meme.imageId;
  document.forms["editor-form"]["fontWeight"].value = meme.fontWeight;
  document.forms["editor-form"]["fontSize"].value = meme.fontSize;
  document.forms["editor-form"]["italic"].value = meme.italic;
  document.forms["editor-form"]["underline"].value = meme.underline;
}

// const updateSVG() => {}