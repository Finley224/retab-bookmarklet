changeDetect = new MutationObserver(function() {
        if (typeof window.sessionStorage.tabName != "undefined") {    
            if (document.title != window.sessionStorage.tabName) {
                document.title = window.sessionStorage.tabName;
                console.log("TitleProtect: Protected Title from changes")
       }
    }
});
changeDetect.observe(document.querySelector('title'), {attributes: true, childList: true, subtree: true, characterData: true});