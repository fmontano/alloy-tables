
/// Populating dummy data
var data = [];
for(var i=1; i<=45; i++){
	var row = Alloy.createController("secondRow", {
		data : {
			title : "Row number "+i,
			number : i
		}
	});
	data.push(row.getView());
}
	

$.myTable.data = data;
/// Same as 
/// $.myTable.setData(data);
