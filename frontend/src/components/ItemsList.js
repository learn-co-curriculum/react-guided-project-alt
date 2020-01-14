import React from 'react';
import Item from './Item';

const ItemsList = (props) => {
  return (
    <ul>
      {/* Render list of notes here... */}
      <Item />
    </ul>
  );
}

export default ItemsList;
