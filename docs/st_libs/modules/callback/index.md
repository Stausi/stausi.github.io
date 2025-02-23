# Callback

Callback module is a module to create easy links between your client and server sides in your script.

## Include Callback in your script

1. To use the Callback library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@st_libs/init.lua'
}
```
2. Add the callback module inside the `fxmanifest.lua` (in lowercase)
```lua
st_libs {
  'callback',
}
```
You can now use the library inside of your resource with the `st.callback` global variable.

## Functions

Documentation for the [Client](./client.md) side.  
Documentation for the [Server](./server.md) side  