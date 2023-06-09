import type {Meta, StoryObj} from '@storybook/react';
import { UncontrolledOnOff } from '../UncontrolledOnOff/UncontrolledOnOff';



const meta: Meta<typeof UncontrolledOnOff> = {

    title: '/OnOffSwitcher/UncontrolledOnOff',
    component: UncontrolledOnOff,
    argTypes: { onClick: { action: 'clicked' } },
};



export default meta;
type Story = StoryObj<typeof UncontrolledOnOff>;





export const OnOff: Story = {
    render: () => <UncontrolledOnOff/>,
};


