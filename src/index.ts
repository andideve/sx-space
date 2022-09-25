import { system, compose, SystemConfig, ThemeKey } from '@andideve/sx-core';
import { MarginProps, PaddingProps, SpaceProps } from './types';

const configs: { margin: SystemConfig<MarginProps>; padding: SystemConfig<PaddingProps> } = {
  margin: {},
  padding: {},
};

configs.margin = {
  margin: {
    property: 'margin',
    scale: ThemeKey.space,
  },
  marginTop: {
    property: 'marginTop',
    scale: ThemeKey.space,
  },
  marginRight: {
    property: 'marginRight',
    scale: ThemeKey.space,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: ThemeKey.space,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: ThemeKey.space,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: ThemeKey.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: ThemeKey.space,
  },
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;

configs.padding = {
  padding: {
    property: 'padding',
    scale: ThemeKey.space,
  },
  paddingTop: {
    property: 'paddingTop',
    scale: ThemeKey.space,
  },
  paddingRight: {
    property: 'paddingRight',
    scale: ThemeKey.space,
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: ThemeKey.space,
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: ThemeKey.space,
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: ThemeKey.space,
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: ThemeKey.space,
  },
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;

export const margin = system(configs.margin);
export const padding = system(configs.padding);
export const space = compose<SpaceProps>(margin, padding);

export { MarginProps, PaddingProps, SpaceProps };
export default space;
