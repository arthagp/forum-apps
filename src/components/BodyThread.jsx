import React from 'react';

function BodyThread({ body }) {
  return (
    <div className="thread-item__body">
      <div className="thread-item__body-inner" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}

export default BodyThread;
