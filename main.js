$(document).ready(function () {
    //Get Top Spots data using $.getJSON method
    $.getJSON("data.json", function (data) {
            for (let i = 0; i < data.length; i++) {
                let longitude = data[i].location[0];
                let latitude = data[i].location[1];
                /** Map Data */
                let mapLink = 'https://www.google.com/maps?q=' + longitude + ',' + latitude;
            
            /** This pushes data into a table **/
            let trHtml = "<tr><td>" + data[i].name + "</td><td>" + data[i].description + "</td><td>" + "<a href =" + mapLink + "><button> Open in Google Maps </button></a></td></tr>";
            $(trHtml).appendTo("#topSpots"); 
            console.log(data, longitude, latitude, mapLink);
            } 
    });

})
