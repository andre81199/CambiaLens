import { FacetFilterGroup as Component } from '@/components/FacetFilterGroup'
import { Meta, StoryObj } from '@storybook/react'

import AGGREGATIONS from '../fixtures/patent-facets.json'

type Story = StoryObj<typeof Component>

const meta: Meta<typeof Component> = {
  title: 'Components/FacetFilterGroup',
  component: Component,
  decorators: [],
  args: {
    aggregation: AGGREGATIONS.aggregations['inventor.name.exact'],
    label: 'Inventor'
  }
}

export default meta

export const FacetFilterGroup: Story = {}
