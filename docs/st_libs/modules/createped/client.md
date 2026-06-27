---
outline: [1,3]
---

# CreatePed (Client)

The module exposes two exports:

- `exports['st_libs']:AddNPCPed(...)`
- `exports['st_libs']:RemoveNPCPed(...)`

It automatically manages spawn/despawn based on player proximity.

## AddNPCPed

Registers a ped definition and lets the module handle spawning.

### Syntax

```lua
exports['st_libs']:AddNPCPed(name, npcModel, spawnCoords, options)
```

### Parameters

`name` : *string*
> Unique ped key.

`npcModel` : *string | number*
> Ped model name (for example `"a_m_m_business_01"`) or model hash.

`spawnCoords` : *vector3*
> Spawn position.

`options` : *table* <BadgeOptional />
> Optional spawn settings:
>
> - `spawnHeading` : *number* (default `0.0`)
> - `distance` : *number* (default `20.0`)
> - `canSpawn` : *function(entry, playerCoords, dist): boolean* <BadgeOptional />
> - `onSpawn` : *function(pedEntity)* <BadgeOptional />
> - `onDespawn` : *function(pedEntity)* <BadgeOptional />

### Example

```lua
exports['st_libs']:AddNPCPed('city_vendor', 'a_m_m_business_01', vector3(-47.12, -1757.64, 29.42), {
  spawnHeading = 45.0,
  distance = 35.0,
  canSpawn = function(entry, playerCoords, dist)
    return dist < 30.0 and not IsPedInAnyVehicle(PlayerPedId(), false)
  end,
  onSpawn = function(ped)
    FreezeEntityPosition(ped, true)
    SetEntityInvincible(ped, true)
  end,
  onDespawn = function(ped)
    -- optional cleanup when ped is removed
  end,
})
```

## RemoveNPCPed

Removes a previously registered NPC and despawns it if it currently exists.

### Syntax

```lua
exports['st_libs']:RemoveNPCPed(name)
```

### Parameters

`name` : *string*
> The same key used in `AddNPCPed`.

### Example

```lua
exports['st_libs']:RemoveNPCPed('city_vendor')
```

## Behavior details

- Spawn loop checks nearby chunks every ~2 seconds.
- Invalid models are ignored and logged.
- `canSpawn` is protected with `pcall`; errors block spawn for that tick.
- On resource stop, peds from that resource are cleaned up automatically.

## Tips

- Keep `name` unique to avoid overriding an existing entry.
- Prefer model names for readability unless you already have hashes.
- Use `canSpawn` for gameplay conditions (job, state, time of day, etc.).
