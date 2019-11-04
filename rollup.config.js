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
    output: [
        // main:定义了npm包的入口文件，browser环境和node环境均可使用
        { file: pkg.main, name: camelCase(libraryName), format: 'cjs', sourcemap: false },
        // module:定义npm包的ESM规范的入口文件，browser环境和node环境均可使用
        { file: pkg.module, name: camelCase(libraryName), format: 'es', sourcemap: false },
        // browser: browser字段提供一个文件路径作为在浏览器端使用时的模块入口
        // refs: https://zhuanlan.zhihu.com/p/31499310
        { file: pkg.browser, name: camelCase(libraryName), format: 'umd', sourcemap: false },
    ],
    watch: {
        include: 'src/**',
    },
    plugins: [
        // 允许从JSON文件中读取数据
        json(),
        // 编译TS文件
        typescript({
            exclude: 'node_modules/**',
        }),
        commonjs(),
        nodeResolve(),
        sourceMaps(),
    ],
};
