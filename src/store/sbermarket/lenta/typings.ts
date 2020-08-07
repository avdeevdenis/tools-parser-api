import {
    IDefaultExportField,
    IDefaultExportFormat,
} from './constants';

export interface ISberLentaState extends ISberLentaVars, ISberLentaMethods { }

/**
 * Переменные Redux
 */
export interface ISberLentaVars {
    isLoading: boolean;
    needToGetCachedData: boolean;

    requiredExportFields: IDefaultExportField[];
    exportFormatVariants: IDefaultExportFormat[];

    needLimitMaxCategories: boolean;
    needLimitMaxProducts: boolean;

    limitMaxCategoriesNumber: number;
    limitMaxProductsNumber: number;

    productItems: IResponseProductItemOrdered[] | null;
    tableHeaderFields: string[] | null;
};

/**
 * Методы Redux
 */
export interface ISberLentaMethods {
    changeCheckboxDefaultExportFields: (payload: IDefaultExportField['name']) => void;
    changeExportFormatVariants: (payload: IDefaultExportFormat['type']) => void;

    toggleMaxCategoriesRadioButton: () => void;
    toggleMaxProductsRadioButton: () => void;

    setLimitMaxCategoriesNumber: (payload: ISberLentaVars['limitMaxCategoriesNumber']) => void;
    setLimitMaxProductsNumber: (payload: ISberLentaVars['limitMaxProductsNumber']) => void;

    setLoading: (payload: ISberLentaVars['isLoading']) => void;
    toggleCachedDataRadioButton: () => void;

    saveProductItems: (payload: IProductAvaliableItem[]) => void;
    saveTableHeaderFields: (payload: string[]) => void;
}

/**
 * Тайпинг используется изоморфно и в ответе бекенда и в обработке на фронте 
 * Порядок перечисления полей важен
 */
export type IResponseProductItemOrdered = [
    /**
     * Ссылка на продукт
     */
    IProductLink,

    /**
     * Ссылка на изображение товара
     */
    IProductImage,

    /**
     * Название продукта
     */
    IProductName,

    /**
     * Ранжированный массив "хлебных крошек" продукта
     */
    IProductBreadcrumbs,

    /**
     * Возвращает цену товара,
     * 
     * Если цена со скидкой - возвращает до скидки и после скидки
     * Иначе - просто цену
     */
    IProductPrice,

    /**
     * Масса/объем продукта
     */
    IProductWeight,

    /**
     * Сколько осталось на складе (количество)
     */
    IProductStock,

    /**
     * Содержание белков, жиров, углеводов и пищевая ценность
     */
    IProductNutrition,

    /**
     * Описание продукта
     */
    IProductDescription,

    /**
     * Дополнительная информация о товарах
     */
    IProductProperties,
];

/**
 * Возможные названия полей на русском
 *
 * Используется на фронте для валидации названий рядом с чекбоксами
 * и на бекенде при формировании ответа
 */
export type IProductAvaliableName = 'Название' |
    'Категория' |
    'Описание' |
    'Изображение' |
    'Цена' |
    'БЖУ' |
    'Количество' |
    'Масса' |
    'Ссылка'|
    'Дополнительно';

/**
 * Возможные названия типов
 */
export type IProductAvaliableType = IProductNameType |
    IProductLinkType |
    IProductDescriptionType |
    IProductBreadcrumbsType |
    IProductWeightType |
    IProductImageType |
    IProductNutritionType |
    IProductStockType |
    IProductPriceType |
    IProductPropertiesType;

/**
 * Возможные значения полей
 */
export type IProductAvaliableValue = IProductNameValue |
    IProductLinkValue |
    IProductDescriptionValue |
    IProductBreadcrumbsValue |
    IProductWeightValue |
    IProductImageValue |
    IProductNutritionValue |
    IProductStockValue |
    IProductPriceValue |
    IProductPropertiesValue;

/**
 * Возможный продукт
 */
export type IProductAvaliableItem =  {
    type: IProductAvaliableType;
    value: IProductAvaliableValue;
}

/**
 * Название продукта
 */
export type IProductNameType = 'name';
export type IProductNameValue = string | null;
export interface IProductName {
    type: IProductNameType;
    value: IProductNameValue;
}

/**
 * Ссылка на продукт
 */
export type IProductLinkType = 'link';
export type IProductLinkValue = string | null;
export interface IProductLink {
    type: IProductLinkType;
    value: IProductLinkValue;
}

/**
 * Описание продукта
 */
export type IProductDescriptionType = 'description';
export type IProductDescriptionValue = string | null;
export interface IProductDescription {
    type: IProductDescriptionType;
    value: IProductDescriptionValue;
}

/**
 * Ранжированный массив "хлебных крошек" продукта
 */
export type IProductBreadcrumbsType = 'breadcrumbs';
export type IProductBreadcrumbsValue = string[] | null;
export interface IProductBreadcrumbs {
    type: IProductBreadcrumbsType;
    value: IProductBreadcrumbsValue;
}

/**
 * Ссылка на изображение товара
 */
export type IProductImageType = 'image';
export type IProductImageValue = string | null;
export interface IProductImage {
    type: IProductImageType;
    value: IProductImageValue;
}

/**
 * Содержание белков, жиров, углеводов и пищевая ценность
 */
export type IProductNutritionType = 'nutrition';
export type IProductNutritionValue = {
    name: string;
    value: string;
}[] | null;
export interface IProductNutrition {
    type: IProductNutritionType;
    value: IProductNutritionValue;
}

/**
 * Сколько осталось на складе (количество)
 */
export type IProductStockType = 'stock';
export type IProductStockValue = string | null;
export interface IProductStock {
    type: IProductStockType;
    value: IProductStockValue;
}

/**
 * Возвращает цену товара,
 * 
 * Если цена со скидкой - возвращает до скидки и после скидки
 * Иначе - просто цену
 */
export type IProductPriceType = 'price';
export type IProductPriceValue = {
    default: string | null;
    original: string | null;
};
export interface IProductPrice {
    type: IProductPriceType;
    value: IProductPriceValue;
}

/**
 * Дополнительная информация о товарах
 */
export type IProductPropertiesType = 'properties';
export type IProductPropertiesValue = {
    name: string;
    value: string;
}[] | null;
export interface IProductProperties {
    type: IProductPropertiesType;
    value: IProductPropertiesValue;
}

/**
 * Вес/объем товара
 */
export type IProductWeightType = 'weight';
export type IProductWeightValue = string | null;
export interface IProductWeight {
    type: IProductWeightType;
    value: IProductWeightValue;
}
