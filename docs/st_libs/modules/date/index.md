# Date

Date is a module to improve the management of date in your scripts.

## Include Date in your script

1. To use the Date library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@st_libs/init.lua'
}
```
2. Add the Date module inside the `fxmanifest.lua` (in lowercase)
```lua
st_libs {
  'date',
}
```
You can now use the library inside of your resource with the `st.Date` global variable.

## Functions

Documentation for the [Both](./shared.md) side.  
