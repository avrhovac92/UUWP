$(document).ready(() => {
    var timerInterval = 40, // rotate every X ms 
        degPerInt = 2, // rotate X degree per interval
        target = $('#image'), // which element?
        degrees = 0,
        active = false,
        firststart = false,
        easefirststart = false;

    var doRotation = () => {
        if (active === true) {
            if (degrees > 359) {
                degrees = 0; // 360 degrees closes the circle
            } else {
                degrees += degPerInt; // add degree-per-interval to rotation
            }

            setRotation(degrees);
        }
    }

    var setRotation = (deg) => {
        target.css({ // rotate element via css
            'transform': 'rotate(' + deg + 'deg)'
        });
    }

    var easeBack = () => {
        if (active === false) {
            degrees = (8 * degrees) / 9;
            setRotation(degrees);
        }
    }
    target.hover(
        () => {
            active = true; // activate rotation on every hover
            // only start a timer on first hover
            if (firststart === false) {
                myintv = setInterval(doRotation, timerInterval);
            }
            firststart = true; // we have hovered before
        },
        () => {
            active = false;
            if (easefirststart == false)
                setInterval(easeBack, timerInterval);
            easefirststart = true;
            if (degrees < 1) {
                degrees = 0;
            }
        }
    );
});