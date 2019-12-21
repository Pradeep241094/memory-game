import store from 'store';
import { get } from 'lodash';

const appName = 'memoryGame';

const setup = () => {
  if (!store.get(appName)) {
    store.set(appName, {
      settings: {},
      state: null
    });
  }
} // function to initialize the game.

const saveGame = (state) => {
  setup()
  const currentState = store.get(appName)
  const newState = {...currentState, state}
  console.log('>>>>>>>>>>>newState>>>>>>>>>>>>>>>>>>>>', newState);
  store.set(appName, newState)
} // function to update the store with the newState elements.

const loadGame = () => {
  setup()
  return store.get(appName).state
} // function to load the game with the initial state.

const clearGame = () => {
  setup()
  const currentState = store.get(appName)
  const newState = {...currentState, state: null}

  store.set(appName, newState)
} // function to reset the game

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
