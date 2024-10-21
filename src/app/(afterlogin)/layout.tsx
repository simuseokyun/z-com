import React from 'react';
import style from '@/app/(afterlogin)/layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ZLogo from '../../../public/zlogo.png';
import NavMenu from './_component/NavMenu';
import LogoutButton from './_component/LogoutButton';
import TrendSection from './_component/TrendSection';
import FollowRecommend from './_component/FollowRecommend';

export default function AfterLoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={style.container}>
            <header className={style.leftSectionWrapper}>
                <section className={style.leftSection}>
                    <div className={style.leftSectionFixed}>
                        <Link className={style.logo} href="/home">
                            <div className={style.logoPill}>
                                <Image src={ZLogo} alt="z.com로고" width={40} height={40} />
                            </div>
                        </Link>
                        <nav>
                            <ul>
                                <NavMenu />
                            </ul>
                            <Link href="/compose/tweet" className={style.postButton}>
                                <span>개시하기</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
                                >
                                    <g>
                                        <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                                    </g>
                                </svg>
                            </Link>
                        </nav>
                        <LogoutButton />
                    </div>
                </section>
            </header>
            <div className={style.rightSectionWrapper}>
                <div className={style.rightSectionInner}>
                    <main className={style.main}>{children}</main>
                    <section className={style.rightSection}>
                        <div style={{ marginBottom: 60, width: 'inherit' }}>
                            <form className={style.search}>
                                <svg width={20} viewBox="0 0 24 24" aria-hidden="true">
                                    <g>
                                        <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                                    </g>
                                </svg>
                                <input type="search" />
                            </form>
                        </div>
                        <TrendSection />
                        <div className={style.followRecommend}>
                            <h3>팔로우 추천</h3>
                        </div>
                        <FollowRecommend />
                        <FollowRecommend />
                        <FollowRecommend />
                    </section>
                </div>
            </div>
        </div>
    );
}
