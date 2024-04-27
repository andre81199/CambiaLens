import { Meta, StoryObj } from '@storybook/react'
import { Button as Component } from '../components/ui/Button'

type Story = StoryObj<typeof Component>

const meta: Meta<typeof Component> = {
  title: 'Components/Common/Button',
  component: Component,
  decorators: [],
  args: {}
}

export default meta

export const Button: Story = {
  args: {
    children: 'Button'
  },
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'success', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'radio' }
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'radio' }
    }
  }
}
