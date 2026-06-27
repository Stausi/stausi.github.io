# Cooldown

Cooldown module provides simple named cooldown pools on the server.

Use it to gate actions such as robberies, events, crafting, or command usage.

## Include Cooldown in your script

1. Add st_libs init in your `fxmanifest.lua`.

```lua
shared_scripts {
  '@st_libs/init.lua'
}
```

2. Use cooldown functions from server-side code.

```lua
st.registerCooldownPool('my_action')
```

## Functions

Documentation for the [Server](./server.md) side.
