import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Collections from '../components/Collections';


import { connect } from 'react-redux';
import { setPath } from '../actions';

class Products extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // React Router provide this.props.location.pathname 
    // mapDispatchToProps provides this.props.setpath
    // this.props.setPath(this.props.location.pathname)
  }

  render() { 
    const path = this.props.path.slice(1);
    const data = this.props.initialData;
    // const title = data[path]['hero']['title'];
    // const image = data[path]['hero']['image'];
    // const collections = data[path]['collections']
    const { collections } = data[path];
    return (
      <div>
        <Header />
        <div className="content">
          <div className="products">
            <Hero />
            {collections.map((collection, index) => {
              return (
                <Collections collectionName={collection.collectionName} products={collection.products} key={index} />)}
              )
            }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  // path: can be seen in react component at this.props.path
  // path from state.'path' is from combineReducers
  // path from state.path.'path' is from setPathReducer
  return {
    path: state.path.path,
    initialData: state.initialData
  }
}

const mapDispatchToProps = (dispatch) => {
  // Takes the pathname from React Router and dispatch to store.

  return {
   setPath: (path) => {
     dispatch(setPath(path));
   }
   }
  }

  


export default connect(mapStateToProps, mapDispatchToProps)(Products);
