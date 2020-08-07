import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';
import Link from '@material-ui/core/Link';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { cnSberLenta } from '../../component';

import {
    IProductAvaliableItem,

    IProductName,
    IProductImage,
    IProductProperties,
    IProductDescription,
    IProductBreadcrumbs,
    IProductNutrition,
    IProductPrice,
} from '../../../../../store/sbermarket/lenta/typings';

import './SberLentaTableCell.scss';

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

/**
 * Ячейка с названием
 */
export interface IProductNameProps extends IProductName {
    url: string | null;
}
export const SberLentaTableCellName: React.FunctionComponent<IProductNameProps> = props => {
    const { value, url } = props;

    if (url) {
        return (
            <StyledTableCell>
                <Link underline='none' className={cnSberLenta('CellLink')} href={url} target='_blank' title='Открыть в новом окне'>{value}</Link>
            </StyledTableCell>
        );
    }

    return (
        <StyledTableCell>{value}</StyledTableCell>
    );
};

/**
 * Ячейка с описанием
 */
export const SberLentaTableCellDescription: React.FunctionComponent<IProductDescription> = props => {
    const { value } = props;

    if (!value) {
        return (
            <SberLentaTableCellDefault />
        );
    }

    const MAX_SYMBOLS_LIMIT = 50;
    const slicedValue = value.slice(0, MAX_SYMBOLS_LIMIT);

    return (
        <StyledTableCell>{slicedValue}&#8230;</StyledTableCell>
    );
};

/**
 * Ячейка с изображением
 */
export const SberLentaTableCellImage: React.FunctionComponent<IProductImage> = props => {
    const { value } = props;

    if (!value) {
        return (
            <SberLentaTableCellDefault />
        );
    }

    return (
        <StyledTableCell>
            <LazyLoadImage className={cnSberLenta('CellImage')} src={value} />
        </StyledTableCell>
    );
};

/**
 * Ячейка с категорией
 */
export const SberLentaTableCellBreadCrumbs: React.FunctionComponent<IProductBreadcrumbs> = props => {
    const { value } = props;

    if (!value) {
        return (
            <SberLentaTableCellDefault />
        );
    }

    const joinedValue = value.join(' / ');

    return (
        <StyledTableCell>
            {joinedValue}
        </StyledTableCell>
    );
};

/**
 * Ячейка с разделителем по умолчанию (в случае отсутствия данных)
 */
export const SberLentaTableCellDefault: React.FunctionComponent = React.memo(() => {
    const EMPTY_CELL_DELIMITER = '-';

    return (
        <StyledTableCell>{EMPTY_CELL_DELIMITER}</StyledTableCell>
    );
});

/**
 * Ячейка с ценой
 *
 * Original - цена без скидки
 * Default - цена со скидкой (или обычная)
 */
export const SberLentaTableCellPrice: React.FunctionComponent<IProductPrice> = props => {
    const { value } = props;

    if (!value || !value.default) {
        return (
            <SberLentaTableCellDefault />
        );
    }

    if (value.default && value.original) {
        return (
            <StyledTableCell>
                <span className={cnSberLenta('CellPriceOriginal')}>{value.original}</span>
                <span className={cnSberLenta('CellPriceDefault', {
                    'line-through': true
                })}>{value.default}</span>
            </StyledTableCell>
        );
    }

    return (
        <StyledTableCell className={cnSberLenta('CellPriceDefault')}>{value.default}</StyledTableCell>
    );
};

/**
 * Ячейка с содержанием белков, жиров, углеводов и пищевой ценностью
 */
export const SberLentaTableCellNutrition: React.FunctionComponent<IProductNutrition> = props => {
    const { value } = props;

    if (!value) {
        return (
            <SberLentaTableCellDefault />
        );
    }

    const joinedValue = value.reduce((result, current) => {
        if (current.name && current.value) {
            result += current.name + ': ' + current.value + '\n'
        }

        return result;
    }, '');

    return (
        <StyledTableCell className={cnSberLenta('CellWhiteSpace')}>{joinedValue}</StyledTableCell>
    );
};

/**
 * Ячейка с дополнительными параметрами
 */
export const SberLentaTableCellProperties: React.FunctionComponent<IProductProperties> = props => {
    const { value } = props;

    if (!value) {
        return (
            <SberLentaTableCellDefault />
        );
    }

    const joinedValue = value.reduce((result, current) => {
        if (current.name && current.value) {
            result += current.name + ': ' + current.value + '\n'
        }

        return result;
    }, '');

    return (
        <StyledTableCell className={cnSberLenta('CellWhiteSpace')}>{joinedValue}</StyledTableCell>
    );
};

/**
 * Ячейка, показывающая данные по умолчанию
 */
export const SberLentaTableCellItem: React.FunctionComponent<IProductAvaliableItem> = React.memo(props => {
    const { value } = props;

    if (!value) {
        return (
            <SberLentaTableCellDefault />
        );
    }

    return (
        <StyledTableCell>{value}</StyledTableCell>
    )
});
