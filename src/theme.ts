import { PatentLegalStatus } from './models/PatentLegalStatus'

const blue = '#0094d3'
const darkBlue = '#6278d8'
const green = '#78bd4c'
const orange = '#e28604'
const pink = '#ce68d1'
const purple = '#9c5ee1'
const red = '#f32d34'
const teal = '#0e9ca6'
const yellow = '#f4c901'

export const theme = {
  primary: '#076fcb',
  primary2: '#004767',
  primary3: '#001e3c',
  secondary: '#ffb300',
  tertiary: '#479c1a',
  brand: '#1f9cac'
}

export const legalStatusColourScale: Record<PatentLegalStatus, string> = {
  ACTIVE: '#f32d34',
  INACTIVE: '#0099a5',
  EXPIRED: '#479c1a',
  DISCONTINUED: '#479c1a',
  PENDING: 'Rgb(226, 134, 4)',
  PATENTED: '#f32d34',
  UNKNOWN: '#778490'
}

// TODO: refactor

export const metaNoticeColourScale = {
  BIO: '#bb73ca',
  INVENTOR: '#fb7c1f',
  LAYOUT: '#b0c455',
  NOTES: '#8abbed',
  COLLECTIONS: '#d9c567',
  PUBLIC_COLLECTIONS: '#5bb025',
  OPEN_ACCESS: '#f38427'
}

export const metaNoticeColourScaleDark = {
  BIO: '#ca6dcf',
  INVENTOR: '#ca6dcf',
  LAYOUT: '#b0c455',
  NOTES: '#8abbed',
  COLLECTIONS: '#d9c567',
  PUBLIC_COLLECTIONS: '#57ca0d',
  OPEN_ACCESS: '#f38427'
}

export const scholarPillColors = {
  is_open_access: green,
  is_referenced_by_patent: teal,
  has_abstract: blue,
  has_fulltext: blue,
  has_chemical: darkBlue,
  has_funding: purple,
  has_clinical_trial: pink,
  has_affiliation: orange,
  has_field_of_study: yellow,
  is_retracted: red
}
