import React, { Component } from 'react';
import ItemsList from './ItemsList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <ItemsList />
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
