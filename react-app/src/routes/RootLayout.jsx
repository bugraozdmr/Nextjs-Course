import React from 'react'
import MainHeader from '../components/MainHeader'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
    // Outlet olmazsa gelmez
  return (
    <>
        <MainHeader />
        <Outlet />
    </>
  )
}
