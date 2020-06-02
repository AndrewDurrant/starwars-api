import React from 'react';

export default function Item(props) {
  console.log(props)
  return (
    <li>
      <h2>{ props.character.name }</h2>
    </li>
  )
}