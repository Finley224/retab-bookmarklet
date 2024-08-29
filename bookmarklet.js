javascript: (() => {
    /* Insert the title protect script if it does not exist */
    if (!document.getElementById('titleprotect')) {
        script = document.createElement('script');
        script.setAttribute('id', "titleprotect");
        /* grab the scirpt and set innerHTML to it, this is needed as CORS prevents using the src tag */
        fetch("https://raw.githubusercontent.com/Finley224/retab-bookmarklet/main/protecttitle.js", { method: "GET" }).then(
            (response) => response.text()
        ).then(
            (text) => script.innerHTML = text
        );
        /* Append the script to the body of the HTML Doc */
        document.head.appendChild(script);
    }

    /* Check for updates */
    version = "0.2"
    channel = "mainChannelVersion"
    fetch("https://raw.githubusercontent.com/Finley224/retab-bookmarklet/main/version.json", { method: "GET" }).then((response) => response.json()).then(
        (json) => { if (json[channel] != version) 
            {
                alert("Bookmark is out of date, vist https://github.com/Finley224/retab-bookmarklet to get the latest version. Current channel is " + channel + ". Current Version is " + version + ".");
            } 
        }
    );
    console.log(serverVersion);

    /* Run the script from github */
    fetch("https://raw.githubusercontent.com/Finley224/retab-bookmarklet/main/settabname.js", { method: "GET" }).then((response) => response.text()).then((text) => eval(text));
})();