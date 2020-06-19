import React from 'react';
import { css } from 'emotion';

const App = () => {
    return (
        <div
            onClick={() => {
                console.log('Click');
            }}
            className={css({ width: '100%', height: '100%' })}
        >
            Hello
        </div>
    );
};

export default App;
