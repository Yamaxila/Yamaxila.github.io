/*
*
* 14.04.2020
*
* Author @yamaxila
*
* For own website
*
* */

let words = ['Developer', 'Cool⠀guy!', '♥⠀Java', 'Need⠀coffee!', 'Find⠀her: @voronova_v47', '♥⠀Vika)', 'It\'s⠀just⠀a⠀moment', 'Now!'];

let word = words[Math.floor(rnd(0, words.length-1))];
let symbs = word.split('');

let nickname = "Yamaxila";
let symbs_n = nickname.split('');

function rnd(min, max) {
    return Math.random() * (max - min) + min;
}

function load(i) {
    let el = document.getElementById('nickname_modify');
    let el2 = document.getElementById('desc_modify');

    if(symbs.length > i)
        el2.innerText += symbs[i];

    if(symbs_n.length > i)
        el.innerText += symbs_n[i];

    i++;
    setTimeout(load,300 - (10 * i), i);


}

function copy(id) {

    let copyText = document.getElementById(id);

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");
}
