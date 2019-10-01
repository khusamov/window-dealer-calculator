
// // // // // // // // // // // // // // // // // // // // // // // // // // // 

// ОСНОВНОЙ МАССИВ ПАРАМЕТРОВ КАЛЬКУЛЯТОРА

var wcalcParams = new Array();

// Массивы для хранения выбранных: комплектующих, услуг и пр.

wcalcParams["Output"] = new Array();
wcalcParams["Output"]["PriceProducts"] = 0;
wcalcParams["Output"]["Components"] = new Array();
wcalcParams["Output"]["Services"] = new Array();

// Основные массивы для хранения базы данных

wcalcParams["ViewProducts"] = new Array(); // Виды изделий
wcalcParams["SystemProfilesAndAccessories"] = new Array(); // Системы профиля и фурнитуры
wcalcParams["ProductConfigurations"] = new Array(); // Конфигурации (шаблоны) изделий
wcalcParams["ClassificationProducts"] = new Array(); // Классификация конфигураций изделий
wcalcParams["Components"] = new Array(); // Комплектующие
wcalcParams["Services"] = new Array(); // Услуги

// Путь к превьюшкам конфигураций изделий

//wcalcParams["ProductConfigurationsPath"] = "wcalc.v1/ProductConfigurations";

// Путь к прайс-листам

wcalcParams["PricesPath"] = "wcalc.v1/Prices";

// Буфер для хранения текущего загруженного прайс-листа

wcalcParams["Price"] = new Array();