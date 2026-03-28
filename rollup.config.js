import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

const libraryName = 'eventBus';

export default {
    input: './src/index.ts',
    output: [
        {
            file: pkg.main,
            name: libraryName,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: pkg.module,
            name: libraryName,
            format: 'es',
            sourcemap: true,
        },
        {
            file: pkg.browser,
            name: libraryName,
            format: 'umd',
            sourcemap: true,
        },
    ],
    watch: {
        include: 'src/**',
    },
    plugins: [
        json(),
        typescript({ tsconfig: './tsconfig.json' }),
        nodeResolve(),
        commonjs(),
        terser(),
    ],
};
