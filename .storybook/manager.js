import {addons} from '@storybook/addons'
import {create} from '@storybook/theming/create'

const theme = create({
  base: 'dark',
  brandTitle: 'UI Exercise',
  brandUrl: 'https://ui.tolbert.design',
})

addons.setConfig({
  showRoots: true,
  panelPosition: 'bottom',
  theme,
})
