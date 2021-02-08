function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
    log.dir(constraints);

	var dataset = DatasetBuilder.newDataset();
    
    dataset.addColumn("Tema");
    dataset.addColumn("Subtema");
     
    var tempDataset = getDefaultValues();

    if(constraints!=null && constraints.length){   
        
    	if(constraints[0].constraintType==ConstraintType.MUST) {
            for(var a=0;a<tempDataset.length;a++){
            	if(constraints[0].initialValue==tempDataset[a][constraints[0].fieldName]){
                    dataset.addRow(
                    		new Array(
                    				tempDataset[a]["Tema"]
                    				, tempDataset[a]["Subtema"]
                    		)
                    );
                }
            }
        }
    }
     
    return dataset;

}

function getDefaultValues(){
    return  [{
        Tema: "TI",
        Subtema: "Hardware e Periféricos"
    },
    {
        Tema: "TI",
        Subtema: "Instalação de Software"
    },
    {
        Tema: "TI",
        Subtema: "Desbloqueio de usuário"
    },
    {
        Tema: "TI",
        Subtema: "Criação de usuário"
    },
    {
        Tema: "Outros",
        Subtema: "Outro"
    }
    ];
}

function onMobileSync(user) {

}