# Database

Database module is a module to interact with your database.

## Include Database in your script

1. To use the Database library, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@st_libs/init.lua'
}
```
2. Add the Database module inside the `fxmanifest.lua` (in lowercase)
```lua
st_libs {
  'database',
}
```
You can now use the library inside of your resource with the `st.database` global variable.

## Functions

Documentation for the [Server](./server.md) side  