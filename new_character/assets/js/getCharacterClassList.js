loadJSON("assets/json/classes.json",function(response){ // Get the JSON file
    json = JSON.parse(response); // Parse JSON as JavaScript

    var imageContainer = document.getElementById("classes") // Cache dropdown.

    json["classes"].forEach(function(classes){ // Loop trough array

    var option = document.createElement("core-item"), // Create core-item tag
        image = document.createElement("img");
        image.setAttribute("src","assets/images/char-classes/"+classes['name']+".jpg");

        option.appendChild(image);


        imageContainer.appendChild(option);

    });

    // After the loop completes do...



    });