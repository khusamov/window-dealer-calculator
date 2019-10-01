
// // // // // // // // // // // // // // // // // // // // // // // // // // // 

// Инициализация окна

$(function(){
	
	$("#wcalcDialogSelectProductConfiguration").dialog({
		autoOpen: false,
		resizable: false,
		title: "Выберите конфигурацию изделия",
		width: "60%", height: 500, modal: true,
		buttons: {
			"Отмена": function() { $(this).dialog("close"); }
		}
	});
	
});

// // // // // // // // // // // // // // // // // // // // // // // // // // // 

// Обработчики событий

