let errorMesgEl = document.getElementById("errorMesg");
let imageEl = document.getElementById("image");
let imgWidthEl = document.getElementById("imgWidth")
let defaultW = 200;
let minW = 100;
let maxW = 300

let maxWarn = "Too Big Decrease the Size of the Image";
let minWarn = "Can't Visible incrase the size of the image";

imageEl.style.width = defaultW + "px";
imageEl.style.margin = "0 auto 30px"
imgWidthEl.textContent = defaultW + "px";

function decrement(){

    if (defaultW <= minW){
        errorMesgEl.textContent = minWarn ;

    }

    else{
        errorMesgEl.textContent = "";
        defaultW = defaultW - 5;
        let up = defaultW + "px";
        imageEl.style.width = up;
        imgWidthEl.textContent = up;
    }

}

function increment(){
if (defaultW >= maxW){
    errorMesgEl.textContent = maxWarn;

}
else{
    errorMesgEl.textContent = "";
    defaultW = defaultW + 5;
    let up = defaultW + "px";
    imageEl.style.width = up;
    imgWidthEl.textContent = up;
}
}