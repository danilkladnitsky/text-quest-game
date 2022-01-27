import React from 'react';
import styled from 'styled-components';

const Promo = () => {
  return (
    <VideoWrapper
      src='https://vk.com/video_ext.php?oid=91390312&id=456240826&hash=fea33455ebef84f0&hd=2&autoplay=1'
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
