const mockNavigation = jest.useFakeTimers();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return mockNavigation;
  },
}));

jest.mock('@react-native-async-storage/async-storage', () => 'Asyncstore');
