const currentPath = process.cwd()

module.exports = {
  rootDir: currentPath,
  automock: false,
  resetModules: true,
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: '<rootDir>/.coverage',
  testPathIgnorePatterns: ['/generator-package/'],
  moduleNameMapper: {
    '\\.(scss|md)$': `${__dirname}/__mocks__/Empty.js`,
    '\\.(css)$': `${__dirname}/__mocks__/style.css`,
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${__dirname}/__mocks__/File.js`
  },
  setupFiles: ['raf/polyfill'],
  verbose: true,
  globals: {
    window: {}
  }
}
