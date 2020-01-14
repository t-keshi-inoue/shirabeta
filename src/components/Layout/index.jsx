import React from 'react';
import { MainWrapper, Text, Spacing, Container } from 'Shared';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer/index';
import { Loading } from 'Shared';
import GlobalStyles from 'Shared/GlobalStyle';
const Layout = ({ children }) => {
  return (
    <>
      <Container className="vertical" align="center" height="100%">
        <Header />
        <GlobalStyles />
        <Text>helo</Text>
        <Spacing mTop="40px" />
        <MainWrapper>{children}</MainWrapper>
        <Spacing pBottom="150px" />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
