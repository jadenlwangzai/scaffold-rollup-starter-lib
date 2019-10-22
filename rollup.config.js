import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import sourceMaps from 'rollup-plugin-sourcemaps';
import camelCase from 'lodash.camelcase';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';

import pkg from './package.json';

const libraryName = 'eventBus';

export default {
    // 表示入口文件的路径
    input: './src/index.ts',
    // 表示输出文件的内容，它允许传入一个对象或一个数组
    output: [{ file: pkg.main, name: camelCase(libraryName), format: 'cjs', sourcemap: false }],
    watch: {
        include: 'src/**',
    },
    plugins: [
        // 允许从JSON文件中读取数据
        json(),
        // 编译TS文件
        typescript({ useTsconfigDeclarationDir: false }),
        commonjs(),
        nodeResolve(),
        sourceMaps(),
    ],
};
