import { ScholarPills as Component } from '@/components/ScholarPills'
import { HitSource } from '@/models/HitSource'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof Component>

const meta: Meta<typeof Component> = {
  title: 'Components/ScholarPills',
  component: Component,
  decorators: [],
  args: {
    source: {
      is_open_access: true,
      has_field_of_study: true,
      has_affiliation: true,
      has_abstract: true,
      has_fulltext: true,
      has_orcid: true,
      has_funding: true
    } as HitSource
  }
}

export default meta

export const ScholarPills: Story = {}
