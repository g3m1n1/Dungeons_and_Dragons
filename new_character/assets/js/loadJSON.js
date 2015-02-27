 function loadJSON(file, callback){ // Create a function to load files with AJAX
    var xobj = new XMLHttpRequest(); // Create a new http request
    xobj.overrideMimeType("application/json"); // Set mime type to JSON
    xobj.open('POST',file,true); // Use post to gather the file asynchronously
    xobj.onreadystatechange = function(){ // If the ready state changes
      if(xobj.readyState == 4 && xobj.status == "200"){ // And if the file was loaded succesfully
        callback(xobj.responseText); // Do whatever you want with the file
      }
    };
    xobj.send(null); // Send the request
  }