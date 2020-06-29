<!--
 * @Author: SilvesterChiao
 * @Date: 2020-05-11 14:23:40
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-11 16:28:33
 -->

# Babel 插件

各插件及用途
- Plugin 在 Preset 之前执行
- Plugin 从前向后执行
- Preset 从后向前执行

env 包含 es2015, es2016, es2017
    [babel-preset-env]()
    [@babel/preset-env]()

- ES3
    - member-expression-literals
    - property-literals
    - reserved-words
- ES5
    - property-mutators
- ES2015 (babel-preset-es2015)
    - arrow-functions
    - block-scoped-functions
    - block-scoping
    - classes
    - computed-properties
    - destructuring
    - duplicate-keys
    - for-of
    - function-name
    - instanceof
    - literals
    - new-target
    - object-super
    - parameters
    - shorthand-properties
    - spread
    - sticky-regex
    - template-literals
    - typeof-symbol
    - unicode-regex
- ES2016
    - exponentiation-operator
- ES2017
    - async-to-generator: async 函数
        [babel6 插件 npm 地址](https://www.npmjs.com/package/babel-plugin-transform-async-generator-functions)
        [babel7 插件 npm 地址](https://www.npmjs.com/package/@babel/plugin-proposal-async-generator-functions)
- ES2018
    - async-generator-functions
    - dotall-regex
    - named-capturing-groups-regex
    - object-rest-spread
    - optional-catch-binding
    - unicode-property-regex
- Modules: 模块相关
    - modules-amd
    - modules-commonjs
    - modules-systemjs
    - modules-umd
- Experimental: 实验性的
    - class-properties
    - decorators
    - do-expressions
    - export-default-from
    - export-namespace-from
    - function-bind
    - function-sent
    - logical-assignment-operators
    - nullish-coalescing-operator
    - numeric-separator
    - optional-chaining
    - partial-application
    - pipeline-operator
    - private-methods
    - throw-expressions
- Minification
    - inline-consecutive-adds
    - inline-environment-variables
    - member-expression-literals
    - merge-sibling-variables
    - minify-booleans
    - minify-builtins
    - minify-constant-folding
    - minify-dead-code-elimination
    - minify-flip-comparisons
    - minify-guarded-expressions
    - minify-infinity
    - minify-mangle-names
    - minify-numeric-literals
    - minify-replace
    - minify-simplify
    - minify-type-constructors
    - node-env-inline
    - property-literals
    - regexp-constructors
    - remove-console
    - remove-debugger
    - remove-undefined
    - simplify-comparison-operators
    - undefined-to-void
- React
    - react-constant-elements
    - react-display-name
    - react-inline-elements
    - react-jsx
    - react-jsx-compat
    - react-jsx-self
    - react-jsx-source
- 其他
    - external-helpers
    - flow-strip-types
    - jscript
    - object-assign
    - object-set-prototype-of-to-assign
    - proto-to-assign
    - regenerator
    - runtime
    - strict-mode
    - typescript

## 第三方插件

- [transform-decorators-legacy](https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy): 装饰器
- [transform-class-properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties): 静态属性
- [transform-object-rest-spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread): 解构赋值及对象的扩展属性
- [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import): 模块化导入插件

## 参考链接

1. [Babel 插件](https://www.babeljs.cn/docs/plugins)
