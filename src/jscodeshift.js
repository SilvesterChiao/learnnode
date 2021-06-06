const jcs = require('jscodeshift');

const code = `
import React from 'react';
import { Button } from 'antd';
`;
const root = jcs(code);

/**
 * root.__defineGetter__
 * root.__defineSetter__
 * root.__lookupGetter__
 * root.__lookupSetter__
 * root.__proto__
 * root.hasOwnProperty
 * root.isPrototypeOf
 * root.propertyIsEnumerable
 * root.toLocaleString
 * root.toString
 * root.valueOf
 * 
 * root.at
 * root.childElements
 * root.childNodes
 * root.closest
 * root.closestScope
 * root.constructor
 * root.every
 * root.filter
 * root.find
 * root.findJSXElements
 * root.findJSXElementsByModuleName
 * root.findVariableDeclarators
 * root.forEach
 * root.get
 * root.getAST
 * root.getTypes
 * root.getVariableDeclarators
 * root.insertAfter
 * root.insertBefore
 * root.isOfType
 * root.length
 * root.map
 * root.nodes
 * root.paths
 * root.remove
 * root.renameTo
 * root.replaceWith
 * root.size
 * root.some
 * root.toSource
 * 
 * root.__paths
 * root._parent
 * root._types
 */

/**
 * 节点类型
 * Identifier: 标识符
 * Literal: 字面量
 * RegExpLiteral: 正则字面量
 * Programs: 根节点, 完整的程序代码树
 * Functions: 函数声明或函数表达式
 * Statement: 节点
 * ExpressionStatement: 表达式语句节点
 * BlockStatement: 块语句节点
 * EmptyStatement: 空节点
 * DebuggerStatement: debugger 节点
 * WithStatement: with 语句节点
 * ReturnStatement: 返回语句节点
 * LabeledStatement: label 语句节点
 * BreakStatement: break 语句节点
 * ContinueStatement: continue 语句节点
 * IfStatement: if 语句节点
 * SwitchStatement: switch 语句节点
 * SwitchCase: switch 语句的 case 节点
 * ThrowStatement: throw 语句节点
 * TryStatement: try 语句节点
 * CatchClause: catch 节点
 * whileStatement: while 语句节点
 * DoWhileStatement: do/while 语句节点
 * ForStatement: for 循环语句节点
 * ForInStatement: for/in 语句节点
 * Declarations: 声明语句节点
 * FunctionDeclaration: 函数声明
 * VariableDeclaration: 变量声明
 * VariableDeclarator: 变量声明的描述
 * Expressions: 表达式节点
 * ThisExpression: this 表达式
 * ArrayExpression: 数组表达式
 * ObjectExpression: 对象表达式
 * Property: 对象表达式中的属性节点
 * FunctionExpression: 函数表达式
 * UnaryExpression: 一元运算符表达式节点
 * UnaryOperator: 一元运算符
 * UpdateExpression: update 运算表达式节点
 * UpdateOperator: update 运算符
 * BinaryExpression: 二元运算表达式节点
 * BinaryOperator: 二元运算符
 * AssignmentExpression: 赋值表达式节点
 * AssignmentOperator: 赋值运算符
 * LogicalExpression: 逻辑运算表达式
 * LogicalOperator: 逻辑运算符
 * MemberExpression: 成员表达式节点
 * ConditionalExpression: 条件表达式
 * CallExpression: 函数调用表达式
 * NewExpression: new 表达式
 * SequenceExpression: 逗号运算符
 */

// find
root.find(jcs.ImportDeclaration, { source: { value: 'antd' } }).forEach(path => {
    console.log(path.node.source.value);
});

// create
root.find(jcs.ImportDeclaration, { source: { value: 'antd' } }).forEach(path => {
    const { specifiers } = path.node;
    specifiers.push(jcs.importSpecifier(jcs.identifier('Select')));
})

console.log(root.toSource());

// update
root.find(jcs.ImportDeclaration, { source: { value: 'antd' } }).forEach(path => {
    const { specifiers } = path.node;
    specifiers.forEach(spec => {
        if (spec.imported.name === 'Button') {
            spec.imported.name = 'Input';
        }
    });
});

console.log(root.toSource());

// delete
root.find(jcs.ImportDeclaration, { source: { value: 'antd' } }).forEach(path => {
    jcs(path).replaceWith('');
})

console.log(root.toSource());
