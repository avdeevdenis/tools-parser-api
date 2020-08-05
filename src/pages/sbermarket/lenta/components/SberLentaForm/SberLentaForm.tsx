import React from 'react';

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

    ArrowForwardIosIcon,
} from './components'

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import { ISberLentaProps } from '../../typings';

import { cnSberLenta } from '../../constants';

import './SberLentaForm.scss';

/**
 * Контролы выбора необходимых полей для экспорта
 */
export const RequiredFieldsFormControl: React.FunctionComponent<ISberLentaProps> = props => {
    const {
        changeCheckboxDefaultExportFields: onChange,
        requiredExportFields: controls,
    } = props;

    if (!controls || !onChange) return null;

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;

        onChange(name);
    };

    return (
        <FormControl>
            <FormLabel className={cnSberLenta('FormLabel')}>Необходимые поля</FormLabel>
            <FormGroup>
                {controls.map(({ name, key, isChecked }) => {
                    return (
                        <FormControlLabel
                            className={cnSberLenta('FormCheckbox')}
                            key={name}
                            control={<Checkbox checked={isChecked} onChange={onChangeHandler} name={key} />}
                            label={name}
                        />
                    );
                })}
            </FormGroup>
        </FormControl>
    );
};

/**
 * Контролы выбора формата экспорта данных
 */
export const ExportFormatsFormControl: React.FunctionComponent<ISberLentaProps> = props => {
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
};

/**
 * Контрол ограничения максимального количества категорий
 */
export const MaxCategoriesFormControl: React.FunctionComponent<ISberLentaProps> = props => {
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
};

/**
 * Контрол ограничения максимального количества продуктов
 */
export const MaxProductsFormControl: React.FunctionComponent<ISberLentaProps> = props => {
    const {
        needLimitMaxProducts, toggleMaxProductsRadioButton,
        limitMaxProductsNumber, setLimitMaxProductsNumber,
    } = props;

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLimitMaxProductsNumber(Number(event.target.value));
    }

    return (
        <FormControl className={cnSberLenta('FormControl')}>
            <FormLabel className={cnSberLenta('FormLabel')}>Ограничить максимальное количество продуктов</FormLabel>
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
            {
                needLimitMaxProducts && <TextField
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
            }
        </FormControl>
    );
};

/**
 * Контрол получения информации из cache
 */
export const GetFromCacheFormControl: React.FunctionComponent<ISberLentaProps> = props => {
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
}

/**
 * Кнопка начала парсинга данных
 */
export const StartFormParseButton: React.FunctionComponent<ISberLentaProps> = props => {
    const { isLoading, setLoading } = props;

    const onStartButtonClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 3000);
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
    )
};

const SberLentaForm: React.FunctionComponent<ISberLentaProps> = props => {
    return (
        <form className={cnSberLenta('Form')} noValidate autoComplete='off'>
            <RequiredFieldsFormControl
                {...props}
            />
            <ExportFormatsFormControl
                {...props}
            />
            <MaxCategoriesFormControl
                {...props}
            />

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
};

export { SberLentaForm };
