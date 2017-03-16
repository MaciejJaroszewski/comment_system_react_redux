import React , { PropTypes } from 'react';
import { Card, Button } from 'react-materialize';

const Post = ({ index, content, date, counter }) => {
  const formatedDate = new Date(date);
  const counterStyles = {
    margin: '0 10px',
    border: '1px solid transparent',
    backgroundColor: 'white',
    padding: '9px 15px',
    borderRadius: '50%'
  };
  const voteButtons = (
    <div key={index}>
      <Button floating waves="light">+</Button>
      <span style={counterStyles}>{ counter }</span>
      <Button floating waves="light" className="red">-</Button>
    </div>
  );

  return (
    <Card className='blue-grey darken-1'
      textClassName='white-text' title={formatedDate.toLocaleString()} actions={[voteButtons]}>
        { content }

    </Card>
  );
};

Post.propTypes = {
  content: PropTypes.string,
  date: PropTypes.number,
  index: PropTypes.number,
  counter: PropTypes.number,

  onAddCounter: PropTypes.func.isRequired,
  onRemoveCounter: PropTypes.func.isRequired
};

export default Post;
