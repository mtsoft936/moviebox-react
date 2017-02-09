import React from 'react';
import Trailer from './Trailer';
import { Col } from 'react-bootstrap';

export default function TrailerList({data}) {
    let trailers = data.map(function(trailer) {
      return(
        <Col xs={12} sm={6} md={4} key={trailer.id} >
          <Trailer trailer={trailer} />
        </Col>
      );
    });

    const style = {
      marginTop: '15px'
    };

    const titleStyle = {
      paddingLeft: '20px'
    };

    return(
      <div>
        <h3 style={titleStyle}>Trailers</h3>
        <div style={style}>{trailers}</div>
      </div>
    );
}
