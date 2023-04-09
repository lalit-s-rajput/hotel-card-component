var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { hotelCardCss } from './hotel-card.css';
import { data } from './mockData/mockData';
let hotelCard = class hotelCard extends LitElement {
    constructor() {
        super(...arguments);
        this.hotelInfo = data.result[0];
    }
    render() {
        return html `
      <div class="container">
        <div class="image-container">
          <img src="${this.hotelInfo.main_photo_url}" alt="" />
        </div>
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
};
hotelCard.styles = hotelCardCss;
__decorate([
    property()
], hotelCard.prototype, "hotelInfo", void 0);
hotelCard = __decorate([
    customElement('hotel-card')
], hotelCard);
export { hotelCard };
//# sourceMappingURL=hotel-card.js.map