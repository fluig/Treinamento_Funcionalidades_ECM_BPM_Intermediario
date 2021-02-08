function displayFields(form,customHTML){
	var ATIV_ATUAL = getValue("WKNumState");
	
	var ATV_INICIO = 4;
	var ATV_ATEND_SOLIC = 21;
	var ATV_AVAL_ATEND = 11;
	
	if(ATIV_ATUAL == 0 || ATIV_ATUAL == ATV_INICIO){
		form.setValue("txt_solicitante", getDadosUsuario().getFullName());
		form.setValue("txt_solic_email", getDadosUsuario().getEmail());
		form.setValue("txt_dt_solic", dataAgora());
		
		form.setVisibleById("panelAtendimento", false);
		form.setVisibleById("panelAvaliarAtendimento", false);
	}
	
	else if(ATIV_ATUAL == ATV_ATEND_SOLIC){
		form.setVisibleById("panelAvaliarAtendimento", false);
	}
}

function getDadosUsuario(){
	return fluigAPI.getUserService().getCurrent();
}

function dataAgora(){
	return new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm").format(new java.util.Date());
}