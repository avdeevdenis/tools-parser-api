"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_EXPORT_FORMATS = exports.DEFAULT_EXPORT_FIELDS = void 0;
var DEFAULT_EXPORT_FIELDS = [
    {
        isChecked: true,
        name: 'Изображение',
        key: 'image'
    },
    {
        isChecked: true,
        name: 'Название',
        key: 'name',
    },
    {
        isChecked: true,
        name: 'Категория',
        key: 'breadcrumbs'
    },
    {
        isChecked: true,
        name: 'Цена',
        key: 'price'
    },
    {
        isChecked: true,
        name: 'Масса',
        key: 'weight'
    },
    {
        isChecked: true,
        name: 'Количество',
        key: 'stock'
    },
    {
        isChecked: false,
        name: 'БЖУ',
        key: 'nutrition'
    },
    {
        isChecked: true,
        name: 'Ссылка',
        key: 'link',
    },
    {
        isChecked: false,
        name: 'Описание',
        key: 'description'
    },
    {
        isChecked: false,
        name: 'Дополнительно',
        key: 'properties'
    }
];
exports.DEFAULT_EXPORT_FIELDS = DEFAULT_EXPORT_FIELDS;
var DEFAULT_EXPORT_FORMATS = [
    {
        type: 'table',
        text: 'В таблице на сайте',
        isChecked: true,
    },
    {
        type: 'file',
        text: 'Экспорт в файл',
        isChecked: false,
    }
];
exports.DEFAULT_EXPORT_FORMATS = DEFAULT_EXPORT_FORMATS;
