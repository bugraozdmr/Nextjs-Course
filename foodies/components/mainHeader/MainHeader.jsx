

import Link from 'next/link'
import React from 'react'
import logoImg from '@/assets/logo.png'
import classes from './MainHeader.module.css'
import Image from 'next/image'
import MainHeaderBackground from './MainHeaderBackground'
import { usePathname } from 'next/navigation'
import NavLink from './NavLink'


// Image daha rahat yuklenmesi icin
export default function MainHeader() {

  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
        <Link className={classes.logo} href='/'>
            <Image src={logoImg} alt='a plate with food on it' priority />
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
    </header>
    </>
  )
}
