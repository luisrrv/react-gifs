import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [ selectedGif, setSelectedGif ] = useState("gG6OcTSRWaSis");
  const [ gifIds, setGifIds ] = useState(["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"]);

  // const selectedGif = "gG6OcTSRWaSis";
  // const gifIds = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"];

  const fetchGiphyAPI = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const ids = res.data.map((gif) => gif.id);
      setGifIds(ids);
    });
  };
  const changeSelectedGif = (newSelectedGifId) => {
    setSelectedGif(newSelectedGifId);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphyAPI={fetchGiphyAPI} />
        <div className="selected-gif">
          <Gif id={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} changeSelectedGif={changeSelectedGif} />
      </div>
    </div>
  );
};

export default App;
