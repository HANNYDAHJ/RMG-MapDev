

// Zoom In and out Buttons 
function zoomin(){
    let myImg = document.getElementById("map");
    let currWidth = myImg.clientWidth;

    myImg.style.width = (currWidth + 100) + "px";
}
function zoomout(){
    let myImg = document.getElementById("map");
    let currWidth = myImg.clientWidth;
    if(currWidth == 100) return false;
    else{
        myImg.style.width = (currWidth - 100) + "px";
    }
}
// finish zoom in and out buttons