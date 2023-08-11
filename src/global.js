import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-lato: Lato;
--font-inter: Inter;
--font-dm-sans: 'DM Sans';

/* font sizes */
--font-size-3xs: 0.63rem;
--font-size-5xs: 0.5rem;
--font-size-17xl: 2.25rem;
--font-size-lg: 1.13rem;
--font-size-mid: 1.06rem;
--font-size-xs: 0.75rem;
--font-size-3xl: 1.38rem;
--font-size-5xl: 1.5rem;
--font-size-sm: 0.88rem;
--font-size-mini: 0.94rem;
--font-size-lgi: 1.19rem;
--font-size-base: 1rem;
--font-size-xs-4: 0.71rem;
--font-size-smi-6: 0.79rem;
--font-size-mini-1: 0.88rem;

/* Colors */
--color-darkgray: #ababab;
--color-gainsboro: #d8d8d8;
--color-black: #000;
--color-chocolate-100: #eb6e13;
--color-chocolate-200: rgba(235, 110, 19, 0.5);
--color-white: #fff;
--color-darkorange-100: #fb8f1d;
--color-gray-100: #8f8f8f;
--color-gray-200: #1e2833;
--color-gray-300: rgba(0, 0, 0, 0.2);
--color-gray-400: rgba(0, 0, 0, 0.6);
--color-slategray: #7d7987;
--dark-blue: #1a2b49;
--color-navajowhite: rgba(253, 208, 141, 0.34);

/* Gaps */
--gap-sm: 0.88rem;

/* Paddings */
--padding-0: 0rem;

/* border radiuses */
--br-5xs: 8px;
--br-8xs: 5px;
--br-8xs-6: 4.6px;
--br-11xs-6: 1.6px;
--br-9xs-1: 3.1px;
--br-smi: 13px;

/* Effects */
--shadow: 0px 3.1733579635620117px 19.04px rgba(189, 189, 189, 0.23);
}
`;
