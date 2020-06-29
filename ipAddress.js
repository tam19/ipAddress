$(document).ready(function () {
	
var $table = $('<table/>');
  $.getJSON( "ipAddress.json", function(ipAddressObj) {
    $table.append( '<tr><td class="header">Connector</td><td class="header">Region</td><td class="header">outboundip</td><td class="header">virtualip</td></tr>' );
  $.each(ipAddressObj, function(key, value) {
	  var header1 = key;
   //$table.append( '<tr><td rowspan="3">' +  key + '</td>'  );
   $.each(value, function(key1, value1) {
		var header2 = key1;
		$table.append( '<tr><td>' +  key + '</td><td>'+ key1 + '</td><td>'+ value1.outboundip + '</td><td>'+ value1.virtualip + '</td></tr>');
 });
  });  
 $('#demo').append($table);
 }); 
});

