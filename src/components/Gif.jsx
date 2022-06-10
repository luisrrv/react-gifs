import React from 'react';

const Gif = (props) => {
  const { id, changeSelectedGif } = props;
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;

  const handleClick = () => {
    changeSelectedGif(id);
  };
  return (
    <div>
      <img onClick={handleClick} src={url} alt="gif" className="gif" />
    </div>
  );
};

export default Gif;
