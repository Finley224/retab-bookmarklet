// Runs when a change is detected to the title of the html page, checks if a title is stored in session storage. If it can be found in session storage, set the title back to stop the website from modifiying it.
changeDetect = new MutationObserver(function() {
        if (typeof window.sessionStorage.tabName != "undefined") {    
            if (document.title != window.sessionStorage.tabName) {
                document.title = window.sessionStorage.tabName;
       }
    }
});

// Start watching for changes to the title
changeDetect.observe(document.querySelector('title'), {attributes: true, childList: true, subtree: true, characterData: true});

// Check if the tab name is saved, if it is saved, offer the user to set it, if not, have the user enter a new title.
function setTabName() {
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
    
    // Save the title to sesion storage
    window.sessionStorage.tabName = newTitle;

    // Update the title
    document.title = newTitle;
}