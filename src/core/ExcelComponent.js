import {DomListener} from './DomListener';

export class ExcelCopmonent extends DomListener {
  constructor($root, options = {} ) {
    super($root, options.listeners)
    this.name = options.name || ''
  }
  // Возвращает шаблон компанента
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}
