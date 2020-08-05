export interface IDefaultExportField {
    /**
     * Выбрано ли поле
     */
    isChecked: boolean;

    /**
     * Название поля, выводится рядом с чекбоксом
     */
    name: string;

    /**
     * Уникальный ключ поля
     */
    key: 'name' | 'price' | 'weight' | 'image' | 'link';
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
 * Какие поля необходимо возвращать от сервера
 */
const DEFAULT_EXPORT_FIELDS: IDefaultExportField[] = [
    {
        isChecked: true,
        name: 'Название',
        key: 'name'
    },
    {
        isChecked: true,
        name: 'Цена',
        key: 'price'
    },
    {
        isChecked: true,
        name: 'Вес',
        key: 'weight'
    },
    {
        isChecked: true,
        name: 'Изображение',
        key: 'image'
    },
    {
        isChecked: true,
        name: 'Ссылка',
        key: 'link'
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
