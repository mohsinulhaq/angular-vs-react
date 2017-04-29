import React from 'react';

const Card = (props) => {
  return (
    <div>
      <hr/>
      {props.name}
      <br/>
      {props.branch}
      <hr/>
    </div>
  );
};

export default Card;
