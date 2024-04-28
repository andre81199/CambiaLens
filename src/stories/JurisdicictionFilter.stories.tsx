import { FacetFilterGroup as Component } from '@/components/FacetFilterGroup'
import { Meta, StoryObj } from '@storybook/react'

import AGGREGATIONS from '../fixtures/patent-facets.json'
import { within, userEvent, expect } from '@storybook/test'

type Story = StoryObj<typeof Component>

const meta: Meta<typeof Component> = {
  title: 'Components/FacetFilterGroup',
  component: Component,
  decorators: [],
  args: {
    aggregation: AGGREGATIONS.aggregations['jurisdiction'],
    label: 'Jurisdiction'
  }
}

export default meta

export const JurisdictionFilter: Story = {}

//Interaction tests
export const SearchJurisdictionFilter: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const searchInput = await canvas.getByPlaceholderText('Search...')

    await userEvent.click(searchInput)
    await userEvent.type(searchInput, 'WO')

    expect(await canvas.findByText('WO')).toBeInTheDocument()
    expect(searchInput).toHaveValue('WO')
  }
}

export const CheckedJurisdictionFilter: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const checkedUsJurisdiction = await canvas.getByText('US')

    await userEvent.click(checkedUsJurisdiction)
  }
}

export const LoadMoreJurisdiction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const loadMore = await canvas.getByText('Load More')
    const loadMoreWindow = await canvas.getByText('Load More')

    await userEvent.click(loadMore)

    expect(loadMoreWindow).toBeInTheDocument()
  }
}

export const RefineJurisdiction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const checkedUsJurisdiction = await canvas.getByText('US')
    const checkedWOJurisdiction = await canvas.getByText('WO')
    await userEvent.click(checkedUsJurisdiction)
    await userEvent.click(checkedWOJurisdiction)

    const refineBtn = await canvas.getByText('Refine')
    await userEvent.click(refineBtn)
  }
}

export const ViewFacetAnalysis: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const ellipsisDropdown = await canvas.getByLabelText('ellipsis dropdown')

    await userEvent.click(ellipsisDropdown)
  }
}

export const ClearJurisdiction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const checkedUsJurisdiction = await canvas.getByText('US')
    await userEvent.click(checkedUsJurisdiction)

    const refineBtn = await canvas.getByText('Refine')
    await userEvent.click(refineBtn)

    const clearBtn = await canvas.getByText('Clear')
    await userEvent.click(clearBtn)

    expect(clearBtn).not.toBeInTheDocument()
  }
}
