var condition = false;

const animateHeader = () => {
    if (condition) {
        $('#header').animate({
            'font-size': '-=30px'
        }, 'slow');
        condition = false;
    } else {
        $('#header').animate({
            'font-size': '+=30px'
        }, 'slow');
        condition = true;

    }
}

const button = document.getElementById("button");
button.onclick = animateHeader;


$(document).ready(() => {
    console.log('document ready')
    //targets item with id=container
    //For this kind of targeting jQuery is required to be included into html file
    //In this case jquery-3.3.1.min.js
    const btn = $('#button');
    // Hover takes two parameters:
    // Function what you're going to do when you hover in with your mouse
    // Function what you're going to do when you hover out with your mouse
    btn.hover(() => {
        console.log('button is hovered in');
        btn.animate({
            'margin-left': '+=200px'
        }, 500);
        $('#funnyText').fadeIn(500);

    }, () => {
        console.log('button is hovered out');
        btn.animate({
            'margin-left': '-=200px'
        }, 500);
        $('#funnyText').fadeOut(500);
    })
});