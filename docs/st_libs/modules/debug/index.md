# Debug

Debug is a module to improve the management of debug in your scripts.

## Include Debug in your script

1. To use the Debug library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@st_libs/init.lua'
}
```
2. Add the Debug module inside the `fxmanifest.lua` (in lowercase)
```lua
st_libs {
  'debug',
}
```
You can now use the library inside of your resource with the `st.Debug` global variable.

## Functions

Documentation for the [Both](./shared.md) side.  