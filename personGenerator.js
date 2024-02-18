const ran = Math.floor(Math.random() * 3); 

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Малинин",
            "id_2": "Кутузов",
            "id_3": "Скворцов",
            "id_4": "Маликов",
            "id_5": "Кондратев",
            "id_6": "Баранов",
            "id_7": "Мартынов",
            "id_8": "Башаров",
            "id_9": "Конюхов",
            "id_10": "Ираклев",
            "id_11": "Миндаров",
            "id_12": "Картинов",
            "id_13": "Бодунов",
            "id_14": "Мортунов",
            "id_15": "Моргунов",
            "id_16": "Таваров"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мария",
            "id_2": "Арианна",
            "id_3": "Катрин",
            "id_4": "Гульназ",
            "id_5": "Прокопья",
            "id_6": "Мария",
            "id_7": "Сюзанна",
            "id_8": "Лилия",
            "id_9": "Людмила",
            "id_10": "Милена"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Иванов",
            "id_2": "Романов",
            "id_3": "Маликов",
            "id_4": "Андреев",
            "id_5": "Тимуров",
            "id_6": "Робертов",
            "id_7": "Тахиров",
            "id_8": "Маратов",
            "id_9": "Петров",
            "id_10": "Сидоров"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Бездельник",
            "id_2": "Лекарь",
            "id_3": "Тестировщик",
            "id_4": "Адвокат",
            "id_5": "Рубчик",
            "id_6": "Токарь",
            "id_7": "Тренер",
            "id_8": "Охранник",
            "id_9": "Пианист",
            "id_10": "Парашютист"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Медсестра",
            "id_2": "Барменша",
            "id_3": "Кладовщица",
            "id_4": "Портная",
            "id_5": "Парикмахер",
            "id_6": "Водитель",
            "id_7": "Оператор",
            "id_8": "Дизайнер",
            "id_9": "Продавщица",
            "id_10": "Визажист"
        }
    }`,

    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min), 

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  
        return obj.list[prop];
    },

    randomFirstName: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomPatronymic: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },

    randomSurname: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomMonth31: function randomMonth() { 
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() { 
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function randomMonth() { 
		let month = `февраля`
		return month;
	},

    rendomYear: function() { 
        return this.randomIntNumber(1950, 1990) + " г.р.";
    },

    randomРrofession: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        if (ran === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31); 
        } else if (ran === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30); 
        } else if (ran === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28); 
        }
        this.person.year = this.rendomYear(1950, 1990);
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};