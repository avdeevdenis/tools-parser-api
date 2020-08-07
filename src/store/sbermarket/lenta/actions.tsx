import {
    ISberLentaMethods,
} from './typings';

export const CHANGE_CHECKBOX_DEFAULT_EXPORT_FIELDS = 'CHANGE_CHECKBOX_DEFAULT_EXPORT_FIELDS';
export const CHANGE_EXPORT_FORMAT_VARIANTS = 'CHANGE_EXPORT_FORMAT_VARIANTS';

export const TOGGLE_MAX_CATEGORIES_RADIO_BUTTON = 'TOGGLE_MAX_CATEGORIES_RADIO_BUTTON';
export const TOGGLE_MAX_PRODUCTS_RADIO_BUTTON = 'TOGGLE_MAX_PRODUCTS_RADIO_BUTTON';

export const SET_LIMIT_MAX_CATEGORIES_NUMBER = 'SET_LIMIT_MAX_CATEGORIES_NUMBER';
export const SET_LIMIT_MAX_PRODUCTS_NUMBER = 'SET_LIMIT_MAX_PRODUCTS_NUMBER';

export const SET_LOADING = 'SET_LOADING';
export const TOGGLE_CACHED_DATA_RADIO_BUTTON = 'TOGGLE_CACHED_DATA_RADIO_BUTTON';

export const SAVE_PRODUCT_ITEMS = 'SAVE_PRODUCT_ITEMS';
export const SAVE_TABLE_HEADER_FIELDS = 'SAVE_TABLE_HEADER_FIELDS';

const actions: ISberLentaMethods = {
    changeCheckboxDefaultExportFields: payload => ({
        type: CHANGE_CHECKBOX_DEFAULT_EXPORT_FIELDS,
        payload,
    }),

    changeExportFormatVariants: payload => ({
        type: CHANGE_EXPORT_FORMAT_VARIANTS,
        payload,
    }),

    toggleMaxCategoriesRadioButton: () => ({
        type: TOGGLE_MAX_CATEGORIES_RADIO_BUTTON,
    }),

    toggleMaxProductsRadioButton: () => ({
        type: TOGGLE_MAX_PRODUCTS_RADIO_BUTTON,
    }),

    setLimitMaxCategoriesNumber: payload => ({
        type: SET_LIMIT_MAX_CATEGORIES_NUMBER,
        payload,
    }),

    setLimitMaxProductsNumber: payload => ({
        type: SET_LIMIT_MAX_PRODUCTS_NUMBER,
        payload,
    }),

    setLoading: payload => ({
        type: SET_LOADING,
        payload,
    }),

    toggleCachedDataRadioButton: () => ({
        type: TOGGLE_CACHED_DATA_RADIO_BUTTON,
    }),

    saveProductItems: payload => ({
        type: SAVE_PRODUCT_ITEMS,
        payload,
    }),

    saveTableHeaderFields: payload => ({
        type: SAVE_TABLE_HEADER_FIELDS,
        payload,
    }),
}

export { actions };
