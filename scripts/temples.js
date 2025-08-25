BeforeUnloadEvent = function(event) {
    event = event || window.event;

    // For IE and Firefox prior to version 4
    if (event) {
        event.returnValue = 'Are you sure you want to leave?';
    }

    // For Safari
    return 'Are you sure you want to leave?';
}