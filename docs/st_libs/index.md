---
outline: [2,3]
---
# Stausi Libraries

A standalone libraries for providing reusable code to increase the compatibility between scrips.

<div class="flex-buttons">
<a class="box-button" href="https://github.com/Stausi/st_libs" target="_blank"><i class="pi pi-github" />Github</a>
<a class="box-button" href="https://github.com/Stausi/st_libs/releases/latest/download/st_libs.zip" target="_blank"><i class="pi pi-download" />Download</a>
</div>

## Installation

1. Download the [last release](https://github.com/Stausi/st_libs/releases/latest/download/st_libs.zip) of the library
2. Add the resource `st_libs` in your resources folder
3. Add `ensure st_libs` in your server.cfg

## Usage

1. To use libraries, just add the initiator as a shared script inside of your `fxmanifest.lua` file.
```lua
shared_scripts {
  '@st_libs/init.lua'
}
```
2. List modules you want use inside the `fxmanifest.lua` (in lowercase)
```lua
st_libs {
  'print',
  'table',
}
```
You can now use the libraries inside of your resource with the `st` global variable.

## Functions
Some functions are automatically added when you use st_libs in your script.

### st.ready()
A function fired when all modules are loaded
#### Syntax
```lua
st.ready(cb)
```
#### Parameters
`cb` : *function*
> The function to execute
  

#### Example
```lua
st.ready(function()
  print('All modules are loaded')
end)
```

### st.stopped()
A function fired when the script is stopped
#### Syntax
```lua
st.stopped(cb)
```
#### Parameters
`cb` : *function*
> The function to execute
  
#### Example
```lua
st.stopped(function()
  print(GetCurrentResourceName()..' has been stopped')
end)
```