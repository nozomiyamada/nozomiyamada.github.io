function Clear(){
    target = document.getElementById("inputform");
    target.value = '';
    target.focus(); // move cursor
}

function BS(){
    target = document.getElementById("inputform");
    if (target.value.length > 1 && "ɯ̀ɯ̂ɯ́ɯ̌ɛ̀ɛ̂ɛ́ɛ̌ɔ̀ɔ̂ɔ́ɔ̌ə̀ə̂ə́ə̌ätɕ".indexOf(target.value.slice(-2)) >= 0){
        target.value = target.value.slice(0,-2);
    }else if (target.value.length > 0){
        target.value = target.value.slice(0,-1);
    }
    focusWithoutScrolling(target);
}

function Copy() {
    target = document.getElementById("inputform");
    target.select();
    document.execCommand("Copy");
}

function Click(char){
    target = document.getElementById("inputform");
    target.value += char; // append result
    target.focus({preventScroll:true});
}

function ClickTone(tone){
    target = document.getElementById("inputform");
    finalchar = target.value.slice(-1);
    switch (tone) {
        case 2:
            dic = {"a":"à","i":"ì","ɯ":"ɯ̀","u":"ù","e":"è","ɛ":"ɛ̀","o":"ò","ɔ":"ɔ̀","ə":"ə̀"};
            break;
        case 3:
            dic = {"a":"â","i":"î","ɯ":"ɯ̂","u":"û","e":"ê","ɛ":"ɛ̂","o":"ô","ɔ":"ɔ̂","ə":"ə̂"};
            break;
        case 4:
            dic = {"a":"á","i":"í","ɯ":"ɯ́","u":"ú","e":"é","ɛ":"ɛ́","o":"ó","ɔ":"ɔ́","ə":"ə́"};
            break;
        case 5:
            dic = {"a":"ǎ","i":"ǐ","ɯ":"ɯ̌","u":"ǔ","e":"ě","ɛ":"ɛ̌","o":"ǒ","ɔ":"ɔ̌","ə":"ə̌"};
            break;
    }
    if (dic[finalchar]){
        target.value = (target.value.slice(0,-1) + dic[finalchar]);
    }
    target.focus({preventScroll:true});
}