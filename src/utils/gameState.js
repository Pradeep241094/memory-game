import store from 'store';
import { get } from 'lodash';

export const appName = 'memoryGame';

const setup = () => {
  if (!store.get(appName)) {
    store.set(appName, {
      settings: {},
      state: null,
    });
  }
} // function to initialize the game.

const saveGame = (state) => {
  setup()
  const currentState = store.get(appName)
  const newState = {...currentState, state}
  store.set(appName, newState)
} // function to update the store with the newState elements.

const resetGame = () => {
  // console.log('>>>>>>>>>>>>>>>>>resetFunctionCalled>>>>>>...')
  window.localStorage.clear()
};

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

const saveSettings = (settings) => {  //{ playerSize : 1 }
  // console.log('Prev State: ', window.localStorage);
  setup()
  const currentSettings = store.get(appName);
  currentSettings.settings = { ...currentSettings.settings, ...settings  };
  const newSettings = Object.assign({}, currentSettings);  //{...currentSettings, settings}
  store.set(appName, newSettings);
  // console.log('Next State: ', window.localStorage);
}

const loadSettings = (value) => {
  // console.log('Current State: ', window.localStorage);
  setup()
  const storedSettings = store.get(appName).settings;
  return value
    ? get(store.get(appName).settings, value)
    : storedSettings;
}

export {
  clearGame,
  loadGame,
  loadSettings,
  saveGame,
  saveSettings,
  resetGame
}
