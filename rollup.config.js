"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// rollup.config.mjs
var plugin_json_1 = __importDefault(require("@rollup/plugin-json"));
var plugin_terser_1 = __importDefault(require("@rollup/plugin-terser"));
var config = {
    input: 'src/main.js',
    output: [
        {
            file: 'bundle.js',
            format: 'cjs'
        },
        {
            file: 'bundle.min.js',
            format: 'iife',
            name: 'version',
            plugins: [(0, plugin_terser_1.default)()]
        }
    ],
    plugins: [(0, plugin_json_1.default)()]
};
exports.default = config;
