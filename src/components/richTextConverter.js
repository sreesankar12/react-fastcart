import React from 'react';

const RichText = ({ html }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default RichText;
