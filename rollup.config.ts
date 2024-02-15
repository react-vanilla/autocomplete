// rollup.config.ts
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import type { RollupOptions } from 'rollup';
import sourcemap from '@rollup/plugin-typescript';

const config: RollupOptions = {
	input: 'src/main.ts',
	output: [
        {
            file: './dist/bundle.js',
            format: 'cjs',
            sourcemap: "inline",
        },
        {
            file: './dist/bundle.min.js',
            format: 'iife',
            name: 'version',
            plugins: [terser()]
        }
	],
	plugins: [json()]
}

export default config;