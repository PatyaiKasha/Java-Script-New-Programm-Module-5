// Массив строк клавиатуры из прошлого модуля преобразовать в объект keyboard следующего формата.

// поле layouts содержит обьекты раскладок языков, в каждом из которых по 3 массива строк клавиатуры

// поле langs содержит массив доступных языков

// поле currentLang будет содержать язык который сейчас выбран

const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

// Написать скрипт который на старте спрашивает пользователя какой язык он хочет использовать на тренажере. Это обычный prompt в котором написано en-0, ru-1, ua-2. Пользователь вводит 0, 1 или 2, если введено другое значение то вывести alert о том что был выбран не доступный язык и повторить prompt до того момента пока не будет введено подходящее значание языка или нажат cancel. При cancel прекратить выполнение скрипта.

// Результат выбора языка пользователем записать в обьект keyboard в поле currentLang как строку, 0 это en, 1 это ru, 2 это ua.

// Модифицировать функцию getRandCharInAlph() так, чтобы она возвращала случайную букву из выбраного пользователем алфавита.
//.....................

//Объект алфавиты
const ALPHABETS = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
    ru: 'йцукенгшщзхъфывапролджэячсмитьбю.',
    ua: 'йцукенгшщзхїфiвапролджэячсмитьбю.'
};

// Выбираем язык
const selectLang = () => {
    let lang = prompt('Select language: EN->0, RU->1, UA->2', '0');
    switch (lang) {
        case '0':
            keyboard.currentLang = 'en';
            break;
        case '1':
            keyboard.currentLang = 'ru';
            break;
        case '2':
            keyboard.currentLang = 'ua';
            break;
        default:
            alert('Select language');
            selectLang();
    }
};

selectLang();

// Заполняем ряды клавиатуры клавишами
const feelKeyFoo = (keyboardLayouts, alphabets) => {
    const alphaSplitOnRow = alphabets => {
        const btn = {};
        btn.topRow = alphabets.slice(0, 12);
        btn.middleRow = alphabets.slice(12, 23);
        btn.bottomRow = alphabets.slice(23);
        return btn;
    };
    Object.keys(alphabets).map(lang => {
        keyboardLayouts[lang] = alphaSplitOnRow(alphabets[lang]);
    });
};

feelKeyFoo(keyboard.layouts, ALPHABETS);

// Модификация функции getRandCharInAlph()
let getRandCharInAlph = (alphabet, keyboardCurrentLang) => {
    Object.keys(alphabet).map(lang => {
        if (keyboardCurrentLang == lang) {
            let rnd = Math.floor(Math.random() * alphabet[lang].length);
            console.log('alphabet[rnd]: ', alphabet[lang][rnd]);
            document.write('alphabet[rnd]: ', alphabet[lang][rnd]);
            return alphabet[lang][rnd];
        }
    });
};

getRandCharInAlph(ALPHABETS, keyboard.currentLang);
