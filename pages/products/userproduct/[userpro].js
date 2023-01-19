import { useRouter } from 'next/router'
import React from 'react'

const userpro = () => {
    const router= useRouter();
    // console.log({router});
    const {userpro}= router.query;

  return (
    <div>userpro: {userpro}</div>
  )
}

export default userpro

