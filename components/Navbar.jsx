import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    // <div style={{
    //     display: 'flex',
    //     gap: 10}}>
    //     <a href=''>HOME</a>
    //     <a href=''>ABOUT</a>
    //     <a href=''>GALLARY</a>
    // </div>
    <div style={{
        display: 'flex',
        gap: 10}}>
        <Link href=''>HOME</Link>
        <Link href='/About'>ABOUT</Link>
        <Link href='/gallary'>GALLARY</Link>
    </div>
  )
}
