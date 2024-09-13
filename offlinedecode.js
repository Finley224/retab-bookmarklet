const titleProtect = "LyogUnVucyB3aGVuIGEgY2hhbmdlIGlzIGRldGVjdGVkIHRvIHRoZSB0aXRsZSBvZiB0aGUgaHRtbCBwYWdlLCBjaGVja3MgaWYgYSB0aXRsZSBpcyBzdG9yZWQgaW4gc2Vzc2lvbiBzdG9yYWdlLiBJZiBpdCBjYW4gYmUgZm91bmQgaW4gc2Vzc2lvbiBzdG9yYWdlLCBzZXQgdGhlIHRpdGxlIGJhY2sgdG8gc3RvcCB0aGUgd2Vic2l0ZSBmcm9tIG1vZGlmeWluZyBpdC4gKi8KY2hhbmdlRGV0ZWN0ID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oKSB7CiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudGFiTmFtZSAhPSAidW5kZWZpbmVkIikgeyAgICAKICAgICAgICAgICAgaWYgKGRvY3VtZW50LnRpdGxlICE9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50YWJOYW1lKSB7CiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50YWJOYW1lOwogICAgICAgfQogICAgfQp9KTsKCi8qIFN0YXJ0IHdhdGNoaW5nIGZvciBjaGFuZ2VzIHRvIHRoZSB0aXRsZSAqLwpjaGFuZ2VEZXRlY3Qub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpLCB7YXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7";

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