
// // // // // // // // // // // // // // // // // // // // // // // // // // // 

// ���� ������ ������������

// ������ �����������

wcalcParams["Currency"] = {
	inline: "���."
};

// ���� �������

wcalcParams["ViewProducts"][1] = "����";
wcalcParams["ViewProducts"][2] = "�����";
wcalcParams["ViewProducts"][3] = "���������";

// ������� ������� � ���������

wcalcParams["SystemProfilesAndAccessories"][1] = "������� 1";
wcalcParams["SystemProfilesAndAccessories"][2] = "������� 2";
wcalcParams["SystemProfilesAndAccessories"][3] = "������� 3";

// ������������ (�������) �������

wcalcParams["ProductConfigurations"][1] = "������������ 1";
wcalcParams["ProductConfigurations"][2] = "������������ 2";
wcalcParams["ProductConfigurations"][3] = "������������ 3";

// ������������� (���������� ������������) ������������ �������
// ������ ������: [�������][�������] = [������������]

wcalcParams["ClassificationProducts"][1] = new Array();
wcalcParams["ClassificationProducts"][1][1] = [1, 2, 3];
wcalcParams["ClassificationProducts"][1][2] = [1, 2];

wcalcParams["ClassificationProducts"][2] = new Array();
wcalcParams["ClassificationProducts"][2][1] = [2, 3];

wcalcParams["ClassificationProducts"][3] = new Array();
wcalcParams["ClassificationProducts"][3][1] = [1, 2];
wcalcParams["ClassificationProducts"][3][3] = [1, 2, 3];

// �������������

wcalcParams["Components"][1] = { caption: "������������� 1", price: "100", size: false, unit: "", value: "" };
wcalcParams["Components"][2] = { caption: "������������� 2", price: "100", size: true, unit: "��.", value: "10" };
wcalcParams["Components"][3] = { caption: "������������� 3", price: "100", size: false, unit: "", value: "" };

// ������

wcalcParams["Services"][1] = { caption: "������ 1", price: "100" };
wcalcParams["Services"][2] = { caption: "������ 2", price: "100" };
wcalcParams["Services"][3] = { caption: "������ 3", price: "100" };