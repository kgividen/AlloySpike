function start(secCountDown, endTxt){
    if(!secCountDown){
        return;
    }
//    $.countDownWin.open();
    var i = 0;
    var intervalID = setInterval(function () {
        timer = secCountDown - i;
        if(timer < 0){
            $.countDownLabel.text = "";
            $.countdownWin.close();
            clearInterval(intervalID);
        } else if(timer == 0){
            $.countDownLabel.text = endTxt;
        } else {
            $.countDownLabel.text = timer;
        }
        i++;
    }, 1000);
}

exports.start = start;

$.countdownWin.addEventListener('open', function () {
    start(6, "Start!");
});