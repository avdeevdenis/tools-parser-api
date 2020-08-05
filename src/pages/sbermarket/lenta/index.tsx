/*eslint-disable */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Page, cnPage } from '../../../components/Page/Page';

import { Alert, AlertTitle } from '@material-ui/lab';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import LinearProgress from '@material-ui/core/LinearProgress';

import { LazyLoadImage } from 'react-lazy-load-image-component';

// import { AutoSizer, Column, Table } from 'react-virtualized';

import { ISberLentaProps } from './typings';

import { cnSberLenta } from './constants';

import { SberLentaBreadcrumbs, SberLentaForm } from './components/';

import './index.scss';

import './sberlenta.scss';

const SberLentaPage: React.FC<ISberLentaProps> = props => {
    const { isLoading } = props;
    const [exportFormat, toggleExportFormat] = React.useState('table');
    const [isLimitedResultsCount, setLimitResultsCount] = React.useState(false);
    const [maxResultLimitCountValue, handleMaxResultLimitCountValue] = React.useState(50);
    const [tableResults, setTableResults] = React.useState(null);
    const [alert, saveAlert] = React.useState(null);

    const onStartButtonClick = () => {
        console.log('start button click');

        const host = window.location.hostname === 'localhost' ?
            'http://localhost:3001' : 'https://tools-parser-api-backend.herokuapp.com';

        const url = host + '/api/parser';

        const body = JSON.stringify({
            source: 'sbermarket',
            categories: 'all',
            fields: ['cost', 'weight', 'name']
        });

        const request = fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body
        });

        const isFile = false;

        if (isFile) {
            request
                .then(response => response.blob())
                .then(blob => {
                    var url = window.URL.createObjectURL(blob);
                    var a = document.createElement('a');
                    a.href = url;
                    a.download = 'filename.xlsx';
                    document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
                    a.click();
                    a.remove();  //afterwards we remove the element again
                });
        } else {
            request
                .then(response => response.json())
                .then(json => {
                    console.log(json);

                    if (json.success) {
                        setTableResults(json.response);

                        // localStorage.setItem('results', JSON.stringify(json.response));
                    }

                    if (json.error) {
                        // saveAlert({
                        //     // type: 'error',
                        //     title: json.errorText,
                        //     code: json.errorCode
                        // });
                    }
                });
        }

    };

    const handleExportFormat = (event: any) => {
        toggleExportFormat(event.target.value);
    };

    const handleChangeRequiredFields = ({ target }: any) => {
        const { name } = target;

        // const changedField = requiredFields[name];
        // changedField.isChecked = !changedField.isChecked;

        // setRequiredFields({
        //     ...requiredFields,
        //     [name]: changedField
        // });
    };

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const [showScroll, setShowScroll] = React.useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // window.addEventListener('scroll', checkScrollTop)

    return (
        <Page className={cnSberLenta()}>
            <SberLentaBreadcrumbs {...props} />

            <Typography paragraph>
                Парсер ассортимента "Лента" Сбермаркет <Link
                    className={cnSberLenta('SourceLink')}
                    target='_blank'
                    href='https://sbermarket.ru/lenta'
                    title='Открыть в новой вкладке'
                >(sbermarket.ru/lenta)</Link> позволяет получать информацию о товарах из всех категорий, представленных на сайте.
            </Typography>
            <Typography className={cnPage('TextOption')}>Дополнительные параметры.</Typography>

            <SberLentaForm {...props} />

            {isLoading && <LinearProgress className={cnSberLenta('Progress')} />}

            {
                tableResults && <div className={cnPage('ResultsTable')}>
                    <TableContainer component={Paper}>
                        <Table size='small' aria-label='Результаты парсинга'>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>#</StyledTableCell>
                                    <StyledTableCell>Название</StyledTableCell>
                                    <StyledTableCell>Цена</StyledTableCell>
                                    <StyledTableCell style={{ minWidth: '90px' }}>Вес</StyledTableCell>
                                    <StyledTableCell>Изображение</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* {tableResults.map((category, categoryIndex) => {
                                const { categoryName, categoryLink, productItems } = category;

                                const productItemsCount = productItems.length;

                                return productItems.map((product, productIndex) => {
                                    let price;

                                     // original - цена до скидки (перечеркнутая)
                                     // default - цена после скидки (актуальная), либо если скидки нет

                                    if (product.price) {
                                        if (product.price.default && product.price.original) {
                                            price = (
                                                <React.Fragment>
                                                    <span className={cnPage('ProductItemPriceOriginal', {
                                                        crossed: true
                                                    })}>{product.price.original}</span>
                                                    <span className={cnPage('ProductItemPriceDefault')}>{product.price.default}</span>
                                                </React.Fragment>
                                            )
                                        } else if (product.price.default) {
                                            price = (
                                                <span className={cnPage('ProductItemPriceOriginal')}>{product.price.default}</span>
                                            );
                                        }
                                    }

                                    return (
                                        <React.Fragment key={product.title + productIndex}>
                                            {productIndex === 0 && (
                                                <StyledTableRow className={cnPage('ProductItemCategory')}>
                                                    <StyledTableCell style={{ verticalAlign: 'top' }} component='th' scope='row'>{categoryIndex + 1}</StyledTableCell>
                                                    <StyledTableCell style={{ verticalAlign: 'top' }} colSpan={7}>
                                                        <Link className={cnPage('ProductItemCategoryLink')} href={categoryLink} target='_blank' title='Открыть в новой вкладке'>
                                                            {categoryName} &#8226; {productItemsCount} шт.
                                                        </Link>
                                                    </StyledTableCell>
                                                    // <StyledTableCell style={{ verticalAlign: 'top' }}>{productItemsCount}</StyledTableCell>
                                                </StyledTableRow>
                                            )}
                                            <StyledTableRow>
                                                <StyledTableCell>{categoryIndex + 1}.{productIndex + 1}</StyledTableCell>
                                                <StyledTableCell>
                                                    {//Link or just a product name //}
                                                    {true ? (
                                                        <Link title='Открыть в новой вкладке' href={product.link} target='_blank'>{product.title}</Link>
                                                    ) : product.title}
                                                </StyledTableCell>
                                                <StyledTableCell className={cnPage('ProductItemPrice')}>{price}</StyledTableCell>
                                                <StyledTableCell>{product.weight}</StyledTableCell>
                                                <StyledTableCell>
                                                    <LazyLoadImage
                                                        className={cnPage('ProductItemImage')}
                                                        alt='Изображение товара'
                                                        src={product.image}
                                                    />
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        </React.Fragment>
                                    )
                                })
                            })} */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            }

            {
                alert && <div className='alerts'>
                    {/* <Alert className='alert' onClose={() => saveAlert(null)} severity={alert.type}>
                        <AlertTitle>{alert.title}</AlertTitle>
                        {alert.code && <strong>Код ошибки - {alert.code}</strong>}
                    </Alert> */}
                </div>
            }
        </Page >
    );
}

export { SberLentaPage };
