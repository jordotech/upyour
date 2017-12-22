$(document).ready(function(){
    swapColor();

var windowWidth = $(window).width();
console.log(windowWidth);
numBars = 300;
eachBarWidth = Math.floor(windowWidth / numBars);
console.log(eachBarWidth);
for(x = 0; x < numBars;x++){
    $('#bars').append('<div class="bar">&nbsp;</div>');
}
$('.bar').css({'width':eachBarWidth});

});
var yesAnswers = new Array(
'Find Anything?',
'Better Check Up Your Ass Again',
'Oh Gimme a Break. Look Again.',
'Did You Look Everywhere? (Up Your Ass?)',
'Didn\'t Find Anything?',
'I\'m Sure It\'s In There Somewhere.',
'Still Didn\'t Find Anything?',
'STILL Didn\'t Find Anything?',
'It\'s Probably Up There.',
'Did you check up your ass?'

    );
function lineDrop(){
    setInterval(function(){

        index = getRandomInt(0, 300);
        randy = random();

        $('#bars div').eq(index).css({'background': randy}).animate({
    height: "1000px",
    specialEasing: {height: "easeOutBounce"},
    }, 5000, function() {});
    }, 100);
}
function lotsOfColor(){
        setInterval(function(){
            swapColor();
    }, 100);
}
function swapColor(){
    var rand = random();
    $('body').css({'background':rand})
    var contr = contrast(rand);
    $('.didyou, .didyouslow').css({'color':contr});
    
    var rand2 = random();
    var contr2 = contrast(rand2);
    $('button').css({'color':contr2, 'background':rand2});
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
didYou = new Array('CHECK', 'UP', 'YOUR', 'ASS');
didYouCount = 0;
function didYouSlow(){
    setInterval(function(){
        if(didYouCount == didYou.length){
            $('.didyouslow').html(didYou[0]);
            didYouCount = 1;
        }else{
            $('.didyouslow').html(didYou[didYouCount]);
            didYouCount++;
        }
    }, 500);
}
function random(){
    return '#' + ('000000' + Math.floor(Math.random() * 0xFFFFFF).toString(16)).substr(-6);
}
function contrast(color){ return '#' + 
   (Number('0x'+color.substr(1)).toString(10) > 0xffffff/2 ? '000000' :  'ffffff'); 
}
checkCount = 0;

function checkUpAss(){

    if(checkCount == 10){
lotsOfColor();
    }
    else if(checkCount == 15){
        lineDrop();
    }
    else if(checkCount == 20){
        didYouSlow();
    }
    var answer = yesAnswers[Math.floor(Math.random() * yesAnswers.length)];
        swapColor();  
        $('.didyou').html(answer);

    checkCount++;
}
