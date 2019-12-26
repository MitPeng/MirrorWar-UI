"use strict";
function ShowScore(event) {
    $.Msg("Hero : ", event.hero_name, " score : ", event.hero_score);
    $("#hero_name").text = event.hero_name;
    $("#hero_score").text = event.hero_score;
}

(function () {
    GameEvents.Subscribe("show_score", ShowScore);
})();