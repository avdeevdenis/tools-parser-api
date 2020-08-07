import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import TableRow from '@material-ui/core/TableRow';

import {
    IResponseProductItemOrdered,
    IProductAvaliableItem,

    IProductProperties,
    IProductName,
    IProductImage,
    IProductDescription,
    IProductBreadcrumbs,
    IProductNutrition,
    IProductPrice,
    IProductLink,
} from '../../../../../store/sbermarket/lenta/typings';

import {
    SberLentaTableCellName,
    SberLentaTableCellDescription,
    SberLentaTableCellImage,
    SberLentaTableCellBreadCrumbs,
    SberLentaTableCellPrice,
    SberLentaTableCellNutrition,
    SberLentaTableCellProperties,

    SberLentaTableCellDefault,
    SberLentaTableCellItem,

    StyledTableCell,
} from '../SberLentaTableCell/SberLentaTableCell';

import './SberLentaTableRow.scss';

export const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

/**
 * Парсим ячейки продукта по полям в зависимости от типа поля
 */
export const parseProductCell = (product: IProductAvaliableItem, url: string | null) => {
    switch (product.type) {
        case 'name':
            return (
                <SberLentaTableCellName url={url} {...product as IProductName} />
            );

        case 'description':
            return (
                <SberLentaTableCellDescription {...product as IProductDescription} />
            );

        case 'image':
            return (
                <SberLentaTableCellImage {...product as IProductImage} />
            );

        case 'breadcrumbs':
            return (
                <SberLentaTableCellBreadCrumbs {...product as IProductBreadcrumbs} />
            );

        case 'price':
            return (
                <SberLentaTableCellPrice {...product as IProductPrice} />
            );

        case 'nutrition':
            return (
                <SberLentaTableCellNutrition {...product as IProductNutrition} />
            );

        case 'properties':
            return (
                <SberLentaTableCellProperties {...product as IProductProperties} />
            );

        case 'stock':
        case 'weight':
            return (
                <SberLentaTableCellItem {...product} />
            );

        /**
         * Не рисуем ссылку, т.к. она может быть в названии
         */
        case 'link':
            return null;

        /**
         * По умолчанию рисуем пустое поле
         */
        default:
            return (
                <SberLentaTableCellDefault />
            );
    }
};

/**
 * Строка таблицы
 */
export interface ITableRowItemProps {
    products: IResponseProductItemOrdered;
    rowIndex: number;
}
export const SberLentaTableRow: React.FunctionComponent<ITableRowItemProps> = props => {
    const { products, rowIndex } = props;

    const link = products.find(product => product.type === 'link') as IProductLink;
    const linkUrl = link ? link.value : null;

    const tableCellsData = products.map(product => {
        const Cell = parseProductCell(product, linkUrl);

        return (
            <React.Fragment key={product.type + rowIndex}>
                {Cell}
            </React.Fragment>
        );
    });

    return (
        <StyledTableRow>
            <StyledTableCell>{rowIndex + 1}</StyledTableCell>
            {tableCellsData}
        </StyledTableRow>
    )
};
