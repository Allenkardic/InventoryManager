/**
 * @format
 */

import 'react-native';
import React from 'react';
import Inventory from '../src/screens/Inventory';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// const mockNavigation = jest.useFakeTimers();

describe('Inventory Screen', () => {
  it('renders correctly', () => {
    let props: any;
    const tree = renderer.create(<Inventory {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
