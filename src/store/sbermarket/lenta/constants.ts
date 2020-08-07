import { IProductAvaliableType, IProductAvaliableName } from './typings';

export interface IDefaultExportField {
    /**
     * Выбрано ли поле
     */
    isChecked: boolean;

    /**
     * Название поля, выводится рядом с чекбоксом
     */
    name: IProductAvaliableName;

    /**
     * Уникальный ключ поля
     */
    key: IProductAvaliableType;
}
export interface IDefaultExportFormat {
    /**
     * Возможный тип
     */
    type: 'table' | 'file';

    /**
     * Текстовое описание типа
     */
    text: string;

    /**
     * Выбрано ли поле
     */
    isChecked: boolean;
}

/**
 * Какие поля хотим возвращать от сервера
 */
const DEFAULT_EXPORT_FIELDS: IDefaultExportField[] = [
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

const DEFAULT_EXPORT_FORMATS: IDefaultExportFormat[] = [
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

export {
    DEFAULT_EXPORT_FIELDS, DEFAULT_EXPORT_FORMATS
};
