import React, { Component } from 'react'
import Link from 'next/link' 

import './css/footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <hr />
                <nav className='footerBottom'>
                    <ul>
                        <li>
                            <Link href='/'>
                                <a>TOP</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>会社概要</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>事業内容</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>施工実績</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>施工過程</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>求人情報</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a>お問い合わせ</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <p>Copyright(c) 株式会社SS. All Rights Reserved. Produced by Japannet.</p>
            </footer>
        )
    }
}

export default Footer