import React from 'react';
import classNames from 'classnames';

function Button({ outline, className, children, onClick }) {
    return (
        <button
            className={classNames('button', className, {
                'button--outline': outline,
            })}
            onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
