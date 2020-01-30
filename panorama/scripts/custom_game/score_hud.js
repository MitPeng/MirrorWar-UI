"use strict";
function ShowScore(event) {
    // $("#hero_name").text = event.hero_name;
    // $("#hero_score").text = event.hero_score;
    $("#good_team").text = event.good_team;
    $("#good_score").text = event.good_score;
    $("#bad_team").text = event.bad_team;
    $("#bad_score").text = event.bad_score;
}

(function () {
    GameEvents.Subscribe("show_score", ShowScore);
})();