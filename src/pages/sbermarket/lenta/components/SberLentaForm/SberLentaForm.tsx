import React, { useState } from 'react';

import {
    Checkbox,
    Button,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    FormLabel,
    FormGroup,
    TextField,
    Switch,
    Accordion,
    AccordionSummary,
    AccordionDetails,

    ArrowForwardIosIcon,
    HelpOutlineIcon,
    IconButton,
    Tooltip,
    ExpandMoreIcon,
} from './components';

import { cnSberLenta } from '../../component';

import { IDefaultExportField } from '../../../../../store/sbermarket/lenta/constants';
import { ISberLentaState, IProductAvaliableName } from '../../../../../store/sbermarket/lenta/typings';

import './SberLentaForm.scss';

/**
 * Делим элементы по SPLITTED_BY
 */
const splitElements = (
    controls: IDefaultExportField[],
    SPLITTED_BY: number,
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
) => {
    let controlLabelsTemp: JSX.Element[] = [];

    return controls.reduce((result: JSX.Element[][], control, index, array) => {
        const { name, key, isChecked } = control;

        const label = (
            <FormControlLabel
                className={cnSberLenta('FormCheckbox')}
                key={name}
                control={<Checkbox checked={isChecked} onChange={onChangeHandler} name={key} />}
                label={name}
            />
        );

        controlLabelsTemp.push(label);

        const isLastElement = array.length - 1 === index;

        if (controlLabelsTemp.length === SPLITTED_BY || isLastElement) {
            result.push(controlLabelsTemp);
            controlLabelsTemp = [];
        }

        return result;
    }, []);
};

export interface IRequiredFieldsFormControlProps extends ISberLentaState {
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccordionSummaryComponent: React.FunctionComponent = React.memo(() => {
    return (
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label='Expand'
            aria-controls='additional-actions-content'
            id='additional-actions-header'
        >
            Необходимые поля
        </AccordionSummary>
    );
});

/**
 * Контролы выбора необходимых полей для экспорта
 */
export const RequiredFieldsFormControl: React.FunctionComponent<IRequiredFieldsFormControlProps> = React.memo(props => {
    const {
        changeCheckboxDefaultExportFields: onChange,
        requiredExportFields: controls,
        expanded, setExpanded,
    } = props;

    if (!controls || !onChange) return null;

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;

        onChange(name as IProductAvaliableName);
    };

    /**
     * Делим компоненты по {SPLITTED_BY} в ряд
     */
    const SPLITTED_BY = 5;
    const controlsComponents = splitElements(controls, SPLITTED_BY, onChangeHandler);

    return (
        <FormControl className={cnSberLenta('FormAccordion')}>
            <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
                <AccordionSummaryComponent />
                <AccordionDetails>
                    <FormGroup className={cnSberLenta('FormGroupControlsWrapper')}>
                        {controlsComponents.map((control, i) => {
                            return (
                                <div key={i} className={cnSberLenta('FormGroupControls')}>
                                    {control}
                                </div>
                            )
                        })}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </FormControl>
    );
}, (prevProps, nextProps) => {
    /**
     * Если поменялся чекбокс у параметра - re-render
     */
    for (let i = 0, l = nextProps.requiredExportFields.length; i < l; i++) {
        if (
            nextProps.requiredExportFields[i].isChecked !==
            prevProps.requiredExportFields[i].isChecked
        ) return false;
    }

    /**
     * Открыли/закрыли аккордеон - re-render
     */
    if (prevProps.expanded !== nextProps.expanded) {
        return false;
    }

    return true;
});

/**
 * Контролы выбора формата экспорта данных
 */
export const ExportFormatsFormControl: React.FunctionComponent<ISberLentaState> = React.memo(props => {
    const {
        exportFormatVariants: formats,
        changeExportFormatVariants: onChange,
    } = props;

    if (!formats) return null;

    const selectedFormat = formats.find(format => format.isChecked);

    if (!selectedFormat) return null;

    const handleExportFormat = (event: React.ChangeEvent<any>) => {
        onChange(event.target.value);
    }

    return (
        <FormControl className={cnSberLenta('FormControl')}>
            <InputLabel id='export-format-control-label'>Формат выходных данных</InputLabel>
            <Select
                className={cnSberLenta('ExportFormatSelect') + ' ' + cnSberLenta('FormFixedControl')}
                labelId='export-format-control-label'
                id='export-format-control-label'
                value={selectedFormat.type}
                onChange={handleExportFormat}
            >
                {formats.map(format => {
                    return (
                        <MenuItem key={format.type} value={format.type}>{format.text}</MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}, (prevProps, nextProps) => {
    /**
     * Если поменяли опцию - re-render
     */
    for (let i = 0, l = nextProps.exportFormatVariants.length; i < l; i++) {
        if (
            nextProps.exportFormatVariants[i].isChecked !==
            prevProps.exportFormatVariants[i].isChecked
        ) return false;
    }

    return true;
});

/**
 * Контрол ограничения максимального количества категорий
 */
export const MaxCategoriesFormControl: React.FunctionComponent<ISberLentaState> = React.memo(props => {
    const {
        needLimitMaxCategories, toggleMaxCategoriesRadioButton,
        limitMaxCategoriesNumber, setLimitMaxCategoriesNumber,
    } = props;

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLimitMaxCategoriesNumber(Number(event.target.value));
    }

    return (
        <FormControl className={cnSberLenta('FormControl')}>
            <FormLabel className={cnSberLenta('FormLabel')}>Ограничить максимальное количество категорий</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={needLimitMaxCategories}
                            onChange={() => toggleMaxCategoriesRadioButton()}
                            name='max-categories-form-control'
                            color='primary'
                        />
                    }
                    label=''
                />
            </FormGroup>
            {needLimitMaxCategories && <TextField
                className={cnSberLenta('FormFixedControl')}
                id='max-results-limit'
                label='Максимум категорий'
                type='number'
                onChange={onChange}
                value={limitMaxCategoriesNumber}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            }
        </FormControl>
    );
}, (prevProps, nextProps) => {
    if (nextProps.needLimitMaxCategories !== prevProps.needLimitMaxCategories) {
        return false;
    }

    if (nextProps.limitMaxCategoriesNumber !== prevProps.limitMaxCategoriesNumber) {
        return false;
    }

    return true;
});

export const MaxProductsFormControlCheckbox: React.FunctionComponent<ISberLentaState> = React.memo(props => {
    const {
        needLimitMaxProducts, toggleMaxProductsRadioButton,
    } = props;

    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Switch
                        checked={needLimitMaxProducts}
                        onChange={() => toggleMaxProductsRadioButton()}
                        name='max-products-form-control'
                        color='primary'
                    />
                }
                label=''
            />
        </FormGroup>
    );
}, (prevProps, nextProps) => {
    if (prevProps.needLimitMaxProducts !== nextProps.needLimitMaxProducts) {
        return false;
    }

    return true;
});

export const MaxProductsFormControlField: React.FunctionComponent<ISberLentaState> = React.memo(props => {
    const {
        limitMaxProductsNumber, setLimitMaxProductsNumber,
        needLimitMaxProducts,
    } = props;

    if (!needLimitMaxProducts) return null;

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLimitMaxProductsNumber(Number(event.target.value));
    }

    return (
        <TextField
            className={cnSberLenta('FormFixedControl')}
            id='max-products-limit'
            label='Максимум продуктов'
            type='number'
            onChange={onChange}
            value={limitMaxProductsNumber}
            InputLabelProps={{
                shrink: true,
            }}
        />
    );
}, (prevProps, nextProps) => {
    if (prevProps.limitMaxProductsNumber !== nextProps.limitMaxProductsNumber) {
        return false;
    }

    if (prevProps.needLimitMaxProducts !== nextProps.needLimitMaxProducts) {
        return false;
    }

    return true;
});

/**
 * Контрол ограничения максимального количества продуктов
 */
export const MaxProductsFormControl: React.FunctionComponent<ISberLentaState> = React.memo(props => {
    return (
        <FormControl className={cnSberLenta('FormControl')}>
            <FormLabel className={cnSberLenta('FormLabel')}>Ограничить максимальное количество продуктов</FormLabel>
            <MaxProductsFormControlCheckbox {...props} />
            <MaxProductsFormControlField {...props} />
        </FormControl>
    );
});

/**
 * Контрол получения информации из cache
 */
export const GetFromCacheFormControl: React.FunctionComponent<ISberLentaState> = React.memo(props => {
    const {
        needToGetCachedData,
        toggleCachedDataRadioButton,
    } = props;

    const tooltipText = 'Если информация была обработана ранее - взять её. Это ускоряет получение результатов и уменьшает нагрузку на сервер.'

    return (
        <FormControl className={cnSberLenta('FormControl')}>
            <FormLabel className={cnSberLenta('FormLabel')}>Взять информацию из кэша
                <Tooltip title={tooltipText}>
                    <IconButton className={cnSberLenta('FormQuestionTooltipIconButton')} size='small' aria-label={tooltipText}>
                        <HelpOutlineIcon className={cnSberLenta('FormQuestionTooltipIcon')} />
                    </IconButton>
                </Tooltip>
            </FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={needToGetCachedData}
                            onChange={() => toggleCachedDataRadioButton()}
                            name='max-products-form-control'
                            color='primary'
                        />
                    }
                    label=''
                />
            </FormGroup>
        </FormControl>
    );
}, (prevProps, nextProps) => {
    if (prevProps.needToGetCachedData !== nextProps.needToGetCachedData) {
        return false;
    }

    return true;
});

/**
 * Параметры для парсера, отправляемые на сервер
 */
const getRequestBody = (props: ISberLentaState) => {
    const {
        exportFormatVariants, requiredExportFields,
        limitMaxProductsNumber, needLimitMaxProducts,
        needToGetCachedData: cached,
    } = props;

    const exportFormat = exportFormatVariants.reduce((result, format) =>
        format.isChecked ? format.type : result
        , '');

    const fields = requiredExportFields.reduce((result: IDefaultExportField['key'][], field) => {
        if (field.isChecked) {
            result.push(field.key);
        }

        return result;
    }, []);

    return {
        type: 'sberlenta',
        options: {
            exportFormat,
            fields,
            maxProducts: needLimitMaxProducts ? limitMaxProductsNumber : null,
            cached,
        }
    };
};

const getRequestUrl = () => {
    const host = window.location.hostname === 'localhost' ?
        'http://localhost:3001' : 'https://tools-parser-api-backend.herokuapp.com';

    return host + '/api/parser/sberlenta';
}

/**
 * Отправляем запрос на сервер для парсинга
 */
const sendRequest = (props: ISberLentaState) => {
    const { setLoading, saveProductItems, saveTableHeaderFields } = props;

    // --------------- TEMP START ---------------

    // const flag = true;

    // if (flag) {
    //     const localStorageResults = localStorage.getItem('results');
    //     if (localStorageResults) {
    //         const results = JSON.parse(localStorageResults);

    //         console.log(results);
    //         saveProductItems(results.productItems);
    //         saveTableHeaderFields(results.headerFields);
    //     }

    //     setLoading(false);

    //     return;
    // }

    // --------------- TEMP END ---------------

    const url = getRequestUrl();
    const body = getRequestBody(props);

    const request = fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    request
        .then(response => response.json())
        .then(response => {
            setLoading(false);

            console.log(response);

            if (response.success) {
                saveProductItems(response.productItems);
                saveTableHeaderFields(response.headerFields);
                localStorage.setItem('results', JSON.stringify(response));
            }

            // if (json.error) {
            //     // saveAlert({
            //     //     // type: 'error',
            //     //     title: json.errorText,
            //     //     code: json.errorCode
            //     // });
            // }
        })
        .catch(error => {
            console.log('error', error);
            setLoading(false);
        });

    // if (isFile) {
    //     request
    //         .then(response => response.blob())
    //         .then(blob => {
    //             var url = window.URL.createObjectURL(blob);
    //             var a = document.createElement('a');
    //             a.href = url;
    //             a.download = 'filename.xlsx';
    //             document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
    //             a.click();
    //             a.remove();  //afterwards we remove the element again
    //         });
    // }
}

/**
 * Кнопка начала парсинга данных
 */
export const StartFormParseButton: React.FunctionComponent<ISberLentaState> = React.memo(props => {
    const { isLoading, setLoading } = props;

    const onStartButtonClick = () => {
        setLoading(true);

        sendRequest(props);
    };

    return (
        <Button
            className={cnSberLenta('FormParseButton')}
            disabled={isLoading}
            onClick={onStartButtonClick}
            variant='contained'
            color='primary'
            endIcon={<ArrowForwardIosIcon />}
        >
            Старт
        </Button>
    );
});

const SberLentaForm: React.FunctionComponent<ISberLentaState> = React.memo(props => {
    const [expanded, setExpanded] = useState(true);

    return (
        <form className={cnSberLenta('Form')} noValidate autoComplete='off'>
            <RequiredFieldsFormControl
                {...props}
                expanded={expanded}
                setExpanded={setExpanded}
            />

            <ExportFormatsFormControl
                {...props}
            />

            {/* <MaxCategoriesFormControl
                {...props}
            /> */}

            <MaxProductsFormControl
                {...props}
            />

            <GetFromCacheFormControl
                {...props}
            />

            <StartFormParseButton
                {...props}
            />
        </form>
    );
});

export { SberLentaForm };
