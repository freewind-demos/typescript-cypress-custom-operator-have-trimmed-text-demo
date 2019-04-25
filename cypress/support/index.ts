// @ts-ignore
const Assertion = chai.Assertion as any;

Assertion.addMethod("textTrimmed", function (expectedString: string) {
  // @ts-ignore
  const $element: JQuery = this._obj;
  new Assertion($element.text().trim()).to.equal(expectedString.trim());
});
