import React from 'react';

import { storiesOf } from '@storybook/react';

import Line from './gettingStarted/Line';
import NonScaledBar from './bars/NonScaledBar';
import ScaledBar from './bars/ScaledBar';
import SVGBarChart from './bars/SVGBarChart';
import SVGBarChartFromTSV from './bars/SVGBarChartFromTSV';
import RotatedBarChart from './bars/RotatedBarChart';
import ScaleBand from './bars/ScaleBand';
import WithAxes from './bars/WithAxes';
import ThreeLittle from './circles/ThreeLittle';

storiesOf('Getting up and running', module)
  .add('Sample', () => <Line />)

const simpleData = [20,30,80,85,110,200];

storiesOf('Simple Examples with Bar Charts', module)
  .add('Non Scaled Bar Chart', () => <NonScaledBar data={simpleData} />)
  .add('Scaled Bar Chart', () => <ScaledBar data={simpleData} />)
  .add('Created from SVGs', () => <SVGBarChart data={simpleData} />)
  .add('Created from SVGs with data from TSV', () => <SVGBarChartFromTSV/>)
  .add('Rotated', () => <RotatedBarChart />)
  .add('Scale Band Example', () => <ScaleBand />)
  .add('With axes', () => <WithAxes />)

storiesOf('Circles', module)
  .add('Simple Circles', () => <ThreeLittle />)