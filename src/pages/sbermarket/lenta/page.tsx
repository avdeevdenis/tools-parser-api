import React from 'react';
import { connect } from 'react-redux';
import { SberLentaPage as SberLentaPagePageComponent } from './';

import { ISberLentaVars, ISberLentaMethods } from '../../../store/sbermarket/lenta';

import { ISberLentaProps } from './typings';

import {
    actions
} from '../../../store/sbermarket/lenta/actions';

const {
    changeCheckboxDefaultExportFields,
    changeExportFormatVariants,

    toggleMaxCategoriesRadioButton,
    toggleMaxProductsRadioButton,

    setLimitMaxCategoriesNumber,
    setLimitMaxProductsNumber,

    setLoading,
} = actions;

const SberLentaPageBase: React.FunctionComponent<ISberLentaProps> = props => {
    return (
        <SberLentaPagePageComponent {...props} />
    );
}

const mapStateToProps = (state: any): ISberLentaVars => {
    return {
        isLoading: state.sberLenta.isLoading,

        needLimitMaxCategories: state.sberLenta.needLimitMaxCategories,
        needLimitMaxProducts: state.sberLenta.needLimitMaxProducts,

        requiredExportFields: state.sberLenta.requiredExportFields,
        exportFormatVariants: state.sberLenta.exportFormatVariants,

        limitMaxCategoriesNumber: state.sberLenta.limitMaxCategoriesNumber,
        limitMaxProductsNumber: state.sberLenta.limitMaxProductsNumber,
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
};

const SberLentaPage = connect(mapStateToProps, mapDispatchToProps)(SberLentaPageBase);

export { SberLentaPage };
