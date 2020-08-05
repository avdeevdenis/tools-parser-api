import React from 'react';

import { emphasize, withStyles } from '@material-ui/core/styles';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';

import { ISberLentaProps } from '../../typings';
import { cnSberLenta } from '../../constants';

import './SberLentaBreadcrumbs.scss';

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


const SberLentaBreadcrumbs: React.FunctionComponent<ISberLentaProps> = props => {
    return (
        <Breadcrumbs className={cnSberLenta('Breadcrumbs')} separator="›" aria-label="breadcrumb">
            <StyledBreadcrumb
                label='Parsers'
                icon={<HomeIcon fontSize='small' />}
            />
            <StyledBreadcrumb label='SberMarket' />
            <StyledBreadcrumb
                label='Lenta'
            />
        </Breadcrumbs>

    )
};

export { SberLentaBreadcrumbs };
