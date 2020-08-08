import { IGlobalReduxAction } from '../../typings';

import {
    CHANGE_CHECKBOX_DEFAULT_EXPORT_FIELDS,
    CHANGE_EXPORT_FORMAT_VARIANTS,

    TOGGLE_MAX_PRODUCTS_RADIO_BUTTON,
    TOGGLE_MAX_CATEGORIES_RADIO_BUTTON,

    SET_LIMIT_MAX_CATEGORIES_NUMBER,
    SET_LIMIT_MAX_PRODUCTS_NUMBER,

    SET_LOADING,
    TOGGLE_CACHED_DATA_RADIO_BUTTON,

    SAVE_PRODUCT_ITEMS,
    SAVE_TABLE_HEADER_FIELDS,
} from './actions';

import {
    DEFAULT_EXPORT_FIELDS,
    DEFAULT_EXPORT_FORMATS,
} from './constants';

import {
    ISberLentaVars,
} from './typings';

import {
    replaceArrayReduxAction,
} from '../../helpers';

const defaultState: ISberLentaVars = {
    isLoading: false,
    requiredExportFields: DEFAULT_EXPORT_FIELDS,
    exportFormatVariants: DEFAULT_EXPORT_FORMATS,

    needLimitMaxCategories: false,
    needLimitMaxProducts: true,

    limitMaxCategoriesNumber: 10,
    limitMaxProductsNumber: 3,

    needToGetCachedData: true,
    productItems: null,
    tableHeaderFields: null,
};

/**
 * Сообщения от Redux-actions будут присылаться в консоль только при наличии флага 'redux-messages'
 */
const isReduxMessagesFlagAvaliable = () => {
    const search = window && window.location && window.location.search;

    if (!search) {
        return false;
    }

    return search.indexOf('redux-messages') !== -1;
}

export const sberLentaReducer = (state = defaultState, action: IGlobalReduxAction) => {
    if (isReduxMessagesFlagAvaliable()) {
        console.log('sberLentaReducer action', action, 'state', state);
    }

    switch (action.type) {
        case CHANGE_CHECKBOX_DEFAULT_EXPORT_FIELDS: {
            const { changedIndex, replacedItem }: Partial<{ changedIndex: number, replacedItem: object }> = state.requiredExportFields
                .reduce((result, field, index) => {
                    if (field.key === action.payload) {
                        return {
                            changedIndex: index,
                            replacedItem: {
                                ...field,
                                isChecked: !field.isChecked
                            }
                        };
                    }

                    return result;
                }, {});

            const requiredExportFields = replaceArrayReduxAction(
                state.requiredExportFields,
                changedIndex,
                replacedItem,
            );

            return {
                ...state,
                requiredExportFields,
            };
        }

        case CHANGE_EXPORT_FORMAT_VARIANTS: {
            const exportFormatVariants = state.exportFormatVariants.map(variant => {
                variant.isChecked = variant.type === action.payload;

                return variant;
            });

            return {
                ...state,
                exportFormatVariants,
            };
        }

        case TOGGLE_MAX_PRODUCTS_RADIO_BUTTON: {
            return {
                ...state,
                needLimitMaxProducts: !state.needLimitMaxProducts,
            };
        }

        case TOGGLE_MAX_CATEGORIES_RADIO_BUTTON: {
            return {
                ...state,
                needLimitMaxCategories: !state.needLimitMaxCategories,
            };
        }

        case SET_LIMIT_MAX_CATEGORIES_NUMBER: {
            return {
                ...state,
                limitMaxCategoriesNumber: action.payload,
            };
        }

        case SET_LIMIT_MAX_PRODUCTS_NUMBER: {
            return {
                ...state,
                limitMaxProductsNumber: action.payload,
            };
        }

        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            };
        }

        case TOGGLE_CACHED_DATA_RADIO_BUTTON: {
            return {
                ...state,
                needToGetCachedData: !state.needToGetCachedData
            };
        }

        case SAVE_PRODUCT_ITEMS: {
            return {
                ...state,
                productItems: action.payload,
            };
        }

        case SAVE_TABLE_HEADER_FIELDS: {
            return {
                ...state,
                tableHeaderFields: action.payload,
            };
        }

        default:
            return state;
    }
}
