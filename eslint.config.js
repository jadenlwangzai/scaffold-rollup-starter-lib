import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    {
        ignores: ['lib/**/*', 'node_modules/**/*', 'coverage/**/*'],
    },
    ...tseslint.configs.recommended,
    {
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            ...prettierConfig.rules,
            'prettier/prettier': 'error',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            eqeqeq: ['warn', 'always'],
            'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
        },
    }
);
