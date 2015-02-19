function bubbleTextChange() {
    var maxLength = 140;
    var lengthLeft = maxLength - $.newBubbleText.value.length;
    Ti.API.info( $.newBubbleText.value.length);
    var warningLength = maxLength * 0.1;  //warningLength=14
    $.characterCount.setText(L('remainingChars') + ": "+ lengthLeft);
    if (lengthLeft <= warningLength) {
        $.characterCount.setColor("#FF0000");
    } else if (lengthLeft > warningLength) {
        $.characterCount.setColor("#FFFFFF");
    }
}