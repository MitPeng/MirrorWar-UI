"use strict";
function ShowScore(event) {
    $.Msg("Hero : ", event.hero_name, " energy : ", event.hero_energy);
    $("#hero_name").text = event.hero_name;
    $("#hero_energy").text = event.hero_energy;
}

(function () {
    GameEvents.Subscribe("show_score", ShowScore);
})();