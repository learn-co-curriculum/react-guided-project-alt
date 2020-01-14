import React, { Component } from 'react';

class Editor extends Component {
  render() {
    return (
      <form className="editor">
        <input type="text" name="title" />
        <textarea name="body" />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default Editor;
