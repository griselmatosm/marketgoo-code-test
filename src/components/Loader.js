import React from 'react';
import { Spinner } from '@marketgoo/ola';

const Loader = (props) => {
  return (
    <figure>
      <Spinner className={null} size="medium" />
    </figure>
  );
};

export default Loader;
