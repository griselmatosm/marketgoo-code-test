import React from 'react';
import { Button } from '@marketgoo/ola';

export default (props) => {
  return (
    <Button as="button" target="_blank" variant="link">
      {props.title}
    </Button>
  );
};
