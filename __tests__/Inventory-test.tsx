/**
 * @format
 */

import 'react-native';
import React from 'react';
import Inventory from '../src/screens/Inventory';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('Inventory Screen uses props', () => {
  it('renders correctly', () => {
    let props: any;
    props: createTestProps;
    const tree = renderer.create(<Inventory {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
