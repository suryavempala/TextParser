import React from 'react'

export default function About(props) {
  return (
   <div className='bg-dark'> <ul className={`list-group list-group-flush`}>
  <li className={`list-group-item bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}>Text parser used to do text editings </li>
  <li className={`list-group-item bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}>Upper cases </li>
  <li className={`list-group-item bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}>lowercases</li>
  <li className={`list-group-item bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}>clearing and cleaning </li>
</ul>
</div>
  )
}
