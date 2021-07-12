import { FC } from 'react';
import styles from './layout.module.css';

export const Layout: FC = ({ children }) => {
    return (
        <>
            <div className={styles.navBar}>nav bar</div>
            <div className={styles.container}>{children}</div>
        </>
    );
};
