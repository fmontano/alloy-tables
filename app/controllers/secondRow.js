
var args = arguments[0] || {};
var data = args.data || {};

/// Setting the UI elements
$.rowTitle.text = data.title;
$.rowNumber.text = data.number;

/// You can add the event listener to each row
function rowClicked(e){
	alert('You clicked on row: '+data.number);
}
