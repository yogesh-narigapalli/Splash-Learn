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
//on shuffle button clicked
function shuffleClicked() {
    this.updatedArray = [];
    this.updatedArray = shuffle(imagesArray);
    onLoad();
}
//on shuffle function execution
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//on document load
function onLoad() {

    count++;
    if (count >= 2) {
        document.getElementsByClassName('box')[0].remove();
    }

    var imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'box')

    for (let i = 0; i < imagesArray.length; i++) {
        //access to container
        var element = document.getElementById("container");
        //creat div element with class flip_card
        var flip_card = document.createElement("div");
        flip_card.setAttribute("class", "flip-card");
        //creat div element with class flip_card_inner
        var flip_card_inner = document.createElement("div");
        flip_card_inner.setAttribute("class", "flip-card-inner");
        //append flip_card_inner to flip_card
        flip_card.appendChild(flip_card_inner);
        //creat div with class flip_card_front
        var flip_card_front = document.createElement("div");
        flip_card_front.setAttribute("class", "flip-card-front");
        //append flip_card_front to flip_card_inner
        flip_card_inner.appendChild(flip_card_front);
        //create img tag with id,src and alt
        var finalImage = document.createElement("img");
        finalImage.setAttribute("id", i);
        finalImage.setAttribute("src", updatedArray[i]);
        finalImage.setAttribute("alt", "image");
        //append img to flip_card_front
        flip_card_front.appendChild(finalImage);
        //create div for the flip_card_back
        var flip_card_back = document.createElement("div");
        flip_card_back.setAttribute("class", "flip-card-back");
        //append to flip_card_inner
        flip_card_inner.appendChild(flip_card_back);
        //create p element for text and append to flip_card_back
        var p_element = document.createElement("p");
        var back_text = document.createTextNode("Splash Images");
        p_element.appendChild(back_text);
        flip_card_back.appendChild(p_element);
        //create delete button and append
        var backButton = document.createElement("button");
        backButton.setAttribute("id", "deleteButton");
        backButton.innerHTML = "Delete";
        flip_card_back.appendChild(backButton);
        imageContainer.appendChild(flip_card);
        element.appendChild(imageContainer);
        //delete button functionaity
        backButton.onclick = function () {
            updatedArray.splice(i, 1);
            onLoad();
        };

    }


}
