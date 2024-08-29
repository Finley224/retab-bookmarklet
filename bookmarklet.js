javascript: (() => {
    /* Check for updates */
    updateCheck = true;
    serverVersion = "null";
    version = "0.3";
    channel = "mainChannelVersion";
    if (updateCheck) {
    fetch("https://raw.githubusercontent.com/Finley224/retab-bookmarklet/main/version.json", { method: "GET" }).then((response) => response.json()).then(
        (json) => { if (json[channel] != version) 
            {
                alert("Bookmark is out of date, visit https://github.com/Finley224/retab-bookmarklet to get the latest version. Current channel is " + channel + ". Current Version is " + version + ". Server version is " + serverVersion + ".");
            } 
        }
    );
    }

    /* Run the script from github */
    fetch("https://raw.githubusercontent.com/Finley224/retab-bookmarklet/main/main.js", { method: "GET" }).then((response) => response.text()).then((text) => window.eval(text));
})();