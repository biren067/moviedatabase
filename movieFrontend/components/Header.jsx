

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '@/styles/Header.module.css'; // Import your CSS module

function Header() {
  const router = useRouter();

  const isLinkActive = (href) => router.pathname === href;

  return (
    <>
      <div className='flex justify-between items-center px-2 py-3 bg-blue-900 text-cyan-300 z-50 sm:font-sans '>

        <div className='flex justify-center items-center gap-5 mx-auto'>
          <div className={isLinkActive('/') ? `${styles.menu}` : ''}>
            <Link href='/'>Movies</Link>
          </div>
          <div className={isLinkActive('/released_bollywood') ? `${styles.menu}` : ''}>
            <Link href='/released_bollywood'>Released</Link>
          </div>
          <div className={isLinkActive('/upcoming_bollywood') ? `${styles.menu}` : ''}>
            <Link href='/upcoming_bollywood'>Upcoming</Link>
          </div>
          <div className={isLinkActive('/movie_database') ? `${styles.menu}` : ''}>
            <Link href='/movie_database'>Collections</Link></div>

        </div>
        <div>
          under development mode
        </div>
      </div>
    </>
  )
}

export default Header
