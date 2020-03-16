// Required libraries
const DOM = require('sketch/dom')
const UI = require('sketch/ui')
const Settings = require('sketch/settings')

const document = DOM.getSelectedDocument()
let test = 'ok';
// For first time sketch-ignore is ran, set a key to save indicator data
if (Settings.settingForKey('indicator-key') === undefined) {
  Settings.setSettingForKey('indicator-key', '\\\\')
}

// Set indicator variable
var indicator = Settings.settingForKey('indicator-key')

// For first time sketch-ignore is ran on specific document, set a key to save toggle hide/show data
if (Settings.sessionVariable('hideIsOn-key') === undefined) {
  Settings.setSessionVariable('hideIsOn-key', false)
}

// toggleLayers
export const toggleLayers = () => {
  document.pages.map(value => {
    value.layers.map(value => {
      if (value.name.startsWith(indicator)) {
        if (Settings.sessionVariable('hideIsOn-key')) {
          value.hidden = false
        } else {
          value.hidden = true
        }
      }
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
        UI.message(`sketch-ignore: Indicator set to "${indicator}". ${test}`)

      }
    }
  )
}

export function onOpenDocument(context) {
  test = 'hello'
}