document.addEventListener('deviceready', .onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("backbutton", function (e) {
        e.preventDefault(); 
    navigator.notification.confirm("Are you sure want to exit from App?", onConfirmExit, "Confirmation", "Yes,No");
    }, false );
}
 
function onConfirmExit(button) {
    if(button==2){ //If User select a No, then return back;
        return;
    }else{
        navigator.app.exitApp(); // If user select a Yes, quit from the app.
    }
}