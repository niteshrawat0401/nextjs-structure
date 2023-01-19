import React from "react";

const showData = ({ data }) => {
  return (
    <div>
      <h3>{data.name}</h3>
      <h3>{data.email}</h3>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${context.query.id}`
    );
    const data = await res.json();
    console.log(data);
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
};

export default showData;
