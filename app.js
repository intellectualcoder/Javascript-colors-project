let index = 0;

function changeColors(){
    let colors = ["pink", "orange", "yellow", "green", "teal", "blue", "violet", "red"];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if(index > colors.length - 1)
    index = 0;
}
