import { Nav as Component } from '@/components/Nav'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof Component>

const meta: Meta<typeof Component> = {
  title: 'Components/Nav',
  component: Component,
  decorators: []
}

export default meta

export const Nav: Story = {}
