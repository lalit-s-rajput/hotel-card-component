import {css} from 'lit';
export const imageSliderCss = css`
  .disabled {
    display: none;
  }
  .container {
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
  }
  .left-button,
  .right-button {
    position: relative;
    font-size: 40px;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .left-button {
    left: 40px;
  }
  .right-button {
    right: 40px;
  }
`;
