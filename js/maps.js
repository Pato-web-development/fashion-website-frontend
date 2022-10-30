function theMap(){
var yourlocation={lat:"input a value", lng:"input a value"};
var googlemap=new google.maps.Map(document.getElementById('map'),{zoom:3, center:yourlocation});
var googlemarker=new google.maps.Marker({position:yourlocation, map:googlemap});}