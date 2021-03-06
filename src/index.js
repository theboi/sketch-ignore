import BrowserWindow from 'sketch-module-web-view'

// Required libraries
const DOM = require('sketch/dom')
const UI = require('sketch/ui')
const Settings = require('sketch/settings')

const document = DOM.getSelectedDocument()
// For first time sketch-ignore is ran, set a key to save indicator data
if (Settings.settingForKey('indicator-key') === undefined) {
  Settings.setSettingForKey('indicator-key', '//')
}

// Set indicator variable
var indicator = Settings.settingForKey('indicator-key')

// For first time sketch-ignore is ran on specific document, set a key to save toggle hide/show data
if (Settings.sessionVariable('hideIsOn-key') === undefined) {
  Settings.setSessionVariable('hideIsOn-key', false)
}

const checkForIndicatorMatch = (value) => {
  console.log(value)
  if (value.type === 'Artboard' || value.type === 'SymbolMaster' || value.type === 'Group') {
    value.layers.map(value => {
      checkForIndicatorMatch(value)
    })
  } else {
    // For Artboards/layers not in groups
    if (value.name.startsWith(indicator)) {
      if (Settings.sessionVariable('hideIsOn-key')) {
        value.hidden = false
      } else {
        value.hidden = true
      }
    }
  }
}

// toggleLayers
export const toggleLayers = () => {
  document.pages.map(value => {
    value.layers.map(value => {
      checkForIndicatorMatch(value)
    })
  })

  // Toggle hideIsOn-key variable
  Settings.setSessionVariable('hideIsOn-key', !(Settings.sessionVariable('hideIsOn-key')))
}

// editIndicator
export const editIndicator = () => {
  UI.getInputFromUser(
    "Edit Indicator",
    {
      description: 'sketch-ignore will hide/show files that begin with this indicator text when Toggle Ignored is called. (Case-sensitive)',
      type: UI.INPUT_TYPE.string,
      initialValue: indicator
    },
    (error, value) => {
      if (error) {
        UI.message(`sketch-ignore: No changes were made.`)
        return
      } else {
        Settings.setSettingForKey('indicator-key', value)
        indicator = value
        UI.message(`sketch-ignore: Indicator set to "${indicator}".`)

      }
    }
  )
}

export const openSettings = () => {
  const options = {
    identifier: 'unique.id',
  }

  const browserWindow = new BrowserWindow(options)

  browserWindow.loadURL(require('./settings/settings.html'))
}