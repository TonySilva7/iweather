import '@testing-library/react-native/extend-expect';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

/**
 * Essa configuração é uma opção a criação de uma pasta chamada `@react-native-async-storage/`, dentro de `__mock__/`
 * Veja a doc em: https://react-native-async-storage.github.io/async-storage/docs/advanced/jest
*/ 
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

/**
 * Criação de mock para o módulo `react-native-safe-area-context`
 */
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);