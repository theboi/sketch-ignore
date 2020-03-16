# sketch-ignore


## Installation

- [Download](../../releases/latest/download/sketch-ignore.sketchplugin.zip) the latest release of the plugin
- Un-zip
- Double-click on sketch-ignore.sketchplugin

## tl;dr

- **Supposedly**, sketch-ignore hides selected layers automatically when uploading to Sketch Cloud, like [`.gitignore`](https://git-scm.com/docs/gitignore).
- **As of now**, sketch-ignore provides a menu bar option to show/hide selected layers.
- Selected layers are indicated by the Indicator, a string of text the layer name begins with (this is `\\\\` by default).


## Purpose

<div style='background-color: #FFCECE; color: black; padding: 10px; width: 100%'>
(!) As of now, since the Sketch Team has <a style='color: #004594' href='https://developer.sketch.com/reference/action/cloud/'>yet to release the documentation for Cloud actions</a>, the plugin is incomplete and you have to manually use a keyboard shortcut to hide/show layers.
</div>

sketch-ignore is supposed to work like [`.gitignore`](https://git-scm.com/docs/gitignore) for Sketch Cloud.
- It ignores specific layers when uploading files to Sketch Cloud.
- This is especially useful when your programmer views your designs from the Sketch Cloud Inspector online and requires to be able to see the specifics of your design.
- Sometimes, you may have layers such as safe areas, that although are transparent, block all your other layers.
- This prevents your programmer from being able to click on to layers underneath the safe area layer. 
- This can be solved by hiding layers that you do not wish to be uploaded.
- However, this is troublesome if you have many such layers.
- Thus, you may use sketch-ignore to hide the layers each time you upload automatically


## Usage

As of now, since the Sketch Team has yet to release the documentation for Sketch Cloud actions, there are only two things you may do:

### Edit Indicator

- Edit the string of text sketch-ignore looks for at the beginning of layer names, when hiding layers. The default indicator is \\\\ (double **backslash**).

### Toggle Layers

- Toggle between hiding and showing layers.
- You may also use the keyboard shortcut, ⌃T (Ctrl T)

<div style='background-color: #CEFFCF; color: black; padding: 10px; width: 100%'>
Feel free to <b>pull request</b> or drop a <b>feedback/suggestion</b> if you have any :) <br />
Check me out at <a style='color: #004594' href='https://ryanthe.com'>ryanthe.com</a> <br />
Thanks for using sketch-ignore!
</div>