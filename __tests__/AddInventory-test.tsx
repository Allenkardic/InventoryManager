/**
 * @format
 */

import 'react-native';
import React from 'react';
import AddInventory from '../src/screens/Inventory/AddInventory';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('AddInventory Screen', () => {
  it('renders correctly', () => {
    let props: any;
    props: createTestProps;
    const tree = renderer.create(<AddInventory {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
