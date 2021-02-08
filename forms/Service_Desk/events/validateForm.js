function validateForm(form){
	var ATIV_ATUAL = getValue("WKNumState");
	
	var ATV_INICIO = 4;
	var ATV_ATEND_SOLIC = 21;
	var ATV_AVAL_ATEND = 11;
	
	var msg = "";
	
	if(ATIV_ATUAL == 0 || ATIV_ATUAL == ATV_INICIO){
		if(form.getValue("txt_telefone_ramal") == "" || form.getValue("txt_telefone_ramal") == null){
			msg += "<br />- " + i18n.translate("solicitante.telefoneRamal")
		}
		
		if(form.getValue("txt_tema") == "" || form.getValue("txt_tema") == null){
			msg += "<br />- " + i18n.translate("solicitante.tema")
		}
		
		if(form.getValue("txt_sub_tema") == "" || form.getValue("txt_sub_tema") == null){
			msg += "<br />- " + i18n.translate("solicitante.sub.tema")
		}
		
		if(form.getValue("txt_detal_solic") == "" || form.getValue("txt_detal_solic") == null){
			msg += "<br />- " + i18n.translate("solicitante.detalhamento.solicitacao")
		}
	} 
	
	else if(ATIV_ATUAL == ATV_ATEND_SOLIC){
		
		if(form.getValue("solic_valida") == ""){
			msg += "<br />- " + i18n.translate("atendimento.solic.valida")
		} 
		
		// Validar o campo justificava em caso de reprovacao
		else if(form.getValue("solic_valida") == "nao" && form.getValue("txt_justificativa_reprovacao") == ""){
				msg += "<br />- " + i18n.translate("atendimento.justificativa.reprovacao");
		}
		
		// Validar o campo solucao em caso em que tenha solucao
		else if(form.getValue("solic_valida") == "sim" && form.getValue("txt_solucao") == ""){
				msg += "<br />- " + i18n.translate("atendimento.solucao");
		}
		
	}
	
	else if(ATIV_ATUAL == ATV_AVAL_ATEND){
		if( form.getValue("nota") == ""){
				msg += "<br />- " + i18n.translate("atendimento.nota");
		}
	}
	
	
	if(msg != ""){
		throw i18n.translate("msg.campos.obrigatorios") + ":" + msg;
	}
}