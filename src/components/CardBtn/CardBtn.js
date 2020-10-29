import React from "react";
import './CardBtn.css';
import Button from 'react-bootstrap/Button';

function CardBtn () {
    return(
        <>
  <div className="mb-2">
    <Button variant="primary" size="lg">
      Coffee Me
    </Button>{' '}
    </div>
</>
    );
}

export default CardBtn;