/* Informáciu dostaneme v tvare "L9-5-A534". To rozparsujeme na 3 premenné pomocou pomĺčiek:
searchBuilding = "L9"
floor = "5"
searchRoom = "A534"
*/


var yourPosition = "L9A";
var TIME = 5900;

// //YELLOW
// var l9aimg_marker = $(".img-L9A-marker");
//
// //RED
// var bn1img = $(".img-BN1");
// var bn1text = $(".BN1");
// var bn3img = $(".img-BN3");
// var bn3text = $(".BN3");
// var bn32img = $(".img-BN32");
// var bn32text = $(".BN32");
// var bn5img = $(".img-BN5");
// var bn5text = $(".BN5");
// var fu2img = $(".img-FU2");
// var fu2text = $(".FU2");
// var l9aimg = $(".img-L9A");
// var l9atext = $(".L9A");
// var l9bimg = $(".img-L9B");
// var l9btext = $(".L9B");
// var parkoviskoimg = $(".img-Parkovisko-studenti");
// var parkoviskotext = $(".Parkovisko-studenti");
// var pk2img = $(".img-PK2");
// var pk2text = $(".PK2");
// var pk3img = $(".img-PK3");
// var pk3text = $(".PK3");
// var pk4img = $(".img-PK4");
// var pk4text = $(".PK4");
// var pk5img = $(".img-PK5");
// var pk5text = $(".PK5");
// var pk6img = $(".img-PK6");
// var pk6text = $(".PK6");
// var pk7img = $(".img-PK7");
// var pk7text = $(".PK7");
// var pk8img = $(".img-PK8");
// var pk8text = $(".PK8");
// var pk9img = $(".img-PK9");
// var pk9text = $(".PK9");
// var pk10img = $(".img-PK10");
// var pk10text = $(".PK10");
// var pk11img = $(".img-PK11");
// var pk11text = $(".PK11");
// var pk12img = $(".img-PK12");
// var pk12text = $(".PK12");
// var pk13img = $(".img-PK13");
// var pk13text = $(".PK13");
// var pk14img = $(".img-PK14");
// var pk14text = $(".PK14");
// var pk15img = $(".img-PK15");
// var pk15text = $(".PK15");
// var pk19img = $(".img-PK19");
// var pk19text = $(".PK19");
// var techimg = $(".img-TECH");
// var techtext = $(".TECH");
// var ukimg = $(".img-UK");
// var uktext = $(".UK");
// var v4img = $(".img-V4");
// var v4text = $(".V4");
// var w4img = $(".img-W4");
// var w4text = $(".W4");
// var wimg = $(".img-W");
// var wtext = $(".W");

/*
JQuery Selector
var obrazok = $('.L9-img');
/
$('.L9-img').css('názovAtribútu','hodnotaAtribútu');
*/


/*Rozsvieti hľadanú budovu v areáli na červeno.*/
function searchBuilding(building) {
    // $('.img-' + building).css('display', 'block');
    var image = $('.img-' + building);
    var text = $('.' + building);
    // image.style.display = "block";
    image[0].style["display"] = 'block';
    text[0].style["color"] = '#cf4141';
}

/*Rozsvieti hľadanú miestnosť v mape budovy na červeno.*/
function searchRoom(building, floor, room) {
    var actualRoom = $('.img-' + building + '-' + floor + '-' + room);
    var actualText = $('.' + building + '-' + floor + '-' + room);
    // actualRoom.style.display = "block";
    actualRoom[0].style["display"] = "block";
    actualText[0].style["color"] = '#cf4141';
}

/*
1. Zavolaj searchBuilding().
2. Skryje celý areál po TIME sekundách.
3. Zobrazí mi hľadanú budovu.
4. Zavolaj searchRoom().
*/

function search(building, floor, room) {

    searchBuilding(building);
    var arealContainer = $('.areal-container');

    window.setTimeout(function () {
        arealContainer[0].style.display = "none";
        var buildingContainer = $('.' + building + '-' + floor + '-' + 'container');
        buildingContainer[0].style.display = "table";
        searchRoom(building, floor, room);
        // window.setTimeout(function () {
        //     arealContainer[0].style.display = "none";
        // }, TIME);
    }, TIME);
}