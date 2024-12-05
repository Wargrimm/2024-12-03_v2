let currentMeme = newMeme();

function loadEditor(params) {
  console.log(params);
  loadEditorEvent();
  promiseImage.then((arrayImages) => {
    loadSelectImagesInForm(arrayImages);
  });
}

function loadEditorEvent() {
  console.log(router.getCurrentRoute());
  document.forms["editor-form"].addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log("form submit");
  });
}

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
  debugger;
};

function loadSaisieText() {
  document.forms["editor-text"].addEventListener("input", function (evt) {
    // evt.preventDefault();
    console.log("form submit");
  });
}
