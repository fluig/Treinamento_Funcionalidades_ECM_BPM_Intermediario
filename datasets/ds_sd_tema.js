function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	 var dataset = DatasetBuilder.newDataset();
	    
    dataset.addColumn("Tema");
    
    dataset.addRow(new Array("TI"));
    
    return dataset;

}

function onMobileSync(user) {

}