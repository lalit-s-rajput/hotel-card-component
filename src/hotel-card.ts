/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {hotelCardCss} from './hotel-card.css';
import {data} from './mockData/mockData';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('hotel-card')
export class hotelCard extends LitElement {
  static override styles = hotelCardCss;

  @property()
  hotelInfo = data.result[0];

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
}

declare global {
  interface HTMLElementTagNameMap {
    'hotel-card': hotelCard;
  }
}
