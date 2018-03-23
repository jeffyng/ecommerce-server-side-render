import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
    return (
        <div>
    <Header />
    <div className="content">
    {JSON.stringify(this.props.path)}
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
    path: state.path.path
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
