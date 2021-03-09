TypeScript Jest Only Mock for Some Arguments and Use Actual for Others Demo
===========================

在jest中，有时候我们只想mock某个函数在特定参数下的返回值，对于其它情况继续使用真实逻辑。

可以使用jest-when及`jest.requireActual`结合一起让这个过程优雅一点。

```
npm install
npm test
```
