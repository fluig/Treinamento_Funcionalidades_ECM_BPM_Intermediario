$(document).ready(function(){
	var nota = FLUIGC.stars("#nota_atendimento", {
	    stars: 5,
	    text: ["Fraco", "Pouco Satisfatório", "Satisfatório", "Bom", "Muito bom"],
	    value: $('#nota').val()
	});
	
	// Evento para quando o usuario clicar na nota, o valor será gravado no campo hidden
	nota.on("click", function(obj) {
        var pos = $(this).index();
        $('#nota').val(pos);
    });
});

function setSelectedZoomItem(selectedItem) {
	var obj = selectedItem.inputName;
	
	if(obj == "txt_tema"){
		var inputName = "txt_sub_tema";
		var filterValues = "";
		
		var codTema = selectedItem.Tema;
		
		filterValues += "Tema," + codTema;
		
		reloadZoomFilterValues(inputName, filterValues);
	}
}

function removedZoomItem(removedItem) {
	var obj = removedItem.inputName;
	
	if(obj == "txt_tema"){
		var inputName = "txt_sub_tema";
		var filterValues = "";		
		filterValues += "Tema,";		
		reloadZoomFilterValues(inputName, filterValues);
		window["txt_sub_tema"].clear();
	}
}