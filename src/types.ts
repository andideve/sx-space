import { ResponsiveValue, CSSProperties } from '@andideve/sx-core';

interface BaseMarginProps {
  margin?: ResponsiveValue<CSSProperties['margin']>;
  marginTop?: ResponsiveValue<CSSProperties['marginTop']>;
  marginRight?: ResponsiveValue<CSSProperties['marginRight']>;
  marginBottom?: ResponsiveValue<CSSProperties['marginBottom']>;
  marginLeft?: ResponsiveValue<CSSProperties['marginLeft']>;
  marginX?: ResponsiveValue<CSSProperties['marginRight'] | CSSProperties['marginLeft']>;
  marginY?: ResponsiveValue<CSSProperties['marginTop'] | CSSProperties['marginBottom']>;
}
interface OtherMarginProps {
  m?: BaseMarginProps['margin'];
  mt?: BaseMarginProps['marginTop'];
  mr?: BaseMarginProps['marginRight'];
  mb?: BaseMarginProps['marginBottom'];
  ml?: BaseMarginProps['marginLeft'];
  mx?: BaseMarginProps['marginX'];
  my?: BaseMarginProps['marginY'];
}
export type MarginProps = BaseMarginProps & OtherMarginProps;

interface BasePaddingProps {
  padding?: ResponsiveValue<CSSProperties['padding']>;
  paddingTop?: ResponsiveValue<CSSProperties['paddingTop']>;
  paddingRight?: ResponsiveValue<CSSProperties['paddingRight']>;
  paddingBottom?: ResponsiveValue<CSSProperties['paddingBottom']>;
  paddingLeft?: ResponsiveValue<CSSProperties['paddingLeft']>;
  paddingX?: ResponsiveValue<CSSProperties['paddingRight'] | CSSProperties['paddingLeft']>;
  paddingY?: ResponsiveValue<CSSProperties['paddingTop'] | CSSProperties['paddingBottom']>;
}
interface OtherPaddingProps {
  p?: BasePaddingProps['padding'];
  pt?: BasePaddingProps['paddingTop'];
  pr?: BasePaddingProps['paddingRight'];
  pb?: BasePaddingProps['paddingBottom'];
  pl?: BasePaddingProps['paddingLeft'];
  px?: BasePaddingProps['paddingX'];
  py?: BasePaddingProps['paddingY'];
}
export type PaddingProps = BasePaddingProps & OtherPaddingProps;

export type SpaceProps = MarginProps & PaddingProps;
