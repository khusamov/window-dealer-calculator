
// // // // // // // // // // // // // // // // // // // // // // // // // // // 

// �������� ������ ���������� ������������

var wcalcParams = new Array();

// ������� ��� �������� ���������: �������������, ����� � ��.

wcalcParams["Output"] = new Array();
wcalcParams["Output"]["PriceProducts"] = 0;
wcalcParams["Output"]["Components"] = new Array();
wcalcParams["Output"]["Services"] = new Array();

// �������� ������� ��� �������� ���� ������

wcalcParams["ViewProducts"] = new Array(); // ���� �������
wcalcParams["SystemProfilesAndAccessories"] = new Array(); // ������� ������� � ���������
wcalcParams["ProductConfigurations"] = new Array(); // ������������ (�������) �������
wcalcParams["ClassificationProducts"] = new Array(); // ������������� ������������ �������
wcalcParams["Components"] = new Array(); // �������������
wcalcParams["Services"] = new Array(); // ������

// ���� � ���������� ������������ �������

//wcalcParams["ProductConfigurationsPath"] = "wcalc.v1/ProductConfigurations";

// ���� � �����-������

wcalcParams["PricesPath"] = "wcalc.v1/Prices";

// ����� ��� �������� �������� ������������ �����-�����

wcalcParams["Price"] = new Array();