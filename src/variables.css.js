const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const minWidth = {
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  xxl: `(min-width: ${breakpoints.xxl}px)`,
};

export const maxWidth = {
  sm: `(max-width: ${breakpoints.sm - 1}px)`,
  md: `(max-width: ${breakpoints.md - 1}px)`,
  lg: `(max-width: ${breakpoints.lg - 1}px)`,
  xl: `(max-width: ${breakpoints.xl - 1}px)`,
  xxl: `(max-width: ${breakpoints.xxl - 1}px)`,
};
