titleProtect = "titleProtectBlankRep";

/* Insert the title protect script if it does not exist */
if (!document.getElementById('titleprotect')) {
    script = document.createElement('script');
    script.setAttribute('id', "titleprotect");
    /* decode the script and set innerHTML to it*/
    script.innerHTML = atob(titleProtect);
    /* Append the script to the body of the HTML Doc */
    document.head.appendChild(script);
}

/* Check if the tab name is saved, if it is saved, offer the user to set it, if not, have the user enter a new */
if (typeof window.sessionStorage.tabName != "undefined" ) {
    sessionTitle = window.sessionStorage.tabName;
    if (confirm(`Would you like to set the title to "${sessionTitle}"? \nPress cancel to set a custom tab name`)) {
        newTitle = sessionTitle;
    } else {
        newTitle = prompt("Enter Tab Title:");
    }

} else {
    newTitle = prompt("Enter Tab Title:");
}

/* Save the title to session storage */
window.sessionStorage.tabName = newTitle;

/* Update the title */
document.title = newTitle;