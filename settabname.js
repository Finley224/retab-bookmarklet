/* Check if the tab name is saved, if it is saved, offer the user to set it, if not, have the user enter a new */
if (typeof window.sessionStorage.tabName != "undefined" ) {
    sessionTitle = window.sessionStorage.tabName;
    if (confirm(`Would you like to set the title to "${sessionTitle}"? \nCanceling will allow you to put in another name`)) {
        newTitle = sessionTitle;
    } else {
        newTitle = prompt("Enter Tab Title:");
    }

} else {
    newTitle = prompt("Enter Tab Title:");
}

/* Save the title to sesion storage */
window.sessionStorage.tabName = newTitle;

/* Update the title */
document.title = newTitle;