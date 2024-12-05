class Meme{
    id = undefined;
    text = "undefined"
    x = 0;
    y = 10;
    fontSize = 10;
    fontWeight = 500;
    underline = false;
    italic = false;
    color = "#FFFFFF";
    imageId= -1;
    #endpoint='/memes';
    constructor() {
        console.log("constructeur de meme")
    }
    save() {
        console.log("save at"+this.#endpoint, this);
        this.publicSave;
        this.privateSave;
    }
    publicSave() {
        console.log('public save');
    }
    privateSave() {
        console.log('private save');
    }
}
let meme = new Meme();
meme.save();