
// // // // // // // // // // // // // // // // // // // // // // // // // // // 

// Инициализация калькулятора

$(function(){
	wcalcInitCurrency();
	wcalcInitViewProducts();
	wcalcInitComponents();
	wcalcInitServices();
	wcalcSetupDefaultValues();
	$("div.wcalc div.ViewProducts select").change(wcalcViewProductsSelectOnChange);
	$("div.wcalc div.SystemProfilesAndAccessories select").change(wcalcSystemProfilesAndAccessoriesSelectOnChange);
	$("div.wcalc div.Components select").change(wcalcComponentsSelectOnChange);
	$("div.wcalc div.Services select").change(wcalcServicesSelectOnChange);
	$("div.wcalc div.Components input.add").attr("disabled", "disabled").click(wcalcComponentsInputAddOnClick);
	$("div.wcalc div.Services input.add").attr("disabled", "disabled").click(wcalcServicesInputAddOnClick);
	$("div.wcalc div.SizeProducts input.HeightProduct").change(wcalcSizeProductsHeightOnChange);
	$("div.wcalc div.SizeProducts input.WidthProduct").change(wcalcSizeProductsWidthOnChange);
	$("div.wcalc div.CountProducts input").change(wcalcCountProductsOnChange);
	$("div.wcalc fieldset.ProductConfigurations input.DialogSelect").click(wcalcProductConfigurationsSelectOnClick);
});

// Выставление значений по умолчанию

function wcalcSetupDefaultValues() {
	$("div.wcalc div.CountProducts input").val("1");
	$("div.wcalc div.SizeProducts input.HeightProduct").val("100");
	$("div.wcalc div.SizeProducts input.WidthProduct").val("100");
	$("div.wcalc div.SystemProfilesAndAccessories select")
		.html("<option value=''>Выберите изделие...</option>")
		.attr("disabled", "disabled");
}

// Инициализация разных частей калькулятора

function wcalcInitCurrency() {
	$("div.wcalc span.currency").text(wcalcParams["Currency"].inline);
}

function wcalcInitViewProducts() {
	var text = "<option value=''>Выберите изделие...</option>";
	for(var product in wcalcParams["ViewProducts"]) {
		text += "<option value='" + product + "'>";
		text += wcalcParams["ViewProducts"][product];
		text += "</option>";
	}
	$("div.wcalc div.ViewProducts select").html(text);
}

function wcalcInitComponents() {
	var text = "<option value=''>Выберите комплектующую...</option>";
	for(var component in wcalcParams["Components"]) {
		text += "<option value='" + component + "'>";
		text += wcalcParams["Components"][component].caption;
		text += "</option>";
	}
	$("div.wcalc div.Components select").html(text);
}

function wcalcInitServices() {
	var text = "<option value=''>Выберите услугу...</option>";
	for(var service in wcalcParams["Services"]) {
		text += "<option value='" + service + "'>";
		text += wcalcParams["Services"][service].caption;
		text += "</option>";
	}
	$("div.wcalc div.Services select").html(text);
}




