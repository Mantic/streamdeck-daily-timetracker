/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const myAction = new Action('com.whiteoakdev.daily.action');

/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
	console.log('Stream Deck connected!');
});

myAction.onKeyUp(({ action, context, device, event, payload }) => {
	console.log('Your key code goes here!', 
	{	action:action, 
		context:context,
		device:device,
		event:event,
		payload:payload
	});
	$SD.showOk(context);

	$SD.getGlobalSettings()
	$SD.getSettings(context)
});

myAction.onDialRotate(({ action, context, device, event, payload }) => {
	console.log('Your dial code goes here!');
});

$SD.onDidReceiveGlobalSettings((settings) => {
	console.log("Did receive global settings: ", settings);
})

$SD.onDidReceiveSettings('com.whiteoakdev.daily.action', (settings) => {
	console.log("Did receive settings: ", settings);
})