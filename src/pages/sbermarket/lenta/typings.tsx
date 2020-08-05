import { ISberLentaVars, ISberLentaMethods } from '../../../store/sbermarket/lenta';

export interface ISberLentaProps {
    isLoading: ISberLentaVars['isLoading'];

    requiredExportFields: ISberLentaVars['requiredExportFields'];
    exportFormatVariants: ISberLentaVars['exportFormatVariants'];

    needLimitMaxCategories: ISberLentaVars['needLimitMaxCategories'];
    needLimitMaxProducts: ISberLentaVars['needLimitMaxProducts'];

    limitMaxCategoriesNumber: ISberLentaVars['limitMaxCategoriesNumber'];
    limitMaxProductsNumber: ISberLentaVars['limitMaxProductsNumber'];

    changeCheckboxDefaultExportFields: ISberLentaMethods['changeCheckboxDefaultExportFields'];
    changeExportFormatVariants: ISberLentaMethods['changeExportFormatVariants'];

    toggleMaxCategoriesRadioButton: ISberLentaMethods['toggleMaxCategoriesRadioButton'];
    toggleMaxProductsRadioButton: ISberLentaMethods['toggleMaxProductsRadioButton'];

    setLimitMaxCategoriesNumber: ISberLentaMethods['setLimitMaxCategoriesNumber'];
    setLimitMaxProductsNumber: ISberLentaMethods['setLimitMaxProductsNumber'];

    setLoading: ISberLentaMethods['setLoading'];
}
