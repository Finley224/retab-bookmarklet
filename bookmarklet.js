javascript: (() => {
    // Insert the title protect script if it does not exist
    if (!document.getElementById('titleprotect')) {
        script = document.createElement('script');
        script.setAttribute('src',"https://raw.githubusercontent.com/finley224/retab/47b950e73142eaade72637793c4794882a3745aa/protecttitle.js");
        script.setAttribute('id',"titleprotect");
        // Append the script to the body of the HTML Doc
        document.body.appendChild(script);
    }

    setTabName();

  })();