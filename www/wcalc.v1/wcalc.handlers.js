
// // // // // // // // // // // // // // // // // // // // // // // // // // // 

// Обработчики событий

function wcalcSizeProductsHeightOnChange() {
	wcalcRefreshCalculate();
}

function wcalcSizeProductsWidthOnChange() {
	wcalcRefreshCalculate();
}

function wcalcCountProductsOnChange() {
	wcalcRefreshCalculate();
}

// Выбор вида изделия

function wcalcViewProductsSelectOnChange() {
	$("option[value='']", this).remove();
	var product = $(this).val();
	wcalcDefineSystemProfilesAndAccessoriesByViewProduct(product);
	$("div.wcalc td.ProductConfigurations").hide();
}

// Выбор системы профиля и фурнитуры

function wcalcSystemProfilesAndAccessoriesSelectOnChange() {
	$("option[value='']", this).remove();
	var product = $("div.wcalc div.ViewProducts select").val();
	$("div.wcalc fieldset.ProductConfigurations img.preview").removeAttr("id").hide();
	$("div.wcalc td.ProductConfigurations").show();
}

function wcalcComponentsSelectOnChange() {
	$("option[value='']", this).remove();
	var component = wcalcParams["Components"][$(this).val()];
	var size = $("div.wcalc div.Components span.size");
	if (component.size) size.show(); else size.hide();
	$("div.wcalc div.Components span.size span.unit").text(component.unit);
	$("div.wcalc div.Components span.size input").val(component.value);
	$("div.wcalc div.Components span.count").show();
	$("div.wcalc div.Components input.add").removeAttr("disabled");
}

function wcalcServicesSelectOnChange() {
	$("option[value='']", this).remove();
	$("div.wcalc div.Services input.count").show();
	$("div.wcalc div.Services span.unit").show();
	$("div.wcalc div.Services input.add").removeAttr("disabled");
}

function wcalcComponentsInputAddOnClick() {
	var id = $("div.wcalc div.Components select").val();
	var count = $("div.wcalc div.Components span.count input").val();
	var sizevalue = $("div.wcalc div.Components span.size input").val();
	var caption = wcalcParams["Components"][id].caption;
	var unit = wcalcParams["Components"][id].unit;
	var price = wcalcParams["Components"][id].price;
	var size = wcalcParams["Components"][id].size;
	var components = wcalcParams["Output"]["Components"];
	components[components.length] = { 
		id: id, count: count, caption: caption, price: price, 
		size: size, unit: unit, sizevalue: sizevalue
	};
	wcalcRefreshCalculate();
	$("div.wcalc div.output div.PriceComponents").show();
}

function wcalcServicesInputAddOnClick() {
	var id = $("div.wcalc div.Services select").val();
	var count = $("div.wcalc div.Services input.count").val();
	var caption = wcalcParams["Services"][id].caption;
	var price = wcalcParams["Services"][id].price;
	var services = wcalcParams["Output"]["Services"];
	services[services.length] = { 
		id: id, caption: caption, count: count, price: price
	};
	wcalcRefreshCalculate();
	$("div.wcalc div.output div.PriceServices").show();
}

function wcalcProductConfigurationItemOnClick() {
	$("#wcalcDialogSelectProductConfiguration").dialog("close");
	var src = $(this).find("img").attr("src");
	$("div.wcalc fieldset.ProductConfigurations img.preview")
		.attr("id", this.id)
		.attr("src", src)
		.show();
	wcalcRefreshCalculate();
}

function wcalcProductConfigurationsSelectOnClick() {
	var product = $("div.wcalc div.ViewProducts select").val();
	var system = $("div.wcalc div.SystemProfilesAndAccessories select").val();
	wcalcDefineProductConfigurations(product, system);	
	$("#wcalcDialogSelectProductConfiguration").dialog("open");
}

// // // // // // // // // // // // // // // // // // // // // // // // // // // 

function wcalcDefineSystemProfilesAndAccessoriesByViewProduct(product) {
	$("div.wcalc div.SystemProfilesAndAccessories select").removeAttr("disabled");
	var text = "<option value=''>Выберите систему...</option>";
	for(var system in wcalcParams["ClassificationProducts"][product]) {
		text += "<option value='" + system + "'>";
		text += wcalcParams["SystemProfilesAndAccessories"][system];
		text += "</option>";
	}
	$("div.wcalc div.SystemProfilesAndAccessories select").html(text);
}

function wcalcDefineProductConfigurations(product, system) {
	$("#wcalcDialogSelectProductConfiguration div.item").remove();
	for(var i in wcalcParams["ClassificationProducts"][product][system]) {
		var configuration = wcalcParams["ClassificationProducts"][product][system][i];
		var caption = wcalcParams["ProductConfigurations"][configuration];
		var item = $("#wcalcDialogSelectProductConfiguration div.template").clone();
		item.attr("class", "item");
		//var src = wcalcParams["ProductConfigurationsPath"] + "/" + configuration + ".jpg";
		var src = wcalcParams["PricesPath"] + "/" + configuration + "/PriceList.files/img1.gif";
		item.find("img.preview").attr("src", src);
		item.find("a").attr("id", configuration).click(wcalcProductConfigurationItemOnClick);
		$("#wcalcDialogSelectProductConfiguration div.configurations").append(item);
	}
}

/*

function wcalcDefineProductConfigurations(product, system) {
	$("div.wcalc div.ProductConfigurations div.ProductConfigurationItem").remove();
	for(var i in wcalcParams["ClassificationProducts"][product][system]) {
		var configuration = wcalcParams["ClassificationProducts"][product][system][i];
		var caption = wcalcParams["ProductConfigurations"][configuration];
		var item = $("div.wcalc div.ProductConfigurationItemTemplate").clone();
		var src = wcalcParams["ProductConfigurationsPath"] + "/" + configuration + ".jpg";
		item.attr("class", "ProductConfigurationItem");
		item.find("img.preview").attr("src", src);
		item.find("span.caption").text(caption);
		item.find("input.select").val(configuration).click(wcalcProductConfigurationItemOnClick);
		$("div.wcalc div.ProductConfigurations").append(item);
	}
}

*/