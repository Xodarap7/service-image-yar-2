import React from 'react';

const AddImage = (props) => {
  return (
    <form onSubmit={(event) => props.addUser(event)}>
      <input
        name="image"
        type="file"
        placeholder="Choice file"
        required
        onChange={props.handleChange}
      />
      <input
        type="submit"
        className="button is-primary is-large is-fullwidth"
        value="Submit"
      />
    </form>
  )
};

export default AddImage;
