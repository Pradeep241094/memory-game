import store from 'store'
import { get } from 'lodash'

const appName = 'memoryGame'

const setup = () => {
  if (!store.get(appName)) {
    store.set(appName, {
      settings: {},
      state: null
    });
  }
}

const saveGame = (state) => {
  setup()
  const currentState = store.get(appName)
  const newState = {...currentState, state}
  console.log('>>>>>>>>>>>newState>>>>>>>>>>>>>>>>>>>>', newState);
  store.set(appName, newState)
}

const loadGame = () => {
  setup()
  return store.get(appName).state
}

const clearGame = () => {
  setup()
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>clear game function is called');
  const currentState = store.get(appName)
  const newState = {...currentState, state: null}

  store.set(appName, newState)
}

const saveSettings = (settings) => {
  setup()
  const currentSettings = store.get(appName)
  const newSettings = {...currentSettings, settings}

  store.set(appName, newSettings)
}

const loadSettings = (value) => {
  setup()

  const storedSettings = store.get(appName).settings;

  console.log('>>>>>>>>>>>>>>>>>>>>StoredSettings>>>>>>>>>>>>>>', storedSettings);

  return value
    ? get(store.get(appName).settings, value)
    : storedSettings
}

export {
  clearGame,
  loadGame,
  loadSettings,
  saveGame,
  saveSettings
}
