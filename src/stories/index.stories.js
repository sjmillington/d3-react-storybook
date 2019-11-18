import React from 'react';

import { storiesOf } from '@storybook/react';

import Line from './gettingStarted/Line';
import NonScaledBar from './simple/NonScaledBar';
import ScaledBar from './simple/ScaledBar';
import SVGBarChart from './simple/SVGBarChart';

storiesOf('Getting up and running', module)
  .add('Line Component', () => <Line />)

const simpleData = [20,30,80,85,110,200];

storiesOf('Simple', module)
  .add('Non Scaled Bar Chart', () => <NonScaledBar data={simpleData} />)
  .add('Scaled Bar Chart', () => <ScaledBar data={simpleData} />)
  .add('Created from SVGs', () => <SVGBarChart data={simpleData} />)

