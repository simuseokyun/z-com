import styles from '@/app/page.module.css';

export default async function HomeLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
    return (
        <div className={styles.container}>
            홈 레이아웃
            {children}
            {modal}
        </div>
    );
}
