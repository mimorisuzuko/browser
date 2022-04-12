import { css } from '@emotion/css';
import { hot } from 'react-hot-loader/root';

const App = () => {
    return (
        <div
            onClick={() => {
                console.log('Click');
            }}
            className={css`
                width: 100%;
                height: 100%;
            `}
        >
            Hello
        </div>
    );
};

export default hot(App);
