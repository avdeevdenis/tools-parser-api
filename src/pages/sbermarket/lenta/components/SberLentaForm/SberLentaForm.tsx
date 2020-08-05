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

import { ISberLentaProps } from '../../typings';

import { cnSberLenta } from '../../constants';

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
                className={cnSberLenta('ExportFormatSelect') + ' ' + cnSberLenta('FixedFormControl')}
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
                className={cnSberLenta('FixedFormControl')}
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
                    className={cnSberLenta('FixedFormControl')}
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
 * Кнопка начала парсинга данных
 */
export const StartParseButton: React.FunctionComponent<ISberLentaProps> = props => {
    const { isLoading, setLoading } = props;

    const onStartButtonClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <Button
            className={cnSberLenta('ParseButton')}
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

            <StartParseButton
                {...props}
            />
        </form>
    );
};

export { SberLentaForm };
