import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import _ from 'lodash';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { readFileSync } from 'fs';

// 使用 Node.js 文件读取方法而不是直接导入 JSON
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

const libraryName = 'eventBus';

export default {
    // 表示入口文件的路径
    input: './src/index.ts',
    // 表示输出文件的内容，它允许传入一个对象或一个数组
    output: [
        // main:定义了npm包的入口文件，browser环境和node环境均可使用
        { file: pkg.main, name: _.camelCase(libraryName), format: 'cjs', sourcemap: true },
        // module:定义npm包的ESM规范的入口文件，browser环境和node环境均可使用
        { file: pkg.module, name: _.camelCase(libraryName), format: 'es', sourcemap: true },
        // browser: browser字段提供一个文件路径作为在浏览器端使用时的模块入口
        // refs: https://zhuanlan.zhihu.com/p/31499310
        { file: pkg.browser, name: _.camelCase(libraryName), format: 'umd', sourcemap: true },
    ],
    watch: {
        include: 'src/**',
    },
    plugins: [
        // 允许从JSON文件中读取数据
        json(),
        // 编译TS文件
        typescript({
            tsconfig: './tsconfig.json',
            exclude: 'node_modules/**',
        }),
        nodeResolve(),
        commonjs(),
        sourcemaps(),
        terser(),
    ],
};
