import {css} from 'lit';
export const hotelCardCss = css`
  :host {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  p {
    margin: 0;
  }
  .container {
    width: 100%;
    height: 300px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
  }
  .image-container {
    width: 25%;
    height: 100%;
  }
  .image-container img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
  .hotel-info {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin: 10px 20px;
  }
  .display-css {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .m-10 {
    margin: 10px;
  }
  .m-right-left-10 {
    margin-right: 10px;
  }
  .hotel-name {
    color: #006ce4;
  }
  .location-and-map-info a {
    color: #006ce4;
  }
  .distance-from-beach {
    margin: 10px 0;
  }
  .free-cancellation-text {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 10px;
    color: #008234;
  }
  .remaining-rooms-text {
    color: #d4111e;
  }
  .pricing-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
    /* justify-content: flex-end; */
    width: 25%;
  }
  .review-and-rating-badge {
    display: flex;
    justify-content: end;
  }
  .total-review p,
  h3 {
    margin: 0 8px 0 0;
  }
  .rating-badge {
    /* margin: 0 10px; */
  }
  .rating-badge p {
    margin: 0;
    padding: 5px;
    background: #003b95;
    border-radius: 5px;
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
  }
  .price-and-taxes {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    justify-content: flex-end;
  }
  .price-and-taxes p,
  h2 {
    margin: 5px 0;
  }
  .strike-out-price {
    display: flex;
    align-items: center;
  }
  .strike-out-price p {
    margin-right: 5px;
  }
  .see-availability-button {
    width: 70%;
    height: 40px;
    background-color: #006ce4;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: none;
    border: none;
    font-weight: bold;
    text-align: center;
  }
`;
