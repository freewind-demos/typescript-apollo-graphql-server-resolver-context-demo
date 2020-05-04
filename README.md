TypeScript Apollo GraphQL Server Context Demo
===========================

可以定义一个context对象在不同的resolver之间共享信息，或者获取请求相关的数据供resolver使用。

```
npm install
npm run demo
```

在打开的playground中的地址处填上：http://localhost:4000/?keyword=Park

左边的请求填写：

```
{
  books {
    title
  }
}
```
