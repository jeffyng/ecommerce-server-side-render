import React from 'react';
import { connect } from 'react-redux';

const StoreInfo = (props) => {
  return (
    <div className="store-info">
      <div className="store-info__image-container">
        <img src={props.storeInfo.imageUrl} alt="" className="store-info__image"/>
      </div>
      <div className="store-info__container">

        <div className="store-info__details">
          <h2 className="store-info__details-header">
            <span className="store-info__details-title">Everjane Valencia</span>
          </h2>
          <div className="store-info__details-description">
            <p className="store-info__details-text">
              Come say hello at our SF flagship, located in the heart of the Mission. From shopping our latest collections to learning the stories behind products, there's a lot to explore at our Valencia store. Visit our Returns Bar to make a return, or browse our entire collection online at our Search Bar.
            </p>
          </div>
          <div className="store-info__details-about">
            <div>
              <h3 className="store-info__details-about-header">Location</h3>
              <span className="store-info__details-about-text">461 Valencia Street</span>
              <span className="store-info__details-about-text">San Francisco, CA 94103</span>
            </div>
            <div>
              <h3 className="store-info__details-about-header">Hours</h3>
              <span className="store-info__details-about-text">Monday-Saturday: 11am-8pm</span>
              <span className="store-info__details-about-text">Sunday: 11am-7pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    storeInfo: state.initialData.storeInfo
  }
}
export default connect(mapStateToProps, null)(StoreInfo);
