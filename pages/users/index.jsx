// import React, { useEffect, useState } from 'react'

export default function Users({ users }) {
  // const [users, setUsers]= useState([]);

  return (
    <div>

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
