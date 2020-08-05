import React from 'react';
import { cn } from '@bem-react/classname';

import './Page.scss';

export const cnPage = cn('Page');

interface IPageProps {
    className?: string;
    children: any;
}

const Page: React.FC<IPageProps> = props => {
    let className = 'Page';

    if (props.className) {
        className += ' ' + props.className;
    }

    return (
        <div className={className}>{props.children}</div>
    )
}

export { Page };
