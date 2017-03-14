import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Modal, Button, Input } from 'react-materialize';
import Post from './Post';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { getPosts, getForm } from '../selectors';
import { updateInput, addPost } from '../actions';

class App extends React.Component {
  renderForm() {
    return (
      <div style={{marginTop: '30px'}}>
        <Input label="Post content" name='postContent' value={this.props.form.get('input')} onChange={(e) => this.props.updateInput(e.target.value)}/>
        <Button modal='close' onClick={() => this.props.addPost(this.props.form.get('input'))}>Send post</Button>
      </div>
    );
  }

  renderPost(posts) {
    if (posts.size) {
      return posts.map((post, index) => <Post key={index} content={post.get('content')} date={post.get('date')} />);
    }
  }

  render(){
    return (
      <div className="container" style={{marginTop: '80px'}}>
        <Row>
          <Col s={8} offset='s2'>
            { this.renderPost(this.props.posts) }
          </Col>
        </Row>
        <Modal header='Create new post' bottomSheet
          trigger={
            <Button style={{minWidth: '50px', position: 'fixed', top: '20px', right: '45%'}} waves='light'>Create post</Button>
          }>
          {this.renderForm()}
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: getPosts(state),
    form: getForm(state)
  };
}

App.propTypes = {
  posts: ImmutablePropTypes.list,
  form: ImmutablePropTypes.map,

  addPost: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps, {
    addPost,
    updateInput
  }
)(App);
