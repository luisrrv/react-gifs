import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  // const gifIds = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"];
  const { gifIds, changeSelectedGif } = props;
  return (
    <div className="gif-list">
      { gifIds.map(
        (gifId) => <Gif className="gif" id={gifId} changeSelectedGif={changeSelectedGif} />
      )}
    </div>
  );
};

export default GifList;
