import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { Page, cnPage } from '../../../components/Page/Page';

import LinearProgress from '@material-ui/core/LinearProgress';

import { cn } from '@bem-react/classname';

import {
    SberLentaBreadcrumbs, SberLentaForm, SberLentaTable,
} from './components';

import { ISberLentaState } from '../../../store/sbermarket/lenta/typings';

import './sberlenta.scss';

export const cnSberLenta = cn('SberLenta');

const SberLentaPage: React.FC<ISberLentaState> = props => {
    const { isLoading } = props;

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

            <SberLentaTable {...props} />
        </Page >
    );
}

export { SberLentaPage };
