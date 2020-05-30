var imagesArray = ["https://picsum.photos/id/1015/200/200",
    "https://picsum.photos/id/1004/200/200",
    "https://picsum.photos/id/0/200/200",
    "https://picsum.photos/id/1018/200/200",
    "https://picsum.photos/id/103/200/200",
    "https://picsum.photos/id/1036/200/200",
    "https://picsum.photos/id/1038/200/200",
    "https://picsum.photos/id/1057/200/200",
    "https://picsum.photos/id/1059/200/200",
    "https://picsum.photos/id/106/200/200",
    "https://picsum.photos/id/1069/200/200",
    "https://picsum.photos/id/1072/200/200",
    "https://picsum.photos/id/1079/200/200",
    "https://picsum.photos/id/1081/200/200",
    "https://picsum.photos/id/11/200/200",
    "https://picsum.photos/id/111/200/200",
    "https://picsum.photos/id/117/200/200",
    "https://picsum.photos/id/122/200/200",
    "https://picsum.photos/id/123/200/200",
    "https://picsum.photos/id/124/200/200",
    "https://picsum.photos/id/125/200/200",
    "https://picsum.photos/id/140/200/200",
    "https://picsum.photos/id/127/200/200"]

var updatedArray = imagesArray;
var count = 0;

function shuffleClicked() {
    console.log("shuffled");
    this.updatedArray = [];
    this.updatedArray = shuffle(imagesArray);

    onLoad();
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];

    }
    return array;
}
function onLoad() {

    count++;
    if (count >= 2) {
        document.getElementsByClassName('box')[0].remove();
    }

    var imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'box')

    for (let i = 0; i < imagesArray.length; i++) {
        var element = document.getElementById("container");
        var flip_card = document.createElement("div");
        flip_card.setAttribute("class", "flip-card");
        var flip_card_inner = document.createElement("div");
        flip_card_inner.setAttribute("class", "flip-card-inner");
        flip_card.appendChild(flip_card_inner);
        var flip_card_front = document.createElement("div");
        flip_card_front.setAttribute("class", "flip-card-front");
        flip_card_inner.appendChild(flip_card_front);

        var finalImage = document.createElement("img");
        finalImage.setAttribute("id", i);
        finalImage.setAttribute("src", "./assets/placeholder.png");

        finalImage.setAttribute("alt", "image");
        flip_card_front.appendChild(finalImage);

        finalImage.setAttribute("src", updatedArray[i]);



        var flip_card_back = document.createElement("div");
        flip_card_back.setAttribute("class", "flip-card-back");

        flip_card_inner.appendChild(flip_card_back);
        var h = document.createElement("p");
        var t = document.createTextNode("Splash Images");
        h.appendChild(t);
        flip_card_back.appendChild(h);

        var backButton = document.createElement("button");
        backButton.setAttribute("id", "deleteButton");
        backButton.innerHTML = "Delete";

        flip_card_back.appendChild(backButton);


        imageContainer.appendChild(flip_card);
        element.appendChild(imageContainer);




        backButton.onclick = function () {
            updatedArray.splice(i, 1);
            onLoad();
        };

    }


}
