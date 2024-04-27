export const defaultScholarAggs = {
  'author.affiliation.name.keyword': {
    terms: {
      field: 'author.affiliation.name.keyword'
    }
  },
  dates: {
    date_histogram: {
      field: 'date_published_sort',
      calendar_interval: 'year',
      min_doc_count: 1,
      format: 'yyyy'
    }
  },
  'author.display_name_orcid': {
    terms: {
      field: 'author.display_name_orcid'
    }
  },
  'author.affiliation.address.country_code': {
    terms: {
      field: 'author.affiliation.address.country_code',
      size: 200
    }
  },
  'author.display_name.keyword': {
    terms: {
      field: 'author.display_name.keyword'
    }
  }
}
