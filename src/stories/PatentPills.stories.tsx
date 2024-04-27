import { buildPatentHit } from '@/builders'
import { PatentPills as Component } from '@/components/PatentPills'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof Component>

const meta: Meta<typeof Component> = {
  title: 'Components/PatentPills',
  component: Component,
  decorators: [],
  args: {
    doc: buildPatentHit({
      has_sequence: true,
      has_claim: true,
      has_abstract: true
    }).document
  }
}

export default meta

export const PatentPills: Story = {}
