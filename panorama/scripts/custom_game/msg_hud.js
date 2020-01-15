var m_MsgSeqId = 0;

function OnMsgBottom(args) {
    var color = args.Color || "#aa000088";
    var sound = args.Sound || "General.CastFail_NoMana";
    var msg = args.Message;

    if (msg == null || msg == "") return;

    m_MsgSeqId++;
    var seqId = m_MsgSeqId;
    //$.Msg(msg)
    Game.EmitSound(sound);
    $("#bottom_msg_label").text = $.Localize(msg);
    $("#bottom_msg_panel").style.transform = 'scale3d(1.2, 1.2, 1.2)'
    $("#bottom_msg_panel").style.backgroundColor = color;
    $("#bottom_msg_panel").style.opacity = 1;

    $.Schedule(0.2, function () {
        if (m_MsgSeqId == seqId)
            $("#bottom_msg_panel").style.transform = 'scale3d(1, 1, 1)'
    })

    $.Schedule(3, function () {
        if (m_MsgSeqId == seqId)
            $("#bottom_msg_panel").style.opacity = 0;
    })
}

function PTaunt() {
    GameEvents.SendCustomGameEventToServer('player_taunt', {})
}

(function () {
    GameEvents.Subscribe('msg_bottom', OnMsgBottom);

    Game.AddCommand('+PTaunt', PTaunt, '', 0)
    Game.AddCommand('-PTaunt', function () { }, '', 0)
})();