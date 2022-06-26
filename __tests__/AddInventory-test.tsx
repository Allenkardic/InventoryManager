/**
 * @format
 */

import 'react-native';
import React from 'react';
import AddInventory from '../src/screens/Inventory/AddInventory';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('AddInventory Screen', () => {
  it('renders correctly', () => {
    let props: any;
    const tree = renderer.create(<AddInventory {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
