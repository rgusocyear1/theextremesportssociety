function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }


 //map
 
  function initMap() {
      var location = {lat: 56.948, lng: -3.406};
      var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4, 
      center: location
      });
      var marker = new google.maps.Marker ( {
      position: location, 
      label: {text: 'Cairngorms'},
      map: map
      })
      }
