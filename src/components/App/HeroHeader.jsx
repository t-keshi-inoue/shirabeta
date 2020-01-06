import React from 'react';
import styled from 'styled-components';
import heroImage from '../../images/heroImage.jpg';
import { ImgContainer, Border } from '../../shared';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  z-index: -1;
`;

const HeroHeader = () => {
  return (
    <Wrapper>
      <Border className="shadow">
        <ImgContainer
          className="shadow"
          image={heroImage}
          width="100vw"
          height="65vh"
        />
      </Border>
    </Wrapper>
  );
};

export default HeroHeader;