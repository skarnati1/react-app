import { useState } from 'react';

function Panel({ label, textval, onSet }) {
//   const [isActive, setIsActive] = useState(false);

// const [text, setText] = useState();

function handleChange(e) {
    // const textval = 
    // onSet();
    // setText(e.target.value)
  }
  return (
    <section className=" ">
      
      <label>
      {label}
      {' '}
      <input className='w-24 panel border-black border'
        value={textval}
        onChange={onSet}
      />
    </label>
      
      
      
      
      {/* <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className='m-4 px-4 py-2 rounded-md border-green-300 bg-green-200' onClick={onShow}>
          Show
        </button>
      )} */}
    </section>
  );
}

export default Panel;