function loadEditor(params) {
  console.log(params);
  loadEditorEvent();
}

function loadEditorEvent() {
  console.log(router.getCurrentRoute())
  document.forms["editor-form"].addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log("form submit");
  });
}