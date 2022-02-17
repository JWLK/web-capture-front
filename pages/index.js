import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { Icon } from 'react-icons-kit'
import { ic_fact_check } from 'react-icons-kit/md/ic_fact_check'
import { ic_fact_check_outline } from 'react-icons-kit/md/ic_fact_check_outline'
import { ic_camera_alt } from 'react-icons-kit/md/ic_camera_alt'
import { ic_grade } from 'react-icons-kit/md/ic_grade'
import { ic_grade_outline } from 'react-icons-kit/md/ic_grade_outline'
import { ic_grade_twotone } from 'react-icons-kit/md/ic_grade_twotone'
import { ic_qr_code_scanner } from 'react-icons-kit/md/ic_qr_code_scanner'
import { ic_feedback } from 'react-icons-kit/md/ic_feedback'
import { ic_feedback_outline } from 'react-icons-kit/md/ic_feedback_outline'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>홈</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <div className={styles.description}>내 몸을 바로잡는 습관</div>
                    <Link href="/">
                        <a>
                            <span className={styles.mainColor}>PIO</span> 심플체커
                        </a>
                    </Link>
                </h1>

                <p className={styles.spacer1} />

                {/* <h2 className={styles.subTitle}>
          시작하기
        </h2> */}

                <div className={styles.grid}>
                    <Link href="/manual">
                        <a className={styles.card}>
                            <h2>
                                <Icon icon={ic_fact_check_outline} size={54} /> 사용법{' '}
                            </h2>
                            <p>심플체커의 사용법을 안내해 드립니다. </p>
                        </a>
                    </Link>

                    <Link href="/checker">
                        <a className={styles.card}>
                            <h2>
                                <Icon icon={ic_qr_code_scanner} size={54} /> 확인하기{' '}
                            </h2>
                            <p>촬영을 통해 몸 건강상태를 확인해 보세요!</p>
                        </a>
                    </Link>

                    {/* <Link href="/camera">
                        <a className={styles.card}>
                            <h2>
                                <Icon icon={ic_qr_code_scanner} size={54} /> 확인하기{' '}
                            </h2>
                            <p>촬영을 통해 몸 건강상태를 확인해 보세요!</p>
                        </a>
                    </Link> */}

                    <Link href="/camera">
                        <a className={styles.card}>
                            <h2>
                                <Icon icon={ic_grade_outline} size={54} /> 즐겨찾기{' '}
                            </h2>
                            <p>즐겨찾기 등록하고 손쉽게 사용해보세요!</p>
                        </a>
                    </Link>

                    <Link href="/camera">
                        <a className={styles.card}>
                            <h2>
                                <Icon icon={ic_feedback_outline} size={54} /> 문의하기{' '}
                            </h2>
                            <p>촬영을 통해 몸 건강상태를 확인해 보세요!</p>
                        </a>
                    </Link>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="https://piomedical.co.kr" target="_blank" rel="noopener noreferrer">
                    © 2021.<span className={styles.mainColor}> PIOMEDICAL.</span> All rights reserved.{' '}
                </a>
            </footer>
        </div>
    )
}
