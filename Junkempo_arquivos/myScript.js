function scrollToID(myID) {

    myID = '#' + myID;

    var y = $(myID).offset().top + $('#frameParallax').scrollTop();

        $('#frameParallax').animate({
            scrollTop: y - 50
        }, 800);
}

$(document).ready(function () {

    
});

