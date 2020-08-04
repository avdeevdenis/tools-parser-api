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

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { cnPage } from './';

import './Page.scss';
import { cn } from '@bem-react/classname';

const defaultRequiredFields = {
    name: {
        value: true,
        name: 'Название'
    },
    price: {
        value: true,
        name: 'Цена'
    },
    weight: {
        value: true,
        name: 'Вес'
    },
};

const RequiredFormControl = ({ handleChangeRequiredFields, requiredFields }) => {
    return (
        <FormControl className={cnPage('RequiredFields')}>
            <FormLabel className={cnPage('RequiredFieldsLabel')}>Необходимые поля</FormLabel>
            <FormGroup>
                {Object.keys(requiredFields).map(key => {
                    const { name, value } = requiredFields[key];

                    return (
                        <FormControlLabel
                            key={name}
                            control={<Checkbox checked={value} onChange={handleChangeRequiredFields} name={key} />}
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

    const onStartButtonClick = () => {
        console.log('start button click');

        setLoading(true);

        // const HOST = 'http://localhost:3001' || 'https://tools-parser-api-backend.herokuapp.com';
        const HOST = 'https://tools-parser-api-backend.herokuapp.com';
        const url = HOST + '/api/parser';

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
        changedField.value = !changedField.value;

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
                    <Table aria-label='Результаты парсинга'>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>#</StyledTableCell>
                                <StyledTableCell>Категория</StyledTableCell>
                                <StyledTableCell colSpan={3} align="center">Товары</StyledTableCell>
                                {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell> */}
                                {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableResults.map((row, i) => {
                                const product = row.productItems.reduce((result, product, i) => {
                                    result += (i + 1) + '. ' + product.title + '\n' + product.price + '\n' + product.weight + '\n\n';

                                    return result;
                                }, '');

                                console.log('product', product);

                                return (
                                    <StyledTableRow key={row.categoryName}>
                                        <StyledTableCell component='th' scope='row'>
                                            {i + 1}
                                        </StyledTableCell>
                                        <StyledTableCell>{row.categoryName}</StyledTableCell>
                                        <StyledTableCell className={cnPage('ProductItem')}>{product}</StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            }
        </div>
    );
}

export default Page;
