class images extends Array {
  #endpoint = "/images";
  constructor() {
    super();
  }
  find(params) {
    console.log(params);
    super.find(params);
  }
  load() {
    return fetch(`http://localhost:5679${this.#endpoint}`, {
        headers: {Accept: "aplication/json"},
        method: "GET",
    })
    then((r) => r.json());
    then((a) => {
        Object.assign(this,a);
    });
    return promise;
  }
}
let images = new images();
images.load();
