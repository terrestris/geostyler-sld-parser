import { Style } from 'geostyler-style';

const lineSimpleLine: Style = {
  name: 'Simple Line',
  rules: [{
    name: '',
    symbolizers: [{
      kind: 'Line',
      color: '#000000',
      width: 3,
      dasharray: [13, 37],
      cap: 'round',
      join: 'miter',
      graphicFill: {
        kind: 'Mark',
        wellKnownName: 'circle',
        color: '#FF0000',
        radius: 3.5
      }
    }]
  }]
};

export default lineSimpleLine;
