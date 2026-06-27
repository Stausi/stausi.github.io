# CreatePed

CreatePed is a client-side helper for streamed NPC spawning.

It uses a chunk/grid system and only spawns configured peds when the player is nearby and optional custom spawn checks pass.

## Include CreatePed in your script

1. Add st_libs init in your `fxmanifest.lua`.

```lua
shared_scripts {
  '@st_libs/init.lua'
}
```

2. Use exports in client-side code.

```lua
exports['st_libs']:AddNPCPed('shop_npc', 'a_m_m_business_01', vector3(0.0, 0.0, 0.0), {})
```

## Functions

Documentation for the [Client](./client.md) side.
