export const patentAggregations = {
  'applicant.name.exact': {
    terms: {
      field: 'applicant.name.exact'
    }
  },
  dates: {
    date_histogram: {
      field: 'date_published',
      calendar_interval: 'year',
      min_doc_count: 1,
      format: 'yyyy'
    }
  },
  'legal_status.patent_status': {
    terms: {
      field: 'legal_status.patent_status',
      size: 10
    }
  },
  jurisdiction: {
    terms: {
      field: 'jurisdiction',
      size: 300
    }
  },
  'inventor.name.exact': {
    terms: {
      field: 'inventor.name.exact'
    }
  },
  publication_type: {
    terms: {
      field: 'publication_type',
      size: 20
    }
  }
}
