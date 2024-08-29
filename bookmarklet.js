javascript: (() => {
    // Insert the title protect script if it does not exist
    if (!document.getElementById('titleprotect')) {
        script = document.createElement('script');
        script.setAttribute('src',"https://raw.githubusercontent.com/Finley224/retab-bookmarklet/main/protecttitle.js");
        script.setAttribute('id',"titleprotect");
        // Append the script to the body of the HTML Doc
        document.body.appendChild(script);
    }

    setTabName();

  })();