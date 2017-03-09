import React from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { getApp } from '../selectors';
import { Collapsible, CollapsibleItem } from 'react-materialize';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Collapsible popout accordion={true}>
          <CollapsibleItem header='First' icon='filter_drama'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='Second' icon='place'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='Third' icon='whatshot'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    someProp: getApp(state)
  };
}

App.propTypes = {
  someProp: ImmutablePropTypes.map
};

export default connect(
  mapStateToProps, {}
)(App);
