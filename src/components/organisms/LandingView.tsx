import React, { FC } from 'react';
import LandingToSign from 'containers/organisms/LandingToSign';
import { theme, Box, Text, Spacing, Strong } from 'components/atoms';
import MainWrapper from 'components/molecules/MainWrapper';
import HeroHeader from 'components/molecules/HeroHeader';

type Props = {
  authState: boolean;
};

const LandingView: FC<Props> = ({ authState }) => {
  if (authState === true) {
    return null;
  }

  return (
    <Box
      height="58vh"
      style={{ borderBottom: `0.5px solid ${theme.naturalDark}` }}
    >
      <HeroHeader />
      <MainWrapper>
        <Box className="vertical" justify="center">
          <Text className="h2 responsive" as="h1" color={theme.primary}>
            <Strong>How developers read is here.</Strong>
          </Text>
          <Spacing mTop={theme.medium} />
          <Text as="p" className="subtitle1" color={theme.primary}>
            Livrioはチームのための図書管理サービスです。参考になる良書をみんなで共有したいとき、
            あるいは他のチームメイトに推薦したい本があるときにご活用ください。
          </Text>
        </Box>
        <Spacing mRight={theme.large} />
        <Box basis="400px" align="center">
          <LandingToSign />
        </Box>
      </MainWrapper>
    </Box>
  );
};

export default LandingView;
