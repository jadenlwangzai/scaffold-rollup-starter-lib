// 参考：https://ts.xcatliu.com/engineering/lint#zai-typescript-zhong-shi-yong-eslint
// 参考：https://github.com/forthealllight/blog/issues/45
// 参考：https://www.jianshu.com/p/fed0fbf95172
export default {
    root: true,
    parser: '@typescript-eslint/parser', //定义ESLint的解析器
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    env: {
        //指定代码的运行环境
        browser: true,
        node: true,
        jest: true,
        es6: true,
    },
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        eqeqeq: ['warn', 'always'],
        'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
        '@typescript-eslint/indent': ['error', 4, { VariableDeclarator: 4, SwitchCase: 1 }],
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-triple-slash-reference': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/triple-slash-reference': [
            'error',
            { path: 'always', types: 'never', lib: 'never' },
        ],
    },
    ignorePatterns: ['lib/**/*', 'node_modules/**/*']
};
