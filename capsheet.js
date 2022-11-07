function giftgen(){
    var n = document.getElementById("num").value;
    for(let i=1;i<=n;i++){
        const parent1=document.getElementById("output");
        const myImage = new Image(100, 200);
        myImage.src = "giftbox.PNG";
        // myImage.setAttribute("class","gift");
        parent1.appendChild(myImage);

        }
}