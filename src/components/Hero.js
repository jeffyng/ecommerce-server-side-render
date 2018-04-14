import React from 'react';
import { connect } from 'react-redux';

const Hero = (props) => {
  const style = {
    backgroundImage: `url(${props.imageUrl})`
  }

  return (
    <div className="hero">
      <h2 className="hero__title">{props.title}</h2>
      <div className="hero__image-container"><img src={props.imageUrl} alt='jeans' className="hero__image"/></div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const path = state.path.path.slice(1);
  return {
    title: state['initialData'][path]['hero']['title'],
    imageUrl: state['initialData'][path]['hero']['imageUrl']
  }
}

export default connect(mapStateToProps)(Hero);
