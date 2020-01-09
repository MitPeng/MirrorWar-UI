//技能栏处UI修改
var UI = $.GetContextPanel().GetParent().GetParent().FindChildTraverse("center_block");
var StatBranch = UI.FindChildTraverse("StatBranch");
StatBranch.visible = false;
StatBranch.hittest = false;
StatBranch.hittestchildren = false;
var LevelUpTab = UI.FindChildTraverse('LevelUpTab');
LevelUpTab.visible = false;
LevelUpTab.hittest = false;
LevelUpTab.hittestchildren = false;
var talent = UI.FindChildTraverse("LevelUpGlow");
talent.visible = false;
talent.hittest = false;
var LevelUpButton = UI.FindChildTraverse('LevelUpButton');
LevelUpButton.visible = false;
var LevelUpIcon = UI.FindChildTraverse("LevelUpIcon");
LevelUpIcon.visible = false;
var LevelUpBurstFX = UI.FindChildTraverse('LevelUpBurstFX');
LevelUpBurstFX.visible = false;
LevelUpBurstFX.hittest = false;

//商店处UI修改
var UI_2 = $.GetContextPanel().GetParent().GetParent().FindChildTraverse("shop");
var GuideFlyout = UI_2.FindChildTraverse("GuideFlyout")
GuideFlyout.visible = false;
GuideFlyout.hittest = false;
GuideFlyout.hittestchildren = false;
var CommonItems = UI_2.FindChildTraverse("CommonItems")
CommonItems.visible = false;
CommonItems.hittest = false;
CommonItems.hittestchildren = false;
var GridNeutralsTab = UI_2.FindChildTraverse("GridNeutralsTab")
GridNeutralsTab.visible = false;
GridNeutralsTab.hittest = false;
GridNeutralsTab.hittestchildren = false;
var GridNeutralsCategory = UI_2.FindChildTraverse("GridNeutralsCategory")
GridNeutralsCategory.visible = false;
GridNeutralsCategory.hittest = false;
GridNeutralsCategory.hittestchildren = false;
var SearchBox = UI_2.FindChildTraverse("SearchBox")
SearchBox.visible = false;
SearchBox.hittest = false;
SearchBox.hittestchildren = false;
var PopularItems = UI_2.FindChildTraverse("PopularItems")
PopularItems.visible = false;
PopularItems.hittest = false;
PopularItems.hittestchildren = false;

//右下方UI修改
var UI_3 = $.GetContextPanel().GetParent().GetParent().FindChildTraverse("lower_hud");
var courier = UI_3.FindChildTraverse("courier")
courier.visible = false;
courier.hittest = false;
courier.hittestchildren = false;

//左下方小地图UI修改
var UI_4 = $.GetContextPanel().GetParent().GetParent().FindChildTraverse("minimap_container");
var GlyphScanContainer = UI_4.FindChildTraverse("GlyphScanContainer")
GlyphScanContainer.visible = false;
GlyphScanContainer.hittest = false;
GlyphScanContainer.hittestchildren = false;
