javascript: (() => {
    /* Script info vars */
    launcherVersion = "1.0";
    launcherChannel = "mainChannelVersion";

    /* Run the script from github */
    fetch("https://raw.githubusercontent.com/Finley224/retab-bookmarklet/main/main.js", { method: "GET" }).then((response) => response.text()).then((text) => window.eval(text));
})();