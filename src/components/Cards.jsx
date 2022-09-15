import React, { Component } from 'react';

class Cards extends Component {
  render() {
    return (
      <section className="cards">
        <div className="text-center">
          <div className="margin-bottom-big">
            <h2 className="unique-heading">
              Most popular Cards
            </h2>
          </div>
          <div className="row">

            <div className="col-1-of-3">
              <div className="cards-card">
                <div className="cards-card-side cards-card-side-front">
                  <div className="cards-card-img cards-card-img-1">
                    &nbsp;
                  </div>
                  <div className="cards-card-details">
                   <h3 className="h3">
                      USD 10 PSN Card US Discount
                      <div className="only">
                        Only For &#36;12
                      </div>
                    </h3>
                  </div>
                </div>
                <div className="cards-card-side cards-card-side-back cards-card-side-back-bg">
                  <div className="cards-card-back">
                    <div className="cards-price-box">
                      <span className="cards-price-box-only">Only</span>
                      <p className="cards-price-box-value">&#36;12</p>
                    </div>
                    <a href="#" className="btn btn-white">Sign Up Now!</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="cards-card cards-card-scale">
                <div className="cards-card-side cards-card-side-front">
                  <div className="cards-card-img cards-card-img-2">
                    &nbsp;
                  </div>
                  <div className="cards-card-details">
                    <h3 className="h3">
                      USD 25 PSN Card US Discount
                      <div className="only">
                        Only For &#36;23
                      </div>
                    </h3>
                  </div>
                </div>
                <div className="cards-card-side cards-card-side-back cards-card-side-back-bg">
                 <div className="cards-card-back">
                    <div className="cards-price-box">
                      <span className="cards-price-box-only">Only</span>
                      <p className="cards-price-box-value">&#36;23</p>
                    </div>
                    <a href="#" className="btn btn-white">Sign Up Now!</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="cards-card margin-bottom-med">
                <div className="cards-card-side cards-card-side-front">
                  <div className="cards-card-img cards-card-img-3">
                    &nbsp;
                  </div>
                  <div className="cards-card-details">
                    <h3 className="h3">
                      USD 50 PSN Card US Discount
                      <div className="only">
                        Only For &#36;55
                      </div>
                    </h3>
                  </div>
                </div>
                <div className="cards-card-side cards-card-side-back cards-card-side-back-bg">
                  <div className="cards-card-back">
                    <div className="cards-price-box">
                      <span className="cards-price-box-only">Only</span>
                      <p className="cards-price-box-value">&#36;55</p>
                    </div>
                    <a href="#" className="btn btn-white">Book Now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#!" className="btn btn-green">Show All Cards</a>
        </div>
      </section>
    );
  }
}

export default Cards;