'use client';

import React from 'react';

import { PinContainer } from '../ui/3d-pin';

function AnimatedPin() {
  return (
    <div className="flex items-center justify-center">
      <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
        <div>test</div>
      </PinContainer>
    </div>
  );
}

export default AnimatedPin;
