import React from 'react';
import { Box, Image, Snackbar } from 'components/atoms';
import { LayoutCommon } from 'components/organisms/Layout/LayoutCommon';

const LayoutWithImage = ({ children, image, basis }) => {
  return (
    <Box className="wrap-sm">
      <Image
        basis={basis ? basis : '40%'}
        bgSize="contain"
        grow={1}
        image={image}
        height="auto"
        style={{ minHeight: '300px' }}
      />
      <Box grow={1} width="500px">
        {children}
      </Box>
    </Box>
  );
};

export default LayoutWithImage;
