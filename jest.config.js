module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testPathIgnorePatterns: [ // ignorar pastas que não deseja que o jest faça testes
    './src/__mocks__',
    './src/coverage',
  ],
  transformIgnorePatterns: [ // ignorar pastas que não deseja que o jest faça transformação
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)'
  ],
  transform: { // informar quais arquivos deseja que o jest faça transformação
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transformer-svg'
  },
  collectCoverageFrom: [ // informar quais arquivos deseja que o jest faça a cobertura de testes
    './src/**/*.{ts,tsx}', 
    '!./src/**/styles.ts'
  ],
  coveragePathIgnorePatterns: [ // informar quais pastas deseja ignorar na cobertura de testes
    './src/@types',
    './src/styles',
    './src/libs/dayjs',
    './src/__mocks__',
  ],
  coverageDirectory: './coverage', // pode ser qualquer diretório que vc informar aqui.
}
