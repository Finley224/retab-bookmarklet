javascript: (() => {
    // Check if the tab name is saved, if it is saved, offer the user to set it, if not, have the user enter a new title.
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

    // Insert the title protect script if it does not exist
    if (!document.getElementById('titleprotect')) {
        script = document.createElement('script');
        script.setAttribute('src',"https://raw.githubusercontent.com/xavier224/retab/47b950e73142eaade72637793c4794882a3745aa/protecttitle.js");
        script.setAttribute('id',"titleprotect");
        // Append the script to the body of the HTML Doc
        document.body.appendChild(script);
    }

  })();