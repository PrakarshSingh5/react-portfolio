import React from 'react'

const Testmonial = () => {
  return (
    <div id="testmonial">
      <h2>
        Testmonial
      </h2>
      <section>
        <TestmonialCard name={"Prakarsh Singh"} feedback={"Your work is excellence"}/>
      </section>
    </div>
  );
};
const TestmonialCard=({name,feedback})=>(
    <article>
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt='User'/>
    <h4>{name}</h4>
    <p>{feedback}</p>
    </article>
)

export default Testmonial
