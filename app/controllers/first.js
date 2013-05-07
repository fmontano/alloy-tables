
/// Populating dummy data
var data = [];
for(var i=1; i<=45; i++)
	data.push({title : "Row "+i, number : i});

$.myTable.data = data;
/// Same as 
/// $.myTable.setData(data);


/// You can add the event listener to the table instead of each row
function tableClicked(e){
	/// Making sure we are clicking on a row (because we set the number element on the rows)
	if(e.source.number)
		alert('Clicked on row '+e.source.number);
}
