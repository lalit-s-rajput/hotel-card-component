/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {data} from './mockData/mockData';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css`
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
    .hotel-info {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 100%;
      margin: 10px;
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
      margin: 0 5px 0 0;
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
      width: 50%;
      height: 40px;
      background-color: #006ce4;
      color: white;
      border-radius: 3px;
      cursor: pointer;
      box-shadow: none;
      border: none;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  @property()
  hotelInfo = data.result[0];

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  override render() {
    return html`
      <div class="container">
        <div class="image-container"></div>
        <div class="hotel-info">
          <div class="name-and-rating-block display-css">
            <h2 class="hotel-name m-right-left-10">
              ${this.hotelInfo.hotel_name}
            </h2>
            <span class="hotel-rating">4 star</span>
          </div>
          <div class="location-and-map-info display-css">
            <p class="location-info">
              <a href="" class="m-right-left-10"
                >${this.hotelInfo.city_trans}</a
              >
            </p>
            <a class="m-right-left-10" href="">Show on map</a>
            <p>${this.hotelInfo.distances[0].text}</p>
          </div>
          <div class="distance-from-beach">
            <p>${this.hotelInfo.distances[1].text}</p>
          </div>
          <div class="configuration-label">
            <p class="m-right-left-10">
              <strong>${this.hotelInfo.accommodation_type_name}</strong>
            </p>
          </div>
          <div class="unit-configuration-label">
            <p>${this.hotelInfo.unit_configuration_label}</p>
          </div>
          <div class="free-cancellation-text">
            <p><strong>Free Cancellation</strong></p>
            <p>You can cancel later, so lock in this great price today.</p>
            <p class="remaining-rooms-text">
              Only 1 left at this price on our site
            </p>
          </div>
        </div>
        <div class="pricing-container">
          <div class="review-and-rating-badge">
            <div class="total-review">
              <h3>${this.hotelInfo.review_score_word}</h3>
              <p>${this.hotelInfo.review_nr} reviews</p>
            </div>
            <div class="rating-badge">
              <p>${this.hotelInfo.review_score}</p>
            </div>
          </div>
          <div class="price-and-taxes">
            <p>2 nights, 2 adults</p>
            <div class="strike-out-price">
              <p>
                <strike>11,020</strike>
              </p>
              <h2>9,918</h2>
            </div>

            <p>+1,190 taxes and charges</p>
            <button class="see-availability-button">See availability ></button>
          </div>
        </div>
      </div>
      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
