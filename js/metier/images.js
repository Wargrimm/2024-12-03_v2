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
    const promise = fetch().then((r) => r.json());

    promise.then((a) => {});

    return promise;
  }
}
let images = new images();
images.load();
