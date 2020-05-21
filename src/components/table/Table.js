import {ExcelCopmonent} from '../../core/ExcelComponent';
import {createTable} from './table.template'

export class Table extends ExcelCopmonent {
  static className = 'excel__table';

  toHTML() {
    return createTable(20)
  }
}
