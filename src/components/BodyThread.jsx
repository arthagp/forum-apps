import React from 'react';

function BodyThread({ body }) {
  return (
    <div className="thread-item__body" dangerouslySetInnerHTML={{ __html: body }} />
  );
}

export default BodyThread;
