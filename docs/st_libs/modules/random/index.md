# Random

Random module exposes utility exports for random numbers, weighted picks, and game-specific helpers.

## Include Random in your script

1. Add st_libs init in your `fxmanifest.lua`.

```lua
shared_scripts {
  '@st_libs/init.lua'
}
```

2. Use exports from either client or server scripts.

```lua
local value = exports['st_libs']:random(1, 100)
```

## Functions

Documentation for the [Shared](./shared.md) side.
