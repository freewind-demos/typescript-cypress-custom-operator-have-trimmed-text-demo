chai.use((chai, utils) => {

  (chai as any).Assertion.addChainableMethod("trimmed", () => {
  }, function () {
    // @ts-ignore
    const obj: JQuery = utils.flag(this, 'object')

    const oldText = obj.text.bind(obj);
    // @ts-ignore
    obj.text = () => {
      return oldText().trim()
    }
  });

})
