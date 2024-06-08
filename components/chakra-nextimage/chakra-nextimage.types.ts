import { BoxProps } from '@chakra-ui/react';
import { ImageProps } from 'next/image';

export interface IChakraNextImageProps
  extends Partial<BoxProps>,
    Pick<ImageProps, 'src' | 'alt' | 'quality' | 'style'> {}
