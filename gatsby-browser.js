import * as React from 'react';
import { createStore, StateMachineProvider } from 'little-state-machine'
import formData from './src/state/formData'
import language from "./src/state/language"

createStore({
  formData,
  language,
})

export const wrapRootElement = ({ element }) => <StateMachineProvider>{element}</StateMachineProvider>

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}