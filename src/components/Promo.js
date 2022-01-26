import React from 'react';
import styled from 'styled-components';

const Promo = () => {
  return (
    <VideoWrapper
      src='https://vk.com/video_ext.php?oid=280158306&id=456239406&hash=a32f5b5e5aebeded&hd=1&autoplay=1'
      allow='autoplay; encrypted-media; fullscreen; picture-in-picture;'
      frameborder='0'
      allowfullscreen
    />
  );
};

const VideoWrapper = styled.iframe`
  position: relative;
  border: none;
  height: 90%;
  width: 90%;
`;

export default Promo;
