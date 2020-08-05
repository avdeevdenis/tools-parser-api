import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { withStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Alert, AlertTitle } from '@material-ui/lab';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { LazyLoadImage } from 'react-lazy-load-image-component';

// import { AutoSizer, Column, Table } from 'react-virtualized';

import { cnPage } from './';

import './Page.scss';

const defaultRequiredFields = {
    name: {
        isChecked: true,
        name: 'Название'
    },
    price: {
        isChecked: true,
        name: 'Цена'
    },
    weight: {
        isChecked: true,
        name: 'Вес'
    },
    image: {
        isChecked: true,
        name: 'Изображение'
    },
    link: {
        isChecked: true,
        name: 'Ссылка'
    }
};

const RequiredFormControl = ({ handleChangeRequiredFields, requiredFields }) => {
    return (
        <FormControl className={cnPage('RequiredFields')}>
            <FormLabel className={cnPage('RequiredFieldsLabel')}>Необходимые поля</FormLabel>
            <FormGroup>
                {Object.keys(requiredFields).map(key => {
                    const { name, isChecked } = requiredFields[key];

                    return (
                        <FormControlLabel
                            key={name}
                            control={<Checkbox checked={isChecked} onChange={handleChangeRequiredFields} name={key} />}
                            label={name}
                        />
                    );
                })}
            </FormGroup>
        </FormControl>
    );
};

const Page = () => {
    const [requiredFields, setRequiredFields] = React.useState(defaultRequiredFields);
    const [exportFormat, toggleExportFormat] = React.useState('table');
    const [isLimitedResultsCount, setLimitResultsCount] = React.useState(false);
    const [maxResultLimitCountValue, handleMaxResultLimitCountValue] = React.useState(50);
    const [isLoading, setLoading] = React.useState(false);
    const [tableResults, setTableResults] = React.useState(null);
    const [alert, saveAlert] = React.useState(null);
    const [isScrollerTopVisible, setScrollerTopVisible] = React.useState(false);

    // const resultsFromStorage = localStorage.getItem('results');

    // if (resultsFromStorage && !tableResults) {
    //     setTableResults(JSON.parse(resultsFromStorage));
    // }

    const onStartButtonClick = () => {
        console.log('start button click');

        setLoading(true);

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

                    setLoading(false);
                });
        } else {
            request
                .then(response => response.json())
                .then(json => {
                    setLoading(false);

                    console.log(json);

                    if (json.success) {
                        setTableResults(json.response);

                        // localStorage.setItem('results', JSON.stringify(json.response));
                    }

                    if (json.error) {
                        saveAlert({
                            type: 'error',
                            title: json.errorText,
                            code: json.errorCode
                        });
                    }
                });
        }

    };

    const handleExportFormat = (event) => {
        toggleExportFormat(event.target.value);
    };

    const handleChangeRequiredFields = ({ target }) => {
        const { name } = target;

        const changedField = requiredFields[name];
        changedField.isChecked = !changedField.isChecked;

        setRequiredFields({
            ...requiredFields,
            [name]: changedField
        });
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
        <div className={cnPage()}>
            <form className={cnPage('Form')} noValidate autoComplete="off">
                <Typography paragraph>
                    Парсер ассортимента "Лента" Сбермаркет <Link className={cnPage('SourceLink')} target='_blank' href='https://sbermarket.ru/lenta' title='Открыть в новой вкладке'>(sbermarket.ru/lenta)</Link> позволяет получать содержимое всех категорий товаров.
                </Typography>
                <Typography className={cnPage('TextOption')}>
                    Дополнительные параметры
                </Typography>

                <RequiredFormControl
                    requiredFields={requiredFields}
                    handleChangeRequiredFields={handleChangeRequiredFields}
                />

                <FormControl className={cnPage('ExportFormControl')}>
                    <InputLabel id='export-form-control-label'>Формат выходных данных</InputLabel>
                    <Select
                        className={cnPage('ExportFormControlSelect')}
                        labelId='export-form-control-label'
                        id='export-form-control-label'
                        value={exportFormat}
                        onChange={handleExportFormat}
                    >
                        <MenuItem name='table' value='table'>В таблице на сайте</MenuItem>
                        <MenuItem name='file' value='file'>Экспорт в файл</MenuItem>
                    </Select>
                </FormControl>

                <div className={cnPage('MaxResultsBlock')}>
                    <FormControl className={cnPage('RequiredFields')}>
                        <FormLabel className={cnPage('RequiredFieldsLabel')}>Ограничить максимальное число результатов</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox
                                    checked={isLimitedResultsCount}
                                    onChange={() => setLimitResultsCount(!isLimitedResultsCount)}
                                    name='max-results-limit-count'
                                />}
                            />
                        </FormGroup>
                    </FormControl>

                    {isLimitedResultsCount && <TextField
                        className={cnPage('MaxLimit')}
                        id='max-results-limit'
                        label='Максимум позиций'
                        type='number'
                        onChange={e => handleMaxResultLimitCountValue(e.target.value)}
                        value={maxResultLimitCountValue}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    }
                </div>

                <Button
                    disabled={isLoading}
                    onClick={onStartButtonClick}
                    variant='contained'
                    color='primary'
                    endIcon={<ArrowForwardIosIcon />}
                >
                    Старт
                </Button>
            </form>

            {tableResults && <div className={cnPage('ResultsTable')}>
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
                            {tableResults.map((category, categoryIndex) => {
                                const { categoryName, categoryLink, productItems } = category;

                                const productItemsCount = productItems.length;

                                return productItems.map((product, productIndex) => {
                                    let price;

                                    /**
                                     * original - цена до скидки (перечеркнутая)
                                     * default - цена после скидки (актуальная), либо если скидки нет
                                     */
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
                                                    {/* <StyledTableCell style={{ verticalAlign: 'top' }}>{productItemsCount}</StyledTableCell> */}
                                                </StyledTableRow>
                                            )}
                                            <StyledTableRow>
                                                <StyledTableCell>{categoryIndex + 1}.{productIndex + 1}</StyledTableCell>
                                                <StyledTableCell>
                                                    {/* Link or just a product name */}
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
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            }

            {
                alert && <div className='alerts'>
                    <Alert className='alert' onClose={() => saveAlert(null)} severity={alert.type}>
                        <AlertTitle>{alert.title}</AlertTitle>
                        {alert.code && <strong>Код ошибки - {alert.code}</strong>}
                    </Alert>
                </div>
            }

            {
                showScroll && (
                    <div onClick={scrollTop} className={'ScrollerTop'}>
                        <ArrowUpwardIcon className={'ScrollerTopIcon'} />
                    </div>
                )
            }
        </div >
    );
}

export default Page;
