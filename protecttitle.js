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