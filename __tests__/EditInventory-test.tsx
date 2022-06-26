/**
 * @format
 */

import 'react-native';
import React from 'react';
import EditInventory from '../src/screens/Inventory/EditInventory';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('EditInventory Screen', () => {
  it('renders correctly', () => {
    let props: any;
    props: createTestProps;
    const mockedParams = {
      route: {
        params: {
          screen: {
            id: '333',
            inventoryName: 'bag',
            stockCount: 2,
            description: 'a great hand bag',
            price: 30,
          },
        },
      },
      navigation: '',
    };

    const tree = renderer
      .create(<EditInventory {...props} {...mockedParams} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
