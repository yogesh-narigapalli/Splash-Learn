var imagesArray=["https://picsum.photos/id/1015/200/200",
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
var count =0;

function shuffleClicked(){
    console.log("shuffled");
    this.updatedArray=[];
    //   console.log(shuffle(imagesArray));
      this.updatedArray= shuffle(imagesArray);
      
      onLoad();
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        
  }
  return array;
}
function onLoad(){
    // count +=count+1;
    // console.log(count);
    // if(count>0){
    //     document.getElementById("f1_container").remove();
    // }
    
   

    for(let i=0;i<imagesArray.length;i++){
    var element = document.getElementById("container");
    var f1_container = document.createElement("div");
    f1_container.setAttribute("id", "f1_container");
    element.appendChild(f1_container);
    var f1_card = document.createElement("div");
    f1_card.setAttribute("id", "f1_card");
    f1_container.appendChild(f1_card);
    var front = document.createElement("div");
    front.setAttribute("class", "face");
    f1_card.appendChild(front);
    
    var finalImage= document.createElement("img");
    finalImage.setAttribute("id",i);
    finalImage.setAttribute("src",updatedArray[i]);
    finalImage.setAttribute("alt","image");
    front.appendChild(finalImage);


    var backContent = document.createElement("div");
    backContent.setAttribute("class", "back");
    backContent.setAttribute("class", "face");
    backContent.setAttribute("class", "center");
    f1_card.appendChild(backContent);


    var backText = document.createElement("p");
    var text = document.createTextNode("SplashLearn");
    backText.appendChild(text);
    backContent.appendChild(backText);


    var backButton = document.createElement("button");
    var buttonInside = document.createElement("i");
    buttonInside.setAttribute("class", "fa");
    buttonInside.setAttribute("class", "fa-trash");
    backButton.appendChild(buttonInside);
    backContent.appendChild(backButton);

        
    
    }
    
    
}