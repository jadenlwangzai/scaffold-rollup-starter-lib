# Scaffold Rollup Lib

A modern TypeScript library scaffold with Rollup bundling.

## Features

- 📦 [Rollup](https://rollupjs.org/) for bundling
- 🔥 TypeScript for type checking
- 📏 ESLint for code linting
- 💅 Prettier for code formatting
- 🃏 Jest for testing
- 📋 Commitizen for structured commit messages
- 🔬 CommitLint for ensuring commit message follows convention
- 👷 Github Actions for CI/CD
- 📝 Standard Version for versioning and CHANGELOG generation

## Installation

```bash
npm install
# or
yarn
# or
pnpm install
```

## Development

```bash
# Start development with watch mode
npm run dev

# Build the library
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run linter
npm run eslint:fix

# Format code
npm run prettier
```

## Project Structure

```
scaffold-rollup-lib/
├── .github/           # GitHub related files like workflows
├── lib/               # Compiled output (not versioned)
├── src/               # Source code
│   ├── __tests__/     # Tests
│   └── index.ts       # Entry point
├── .editorconfig      # Editor configuration
├── .eslintrc.js       # ESLint configuration
├── .gitignore         # Git ignore rules
├── .huskyrc           # Husky configuration
├── .lintstagedrc      # Lint-staged configuration
├── .nvmrc             # Node version
├── .prettierrc        # Prettier configuration
├── jest.config.js     # Jest configuration
├── package.json       # NPM package configuration
├── README.md          # README file
├── rollup.config.js   # Rollup configuration
└── tsconfig.json      # TypeScript configuration
```

## Publishing

```bash
# Create a new release (patch, minor, or major)
npm run release
npm run release:patch
npm run release:minor
npm run release:major

# Publish to npm
npm publish
```

## Contributing

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes using commitizen: `npm run commit`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License

MIT

