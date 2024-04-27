import { SearchForm as Component } from '@/components/search/SearchForm'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof Component>

const meta: Meta<typeof Component> = {
  title: 'Components/SearchForm',
  component: Component,
  decorators: [],
  args: {
    q: 'glucuronidase',
    setQuery: () => {}
  }
}

export default meta

export const SearchForm: Story = {}
