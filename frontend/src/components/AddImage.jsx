import React from 'react';

const AddImage = (props) => {
  return (
    <form className='text-center bottom50px' onSubmit={(event) => props.addUser(event)}>
      <input
        name="image"
        type="file"
        placeholder="Choice file"
        required
        onChange={props.handleChange}
      />
      <input
        type="submit"
        value="Submit"
      />
    </form>
  )
};

export default AddImage;
