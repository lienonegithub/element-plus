import type { App } from 'vue'
import MtBacktop from '@mtui/backtop'
import MtButton from '@mtui/button'
import MtCard from '@mtui/card'
import MtCol from '@mtui/col'
import MtDivider from '@mtui/divider'
import MtEmpty from '@mtui/empty'
import MtImage from '@mtui/image'
import MtImageViewer from '@mtui/image-viewer'
import MtLink from '@mtui/link'
import MtLoading from '@mtui/loading'
import MtRow from '@mtui/row'
import MtScrollBar from '@mtui/scrollbar'
import MtSpace from '@mtui/space'

import { use, i18n } from '@mtui/locale'
// if you encountered problems alike "Can't resolve './version'"
// please run `yarn bootstrap` first
import { version as version_ } from './version'
import type { InstallOptions } from '@mtui/utils/config'
import { setConfig } from '@mtui/utils/config'
import isServer from '@mtui/utils/isServer'
import dayjs from 'dayjs'

type DWindow =  Window & typeof globalThis & {
  dayjs?: typeof dayjs
}

// expose Day.js to window to make full bundle i18n work
if (!isServer) {
  const _window: DWindow = window

  if (!_window.dayjs) {
    _window.dayjs = dayjs
  }
}

const version = version_ // version_ to fix tsc issue

const locale = use

const defaultInstallOpt: InstallOptions = {
  size: '' as ComponentSize,
  zIndex: 2000,
}

const components = [
  MtBacktop,
  MtButton,
  MtCard,
  MtCol,
  MtDivider,
  MtEmpty,
  MtImage,
  MtImageViewer,
  MtLink,
  MtRow,
  MtScrollBar,
  MtSpace,
]

const plugins = [
  MtLoading,
]

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt)
  locale(option.locale)
  if (option.i18n) {
    i18n(option.i18n)
  }
  app.config.globalProperties.$ELEMENT = option
  setConfig(option)

  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}

export {
  MtBacktop,
  MtButton,
  MtCard,
  MtCol,
  MtDivider,
  MtEmpty,
  MtImage,
  MtImageViewer,
  MtLink,
  MtLoading,
  MtRow,
  MtScrollBar,
  MtSpace,
  version,
  install,
  locale,
}

export default {
  version,
  install,
}
