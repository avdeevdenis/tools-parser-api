import { connect } from 'react-redux';
import { SberLentaPage as SberLentaPageProvider } from './component';

import { ISberLentaVars, ISberLentaMethods } from '../../../store/sbermarket/lenta/typings';

import {
    actions
} from '../../../store/sbermarket/lenta/actions';

import { IAppState } from '../../../store/typings';

const {
    changeCheckboxDefaultExportFields,
    changeExportFormatVariants,

    toggleMaxCategoriesRadioButton,
    toggleMaxProductsRadioButton,

    setLimitMaxCategoriesNumber,
    setLimitMaxProductsNumber,

    setLoading,
    toggleCachedDataRadioButton,

    saveProductItems,
    saveTableHeaderFields,
} = actions;

const mapStateToProps = (state: IAppState): ISberLentaVars => {
    return {
        isLoading: state.sberLenta.isLoading,
        needToGetCachedData: state.sberLenta.needToGetCachedData,

        needLimitMaxCategories: state.sberLenta.needLimitMaxCategories,
        needLimitMaxProducts: state.sberLenta.needLimitMaxProducts,

        requiredExportFields: state.sberLenta.requiredExportFields,
        exportFormatVariants: state.sberLenta.exportFormatVariants,

        limitMaxCategoriesNumber: state.sberLenta.limitMaxCategoriesNumber,
        limitMaxProductsNumber: state.sberLenta.limitMaxProductsNumber,

        productItems: state.sberLenta.productItems,
        tableHeaderFields: state.sberLenta.tableHeaderFields,
    };
}

const mapDispatchToProps: ISberLentaMethods = {
    changeCheckboxDefaultExportFields,
    changeExportFormatVariants,

    toggleMaxCategoriesRadioButton,
    toggleMaxProductsRadioButton,

    setLimitMaxCategoriesNumber,
    setLimitMaxProductsNumber,

    setLoading,
    toggleCachedDataRadioButton,

    saveProductItems,
    saveTableHeaderFields,
};

const SberLentaPage = connect(mapStateToProps, mapDispatchToProps)(SberLentaPageProvider);

export { SberLentaPage };
