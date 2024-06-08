import { Box } from '@chakra-ui/react';
import NextImage from 'next/image';
import React, { CSSProperties, FC } from 'react';

import imageContainerStyle from './chakra-nextimage.styles';
import { IChakraNextImageProps } from './chakra-nextimage.types';

/**
 * Chakra-UI Next-Image component,
 * this component is a combination of chakra ui & next-image to add chakra responsiveness to next-image
 * @param props
 * @returns
 */

// ChakraNextImage Component
const ChakraNextImage: FC<IChakraNextImageProps> = props => {
  const { src, quality, alt, style, ...rest } = props;

  // Define default style
  const defaultStyle: CSSProperties = {
    objectFit: 'cover',
  };

  // Merge incoming style with default
  const mergedStyle: CSSProperties = { ...defaultStyle, ...style };

  const placeholder = typeof src === 'object' ? 'blur' : undefined;

  return (
    // __css={} takes precedence over sx={} styling
    <Box __css={imageContainerStyle} {...rest}>
      <NextImage
        placeholder={placeholder}
        style={mergedStyle}
        fill={true}
        src={src || '/assets/fav.png'}
        alt={alt}
        quality={quality}
      />
    </Box>
  );
};

export default ChakraNextImage;
