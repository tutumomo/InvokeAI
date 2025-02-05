import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle((props) => ({
  fontSize: '9px',
  px: 2,
  py: 1,
  minW: 4,
  lineHeight: 1,
  borderRadius: 'sm',
  bg: `${props.colorScheme}.300`,
  color: 'base.900',
  fontWeight: 'bold',
  letterSpacing: 0.5,
  wordBreak: 'break-all',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}));

export const badgeTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {
    variant: 'solid',
    colorScheme: 'base',
  },
});
