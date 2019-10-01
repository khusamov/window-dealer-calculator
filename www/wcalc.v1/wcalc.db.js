
// // // // // // // // // // // // // // // // // // // // // // // // // // // 

// БАЗА ДАННЫХ КАЛЬКУЛЯТОРА

// Валюта калькуляций

wcalcParams["Currency"] = {
	inline: "руб."
};

// Виды изделий

wcalcParams["ViewProducts"][1] = "Окно";
wcalcParams["ViewProducts"][2] = "Дверь";
wcalcParams["ViewProducts"][3] = "Раздвижка";

// Системы профиля и фурнитуры

wcalcParams["SystemProfilesAndAccessories"][1] = "Система 1";
wcalcParams["SystemProfilesAndAccessories"][2] = "Система 2";
wcalcParams["SystemProfilesAndAccessories"][3] = "Система 3";

// Конфигурации (шаблоны) изделий

wcalcParams["ProductConfigurations"][1] = "Конфигурация 1";
wcalcParams["ProductConfigurations"][2] = "Конфигурация 2";
wcalcParams["ProductConfigurations"][3] = "Конфигурация 3";

// Классификация (справочник соответствий) конфигураций изделий
// Формат данных: [изделие][система] = [конфигурации]

wcalcParams["ClassificationProducts"][1] = new Array();
wcalcParams["ClassificationProducts"][1][1] = [1, 2, 3];
wcalcParams["ClassificationProducts"][1][2] = [1, 2];

wcalcParams["ClassificationProducts"][2] = new Array();
wcalcParams["ClassificationProducts"][2][1] = [2, 3];

wcalcParams["ClassificationProducts"][3] = new Array();
wcalcParams["ClassificationProducts"][3][1] = [1, 2];
wcalcParams["ClassificationProducts"][3][3] = [1, 2, 3];

// Комплектующие

wcalcParams["Components"][1] = { caption: "Комплектующая 1", price: "100", size: false, unit: "", value: "" };
wcalcParams["Components"][2] = { caption: "Комплектующая 2", price: "100", size: true, unit: "мм.", value: "10" };
wcalcParams["Components"][3] = { caption: "Комплектующая 3", price: "100", size: false, unit: "", value: "" };

// Услуги

wcalcParams["Services"][1] = { caption: "Услуга 1", price: "100" };
wcalcParams["Services"][2] = { caption: "Услуга 2", price: "100" };
wcalcParams["Services"][3] = { caption: "Услуга 3", price: "100" };