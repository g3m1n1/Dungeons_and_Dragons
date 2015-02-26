document.addEventListener('polymer-ready', function() {



    var urlList = {

        // Add navbar items here in the form of name: "what you see in the navbar", link: "The url of the page.", id: pageIdentifier"
        urls: [{
            id: 0,
            name: "Home",
            link: ""
        }, {
            id: 1,
            name: "Login",
            link: "login"
        }, {
            id: 2,
            name: "Register",
            link: "register"
        }, {
            id: 3,
            name: "Characters",
            link: "characters"
        }
        ]
    };

    document.querySelector("#urlTemplate").model = urlList;




    // On page load render the correct page.

    // Url = #page
    var url = window.location.hash;
    //Url becomes page (# is removed.)
    url = url.substr(1);
    // ForEach page in array urlList
    urlList['urls'].forEach(function(urls) {
        // Check if the url is the same as the variable url (without the #)
        if (urls['link'] === url) {
            // Set current page to #page
           navigate(urls['link'],urls['name'],urls['id'])
        }
    });

});


function navigate(url, name, id) {
    window.location.hash = url;
    document.querySelector("#topText").innerHTML = name;
    var p = document.querySelector('#navPages');
    p.selected = id;

}