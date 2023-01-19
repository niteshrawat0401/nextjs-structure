// import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";

export default function Users({ users }) {
  // const [users, setUsers]= useState([]);
  const router= useRouter()

  return (
    <div>
      {
        users.map((ele)=>{
          return(
            <div key={ele.id}>
              {ele.id}. 
              <h1 onClick={()=> {router.push(`users/${ele.id}`)}}>{ele.username}</h1>
            </div>
          )
        })
      }
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
//     (x) => x.json()
//   );
//   return {
//     props: { users: data },
//   };
// };

export const getServerSideProps = async()=>{
  const res= await fetch("https://jsonplaceholder.typicode.com/users")
  const data= await res.json()

  return {
    props: {users: data}
  }
}
