import React , { PropTypes } from 'react';
import { Card } from 'react-materialize';

const Post = ({ index, content, date }) => {
  const formatedDate = new Date(date);
  return (
    <Card className='blue-grey darken-1'
      textClassName='white-text' title={formatedDate.toLocaleString()}>
      { content }
    </Card>
  );
};

Post.propTypes = {
  content: PropTypes.string,
  date: PropTypes.number,
  index: PropTypes.number
};

export default Post;
