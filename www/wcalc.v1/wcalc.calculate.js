
// // // // // // // // // // // // // // // // // // // // // // // // // // // 

// Подсчитать и вывести в output

function wcalcRefreshCalculate() {
	wcalcRefreshOutputPriceProducts();
	wcalcRefreshOutputComponents();
	wcalcRefreshOutputServices();
	wcalcRefreshOutputTotal();
}

function wcalcRefreshOutputTotal() {
	var total = 0;
	total += wcalcParams["Output"]["PriceProducts"];
	for(var component in wcalcParams["Output"]["Components"]) {
		var component = wcalcParams["Output"]["Components"][component];
		var cost = component.price * component.count;
		if (component.size) cost *= component.sizevalue;
		total += cost;
	}
	for(var service in wcalcParams["Output"]["Services"]) {
		var service = wcalcParams["Output"]["Services"][service];
		var cost = service.price * service.count;
		total += cost;
	}
	$("div.wcalc div.output div.PriceTotal span.value").text(total);
}

function wcalcRefreshOutputPriceProducts() {
	wcalcParams["Output"]["PriceProducts"] = 0;
	//var product = $("div.wcalc div.ViewProducts select").val();
	//var system = $("div.wcalc div.SystemProfilesAndAccessories select").val();
	//if (system != "") {
		//var config = $("div.wcalc div.ProductConfigurations div.ProductConfigurationItem input.select:checked").val();
		var config = $("div.wcalc fieldset.ProductConfigurations img.preview").attr("id");
		wcalcLoadPrice(config, wcalcDefinePriceProductsAfterLoadPrice);
	//}
}

function wcalcDefinePriceProductsAfterLoadPrice() {
	wcalcParsePrice($("div.wcalc div.buffer table"));
	var width = $("div.wcalc div.SizeProducts input.WidthProduct").val();
	var height = $("div.wcalc div.SizeProducts input.HeightProduct").val();
	var count = $("div.wcalc div.CountProducts input").val();
	var price = wcalcSearchPrice(width, height);
	price *= count;
	$("div.wcalc div.output div.PriceProducts span.value").text(price);
	$("div.wcalc div.output div.PriceProducts").show();
	wcalcParams["Output"]["PriceProducts"] = price;
}

function wcalcRefreshOutputComponents() {
	var priceComponents = $("div.wcalc div.output div.PriceComponents");
	var list = priceComponents.find("div.list");
	list.find("div.item").remove();
	var total = 0;
	for(var component in wcalcParams["Output"]["Components"]) {
		var item = list.find("div.template").clone();
		var component = wcalcParams["Output"]["Components"][component];
		var cost = component.price * component.count;
		if (component.size) cost *= component.sizevalue;
		item.find("span.caption").text(component.caption);
		var text = "";
		if (component.size) text = component.sizevalue + " " + component.unit + ", ";
		text += component.count + " шт.";
		item.find("span.rem").text(text);
		item.find("span.price").text(
			"= " + cost + " "
			+ wcalcParams["Currency"].inline
		);
		item.attr("class", "item");
		list.append(item);
		total += cost;
	}
	priceComponents.find("div.price span.value").text(total);
}

function wcalcRefreshOutputServices() {
	var priceServices = $("div.wcalc div.output div.priceServices");
	var list = priceServices.find("div.list");
	list.find("div.item").remove();
	var total = 0;
	for(var service in wcalcParams["Output"]["Services"]) {
		var item = list.find("div.template").clone();
		var service = wcalcParams["Output"]["Services"][service];
		var cost = service.price * service.count;
		item.find("span.caption").text(service.caption);
		var text = "";
		text += service.count + " шт.";
		item.find("span.rem").text(text);
		item.find("span.price").text(
			"= " + cost + " "
			+ wcalcParams["Currency"].inline
		);
		item.attr("class", "item");
		list.append(item);
		total += cost;
	}
	priceServices.find("div.price span.value").text(total);
}

// Поиск цены по номерам (изделие, система профиля, конфигурация) и размеру изделия

function wcalcSearchPrice(width, height) {
	width = Number(width);
	height = Number(height);
	var price = wcalcParams["Price"];
	var pred = 0;
	var result = 0;
	for (var w in price) {
		w = Number(w);
		if (pred < width && width <= w) { result = w; break; }
		pred = w;
	}
	if (result != 0) {
		price = price[result];
		pred = 0;
		result = 0;
		for (var h in price) {
			h = Number(h);
			if (pred < height && height <= h) { result = h; break; }
			pred = h;
		}
	}
	if (result != 0) result = price[result];
	return result;
}

/*

function wcalcSearchPrice(product, system, config, width, height) {
	width = Number(width);
	height = Number(height);
	var price = wcalcParams["Prices"][product][system][config];
	var pred = 0;
	var result = 0;
	for (var w in price) {
		w = Number(w);
		if (pred < width && width <= w) { result = w; break; }
		pred = w;
	}
	if (result != 0) {
		price = price[result];
		pred = 0;
		result = 0;
		for (var h in price) {
			h = Number(h);
			if (pred < height && height <= h) { result = h; break; }
			pred = h;
		}
	}
	if (result != 0) result = price[result];
	return result;
}

*/

// РАБОТА С ПРАЙС-ЛИСТОМ

// Загрузить прайс-лист

function wcalcLoadPrice(id, callback) {
	var path = wcalcParams["PricesPath"] + "/" + id + "/PriceList.html";
	$("div.wcalc div.buffer").load(path + " table", null, callback);
}

// Распарсить прайс-лист в массив

function wcalcParsePrice(table) {
	var heightlist = table.find("tr:eq(5) td:gt(0)");
	var widthlist = table.find("tr:gt(5)");
	for (var i = 0; i < widthlist.size(); i++) {
		var width = $.trim(widthlist.eq(i).find("td:eq(0)").text());
		var pricelist = widthlist.eq(i).find("td:gt(0)");
		wcalcParams["Price"][width] = new Array();		
		for (var j = 0; j < heightlist.size(); j++) {
			var height = $.trim(heightlist.eq(j).text());
			var price = $.trim(pricelist.eq(j).text());
			wcalcParams["Price"][width][height] = price;
		}		
	}	
}