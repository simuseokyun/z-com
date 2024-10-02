import React, { ReactNode } from 'react';
import styles from '@/app/(beforelogin)/_component/main.module.css';

type Props = { children: ReactNode; modal: ReactNode };

export default function Layout({ children }: Props) {
    {
        return <div className={styles.container}>{children}</div>;
    }
}
