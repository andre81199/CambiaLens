import { Jurisdiction } from './Jurisdiction'
import { ClassValue } from './ClassValue'
import { SymbolPosition } from './SymbolPosition'
import { ClassStatus } from './ClassStatus'
import { ClassDataSource } from './ClassDataSource'

export interface Class {
  symbol: string
  version_indicator: Date
  class_symbol_position: SymbolPosition
  class_value: ClassValue
  action_date: Date
  class_status: ClassStatus
  class_data_source: ClassDataSource
  generating_office: Jurisdiction
  sequence: number
}
