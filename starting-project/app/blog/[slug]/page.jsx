import React from 'react'

export default function page({params}) {
  return (
    <main>
        <h1>Blog Page</h1>
        <p>{params.slug}</p>
    </main>
  );
}
