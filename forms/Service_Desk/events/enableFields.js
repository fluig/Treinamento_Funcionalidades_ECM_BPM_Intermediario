function enableFields(form){ 
	var ATIV_ATUAL = getValue("WKNumState");
	
	var ATV_INICIO = 4;
	var ATV_ATEND_SOLIC = 21;
	var ATV_AVAL_ATEND = 11;
	
	if(ATIV_ATUAL == ATV_ATEND_SOLIC){
		desabilitarSolic(form);
	}
	
	else if (ATIV_ATUAL == ATV_AVAL_ATEND){
		desabilitarSolic(form);
		desabilitarAtendimento(form);
	}
}

function desabilitarSolic(form){
	form.setEnabled("txt_telefone_ramal", false);
	form.setEnabled("txt_tema", false);
	form.setEnabled("txt_sub_tema", false);
	form.setEnabled("txt_detal_solic", false);
}

function desabilitarAtendimento(form){
	form.setEnabled("solic_valida", false);
	form.setEnabled("txt_justificativa_reprovacao", false);
	form.setEnabled("txt_solucao", false);
}