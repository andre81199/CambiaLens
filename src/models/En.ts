import { DataFormat } from './DataFormat'
import { Lang } from './Lang'
import { Source } from './Source'

export interface En {
  text: string
  lang: Lang
  source: Source
  data_format: DataFormat
}
