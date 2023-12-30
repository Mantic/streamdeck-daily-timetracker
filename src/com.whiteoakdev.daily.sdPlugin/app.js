/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const log = new Action('com.whiteoakdev.daily.log');
const logEntry = new Action('com.whiteoakdev.daily.logentry');

/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
	console.log('Stream Deck connected!');
});

log.onKeyDown(({ action, context, device, event, payload }) => {
	console.log('Log: keyDown',
	{	action:action, 
		context:context,
		device:device,
		event:event,
		payload:payload,
		state: payload.state
	});
});

log.onKeyUp(({ action, context, device, event, payload }) => {
	console.log('Log: keyUp',
	{	action:action, 
		context:context,
		device:device,
		event:event,
		payload:payload,
		state: payload.state
	});
	$SD.showOk(context);
	// $SD.getGlobalSettings()
	// $SD.getSettings(context)
});

logEntry.onKeyDown(({ action, context, device, event, payload }) => {
	console.log('Log Entry: keyDown',
	{	action:action, 
		context:context,
		device:device,
		event:event,
		payload:payload,
		state: payload.state
	});
})

logEntry.onKeyUp(({ action, context, device, event, payload }) => {
	console.log('Log Entry: keyUp',
	{	action:action, 
		context:context,
		device:device,
		event:event,
		payload:payload,
		state: payload.state
	});
	// $SD.getGlobalSettings()
	// $SD.getSettings(context)
});


$SD.onDidReceiveGlobalSettings((settings) => {
	console.log("Did receive global settings: ", settings);
})

$SD.onDidReceiveSettings('com.whiteoakdev.daily.log', (settings) => {
	console.log("Did receive settings: ", settings);
})