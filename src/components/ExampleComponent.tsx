import React from 'react';

const internalArtifactOnly: boolean = true;

const ExampleComponent: React.FC = () => {
  return (
    <div>
      {internalArtifactOnly ? 'Internal artifact only' : 'Not an internal artifact'}
    </div>
  );
};

export default ExampleComponent;