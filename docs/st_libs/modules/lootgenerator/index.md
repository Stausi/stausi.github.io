# Loot Generator

Loot Generator helps you create randomized reward tables with a single function.

It supports two pool styles:

- Rarity-based pools (`COMMON`, `RARE`, `EPIC`, `LEGENDARY`)
- Flat pools (simple list of items)

## Include Loot Generator in your script

1. Add st_libs init in your `fxmanifest.lua`.

```lua
shared_scripts {
  '@st_libs/init.lua'
}
```

2. Use the function from server-side code.

```lua
local loot = st.GenerateLoot(pool, 3)
```

## Functions

Documentation for the [Server](./server.md) side.
