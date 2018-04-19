# MyReads Project
图书阅读跟踪项目，通过重构该模板中的静态代码来为应用程序添加交互性。使用户在使用该项目的时候，可以自由的搜索图书并添加和更改图书的状态。

## 运行项目

查看该图书项目，需要

* NPM安装所有项目依赖，指令是 `npm install`
* NPM开始启动应用，指令是 `npm start`

## 你将获得以下文件
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md 
├── package.json 
├── public
│   ├── favicon.ico 
│   └── index.html
└── src
    ├── App.css # 应用风格
    ├── App.js #应用程序的根
    ├── App.test.js
    ├── BooksAPI.js #获取服务器数据API
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    └── index.js

## 后端服务器
提供的文件[ ` booksapi.JS ` ]

* [`getAll`](#获取)
* [`update`](#更新)
* [`search`](#搜索)

### `getAll`
使用方法：
```js
getAll()
```

* 返回一个解决方案，该解决方案包含一个包含对象的集合的JSON对象。
* 此集合代表当前在您的应用程序中的书架中的书籍。 

### `update`
使用方法：
```js
update(book, shelf)
```

* book: `<Object>` 图书对象至少包含一个 `id` 属性
* shelf: `<String>` 书架字符串，包含["wantToRead", "currentlyReading", "read"]  
* 返回一个解决方案，该解决方案包含包含POST请求的响应数据的JSON对象 

### `search`
使用方法：

```js
search(query)
```

* query: `<String>`
* 在搜索页面上，您需要确保书籍具有正确的状态。 

## 重要注意点
后端API使用一套固定的缓存搜索结果和有限的一组特定的搜索条件，因此搜索其他则会搜索回不来任何结果。 