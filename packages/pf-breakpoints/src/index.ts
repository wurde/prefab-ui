import { css } from "lit-element";

export default {
  mobile: { maxWidth: css`384px` },
  tablet: { minWidth: css`384px`, maxWidth: css`768px` },
  laptop: { minWidth: css`768px`, maxWidth: css`1024px` },
  desktop: { minWidth: css`1024px`, maxWidth: css`1440px` },
  tv: { minWidth: css`1440px` }
};
