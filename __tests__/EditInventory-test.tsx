/**
 * @format
 */

import 'react-native';
import React from 'react';
import EditInventory from '../src/screens/Inventory/EditInventory';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native';

const handleDeletePress = jest.fn();

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
            testId: 'testing-btn',
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

  it('Edit button pop alert', async () => {
    let props: any;
    render(<EditInventory {...props} />);

    // const onPressHandles = screen.getByText('Press me');
    // await waitFor(() => screen.getByText('Banana ready'));
    fireEvent.press(screen.getByTestId('delete-btn'));
    // expect(onPressMock).toHaveReturned();
    // expect(handleDeletePress).toBeCalled();
  });
});
