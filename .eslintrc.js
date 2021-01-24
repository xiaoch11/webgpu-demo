/**
 * ESLint Config for Tencent
 * https://git.code.oa.com/standards/javascript
 *
 *
 * 安装依赖版本：
 *   eslint ^6.8.0
 *   babel-eslint ^10.0.3
 *   eslint-plugin-import ^2.19.1
 *   eslint-plugin-vue ^6.0.1 // 没用vue，未安装此依赖
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    mocha: true  // 添加此项，避免测试文件出现describe it undefined
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2019,
    // ECMAScript modules 模式
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
      jsx: true
    },
    // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false
  },
  extends: [

  ],
  // 校验 .vue 文件
  plugins: [
    'import'
  ],
  globals:{
    window: true,
    $: true,
    _: true,
    qq: true,
    TMap: true
  },
  rules: {
    'brace-style': 'error',
    /**
     * 不要在中括号中添加空格
     */
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    /**
     * 要求打开的块标志和同一行上的标志拥有一致的间距。此规则还会在同一行关闭的块标记和前边的标记强制实施一致的间距。
     */
    'block-spacing': 'error',
    /**
     * 使用驼峰命名法（camelCase）命名对象、函数和实例。
     */
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
        properties: 'never'
      }
    ],
    /**
     * 逗号之前避免使用空格，逗号之后需要使用空格
     */
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    /**
     * 逗号不能前置
     */
    'comma-style': [
      'error',
      'last'
    ],
    /**
     * 要求或禁止文件末尾存在空行
     */
    'eol-last': [
      'error',
      'always'
    ],
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */
    eqeqeq: [
      'error',
      'always'
    ],
    /**
     * 要求或禁止在函数标识符和其调用之间有空格
     */
    'func-call-spacing': [
      'error',
      'never'
    ],
    /**
     * 使用 2 个空格缩进
     */
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild'
        ],
        ignoreComments: false
      }
    ],
    /**
     * 强制在对象字面量的属性中键和值之间使用一致的间距
     */
    'key-spacing': 'error',
    /**
     * 强制在关键字前后使用一致的空格
     */
    'keyword-spacing': [
      'error',
      {
        overrides: {
          if: {
            after: true
          },
          for: {
            after: true
          },
          while: {
            after: true
          },
          else: {
            after: true
          }
        }
      }
    ],
    /**
     * 强制一行的最大长度，限制单行不能超过100个字符，字符串和正则表达式除外。
     */
    'max-len': [
      'error',
      {
        code: 100,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true
      }
    ],
    /**
     * 只有在命名构造器或者类的时候，才用帕斯卡拼命名法（PascalCase），即首字母大写。
     */
    'new-cap': [
      'error',
      {
        properties: false
      }
    ],
    /**
     * 在编写多个方法链式调用(超过两个方法链式调用)时。 使用前导点，强调这行是一个方法调用，而不是一个语句。
     */
    'newline-per-chained-call': [
      'warn',
      {
        ignoreChainWithDepth: 2
      }
    ],
    /**
     * 使用字面量语法创建数组。
     */
    'no-array-constructor': [
      'error'
    ],
    /**
     * 在 case 和 default 的子句中，如果存在声明 (例如. let, const, function, 和 class)，使用大括号来创建块级作用域。
     */
    'no-case-declarations': 'error',
    /**
     * 禁止对使用 const 定义的常量重新赋值
     */
    'no-const-assign': 'error',
    /**
     * 禁止重复定义类的成员
     */
    'no-dupe-class-members': 'error',
    /**
     * 禁止使用 eval
     */
    'no-eval': 'error',
    /**
     * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
     */
    'no-loop-func': 'error',
    /**
     * 使用混合运算符时，用小括号括起来需要一起计算的部分，用括号让代码的优先级明显
     */
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: false
      }
    ],
    /**
     * 禁止连续赋值，比如 foo = bar = 1
     */
    'no-multi-assign': 'error',
    /**
     * 不要使用多个空行填充代码。
     */
    'no-multiple-empty-lines': 'error',
    /**
     * 禁止使用 new Function
     */
    'no-new-func': 'error',
    /**
     * 禁止直接 new Object
     */
    'no-new-object': 'error',
    /**
     * 禁止使用 ++ 或 --
     */
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    /**
     * 避免在行尾添加空格。
     */
    'no-trailing-spaces': 'error',
    /**
     * 变量应先声明再使用，禁止引用任何未声明的变量，除非你明确知道引用的变量存在于当前作用域链上。
     */
    'no-undef': [
      'error'
    ],
    /**
     * 已定义的变量必须使用
     * 但不检查最后一个使用的参数之前的参数
     * 也不检查 rest 属性的兄弟属性
     */
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    /**
     * 禁止出现没必要的转义
     */
    'no-useless-escape': 'error',
    /**
     * 禁止使用 var
     */
    'no-var': 'error',
    /**
     * 禁止属性前有空白
     */
    'no-whitespace-before-property': 'warn',
    /**
     * 强制单个语句的位置
     */
    'nonblock-statement-body-position': [
      'error',
      'beside'
    ],
    /**
     * 强制在大括号中使用一致的空格
     */
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    /**
     * 禁止变量申明时用逗号一次申明多个
     */
    'one-var': [
      'warn',
      'never'
    ],
    /**
     * 避免在赋值语句 = 前后换行。如果你的代码单行长度超过了 max-len 定义的长度而不得不换行， 那么使用括号包裹。
     */
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'none'
        }
      }
    ],
    /**
     * 不要在块的开头使用空白行
     */
    'padded-blocks': [
      'error',
      'never'
    ],
    /**
     * 申明后不再被修改的变量必须使用 const 来申明
     */
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    /**
     * 必须使用解构赋值
     */
    'prefer-destructuring': [
      'warn',
      {
        object: true,
        array: true
      }
    ],
    /**
     * 必须使用模版字符串而不是字符串连接
     */
    'prefer-template': 'error',
    /**
     * 只使用引号标注无效标识符的属性
     */
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false
      }
    ],
    /**
     * 使用单引号 '' 定义字符串
     */
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: false
      }
    ],
    /**
     * parseInt 必须传入第二个参数
     */
    radix: 'warn',
    /**
     * 要加分号
     */
    semi: [
      'error',
      'always'
    ],
    /**
     * 强制在块之前使用一致的空格
     */
    'space-before-blocks': 'error',
    /**
     * 强制在 function 的左括号之前使用一致的空格
     */
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    /**
     * 不要再括号内添加空格
     */
    'space-in-parens': [
      'error',
      'never'
    ],
    /**
     * 要求操作符周围有空格
     */
    'space-infix-ops': 'error',
    /**
     * 注释的斜线或 * 后必须有空格
     */
    'spaced-comment': [
      'error',
      'always'
    ],
    /**
     * 要求或禁止模板字符串中的嵌入表达式周围空格的使用
     */
    'template-curly-spacing': [
      'error',
      'never'
    ],
    /**
     * 要求立即执行的函数使用括号括起来
     */
    'wrap-iife': [
      'error',
      'outside'
    ],
    /**
     * 导入语句前不允许有任何非导入语句
     */
    'import/first': "error",
    /**
     * 禁止重复导入模块
     */
    'import/no-duplicates': "error",
    // 圈复杂度不超过15
    complexity: [
      'warn',
      {
        max: 15
      }
    ]
  },
};
