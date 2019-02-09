import React, { Component } from 'react'
import Link from 'next/link' 

import './css/header.css'

class Header extends Component {
  render() {
    return (
      <header className='header'>
          <nav>
            <ul>
              <li><Link href='/'><a className='bc'>トップページ</a></Link></li>
              <li><Link href='/'><a className='bc'>求人情報</a></Link></li>
              <li><Link href='/'><a className='bc'>お問い合わせ</a></Link></li>
            </ul>
          </nav>
          <div className='headerMainArea'>
            <div>
              <h1>株式会社SS</h1>
              <p>SSは仮設足場の安全性を追求していきます。</p>
            </div>
            <div>
              <p>足場のことならお気軽にご相談ください。</p>
              <p>
                <span className='tel'>TEL:</span><span className='number'>0565-41-4456</span><Link href='/'><a className='inquiry'>メールでのお問い合わせはこちら</a></Link>
              </p>
            </div>
          </div>
          <div className='headerBottom'>
            <ul>
              <li>
                <Link href='/'>
                  <a>会社概要<br /><span>company</span></a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>事業内容<br /><span>business</span></a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>施工実績<br /><span>results</span></a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>施工過程<br /><span>process</span></a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>求人情報<br /><span>recruit</span></a>
                </Link>
              </li>
            </ul>
          </div>
      </header>
    )
  }
}

export default Header