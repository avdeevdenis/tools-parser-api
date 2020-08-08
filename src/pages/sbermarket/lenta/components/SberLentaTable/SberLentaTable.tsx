import React from 'react';

import smoothscroll from 'smoothscroll-polyfill';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { cnSberLenta } from '../../component';

import {
    SberLentaTableRow, StyledTableCell,
} from '../../components';

import { ISberLentaState } from '../../../../../store/sbermarket/lenta/typings';

import './SberLentaTable.scss';

/**
 * Шапка таблицы
 */
export const TableHeadComponent: React.FunctionComponent<ISberLentaState> = React.memo(props => {
    const { tableHeaderFields } = props;

    if (!tableHeaderFields) return null;

    return (
        <TableHead>
            <TableRow>
                <StyledTableCell>#</StyledTableCell>
                {tableHeaderFields.map(field => {
                    return (
                        <StyledTableCell key={field}>{field}</StyledTableCell>
                    )
                })}
            </TableRow>
        </TableHead>
    );
}, (prevProps, nextProps) => {
    /**
     * Если изменилось количество ячеек в шапке - re-render
     */
    if (prevProps.tableHeaderFields?.length !== nextProps.tableHeaderFields?.length) {
        return false;
    }

    if (!nextProps.tableHeaderFields || !prevProps.tableHeaderFields) {
        return false;
    }

    /**
     * Если изменилось значение какой-либо ячейки - re-render
     */
    for (let i = 0, l = nextProps.tableHeaderFields?.length; i < l; i++) {
        if (
            nextProps.tableHeaderFields[i] !==
            prevProps.tableHeaderFields[i]
        ) {
            return false;
        }
    }

    return true;
});

/**
 * Тело таблицы
 */
export const TableBodyComponent: React.FunctionComponent<ISberLentaState> = React.memo(props => {
    const { productItems } = props;

    if (!productItems) return null;

    return (
        <TableBody>
            {productItems.map((products, rowIndex) => {
                return (
                    <SberLentaTableRow key={rowIndex} products={products} rowIndex={rowIndex} />
                )
            })}
        </TableBody>
    );
});

/**
 * Считаем максимально возможную высоту таблицы с учетом видимой области экрана
 */
const getMaxTableHeight = () => {
    const clientHeight = document.documentElement.clientHeight;

    /**
     * Берем дополнительный небольшой отступ
     */
    const OFFSET = 30;

    return (clientHeight - OFFSET) + 'px';
};

/**
 * Таблица с результатами
 */
const SberLentaTable: React.FunctionComponent<ISberLentaState> = React.memo(props => {
    const { productItems } = props;

    const tableRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

    const scrollToTable = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
        const current = ref.current;

        if (current && current.offsetTop) {
            current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    React.useEffect(() => {
        productItems && scrollToTable(tableRef);
    }, [productItems]);

    if (!productItems || !productItems.length) return null;

    smoothscroll.polyfill();

    const maxTableHeight = getMaxTableHeight();

    return (
        <TableContainer
            ref={tableRef}
            className={cnSberLenta('TableContainer')}
            component={Paper}
            style={{ maxHeight: maxTableHeight }}
        >
            <Table
                className={cnSberLenta('Table')}
                stickyHeader size='small'
                aria-label='Результаты парсинга'
            >
                <TableHeadComponent {...props} />
                <TableBodyComponent {...props} />
            </Table>
        </TableContainer>
    );
});

export { SberLentaTable };
