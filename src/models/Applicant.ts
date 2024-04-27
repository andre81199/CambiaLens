import { Jurisdiction } from './Jurisdiction'
import { AppType } from './AppType'

export interface Applicant {
  name: string
  sequence: number
  app_type?: AppType
  residence?: Jurisdiction
}
