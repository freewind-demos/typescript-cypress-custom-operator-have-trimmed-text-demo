TypeScript Cypress Add Custom Operator "have.trimmed.text" Demo
==============================================================

利用`chai.Assertion.addChainableMethod`可以实现`have.trimmed.text`.

注意：由于`text`是已经定义好的method(而不是chainableMethod)，所以我们没有办法定义成:
`have.text.trimmed`。相反，可以定义一个chainableMethod `trimmed`，弄成`have.trimmed.text`

另外有一个美中不足：assertion message是由`text`这个method决定的，所以体现不出来trimmed。
不太建议这种做法，还不如直接定义一个`have.textTrimmed`。

```
npm install
npm run test:open

npm run test:run
```
