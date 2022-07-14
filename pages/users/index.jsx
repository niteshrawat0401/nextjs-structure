// import React, { useEffect, useState } from 'react'

export default function Users({ users }) {
  // const [users, setUsers]= useState([]);

  return (
    <div>
      {users.map((u) => (
        <div key={u.id}>
          {u.id}. {u.name}
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (x) => x.json()
  );
  return {
    props: { users: data },
  };
};
