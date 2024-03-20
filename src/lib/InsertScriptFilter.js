import Filter from "./Filter";

export default class InsertScriptFilter extends Filter {
  constructor() {
    super();
  }

  init() {
    this.overrideAppendChild();
    this.overrideInsertBefore();
  }

  overrideAppendChild() {}

  overrideInsertBefore() {}
}
