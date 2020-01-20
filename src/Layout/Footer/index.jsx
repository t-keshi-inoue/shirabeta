import React from 'react';
import styled from 'styled-components';
import { theme, NaturalDarkText, LightText, Container } from 'shared';
import { links, techLog } from 'layout/Footer/footerLinks';

const FooterContainer = styled.div`
  display: flex;
  background-color: #3e3e3e;
  justify-content: space-around;
  width: 100vw;
  height: 160px;
  margin-top: 100px;
`;

const Footer = () => {
  const LinkItemMapping = ({ linkItems }) => {
    return linkItems.map(linkItem => {
      return (
        <li key={linkItem.name}>
          <NaturalDarkText as="a" href={linkItem.link}>
            {linkItem.name}
          </NaturalDarkText>
        </li>
      );
    });
  };
  return (
    <FooterContainer className="vertical">
      <Container
        style={{ marginTop: theme.large }}
        justify="space-around"
        width="70vw"
        height="120px"
      >
        <Container className="vertical" style={{ flexGrow: 1 }}>
          <LightText as="h2" fs={theme.large}>
            Livrio
          </LightText>
          <NaturalDarkText fs={theme.small}>
            web created by Takeshi Inoue
          </NaturalDarkText>
        </Container>
        <Container className="horizontal" alignSelf="flex-end" width="300px">
          <Container className="vertical" width="50%">
            <LightText as="h5" fs={theme.medium}>
              TechLog
            </LightText>
            <LinkItemMapping linkItems={techLog} />
          </Container>
          <Container className="vertical" width="50%">
            <LightText as="h5" fs={theme.medium}>
              Links
            </LightText>
            <LinkItemMapping linkItems={links} />
          </Container>
        </Container>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
