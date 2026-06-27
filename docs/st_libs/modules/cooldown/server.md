---
outline: [1,3]
---

# Cooldown (Server)

Cooldown state is kept in named pools and stored as expiration timestamps.

The module supports passing either a single pool name or multiple names in an array.

## st.registerCooldownPool()

Registers one or more pool names.

### Syntax

```lua
st.registerCooldownPool(pool)
```

### Parameters

`pool` : *string | string table*
> Pool name (`"bankrobbery"`) or list of names (`{ "bankrobbery", "store" }`).

### Return value

Type: *nil*

### Example

```lua
st.registerCooldownPool('bankrobbery')
st.registerCooldownPool({ 'container', 'yacht' })
```

## st.addCooldownToPool()

Adds cooldown duration to one or more pools.

### Syntax

```lua
st.addCooldownToPool(pool, minutes)
```

### Parameters

`pool` : *string | string table*
> Pool name or list of names.

`minutes` : *number*
> Duration in minutes. Must be greater than `0`.

### Behavior

- If pool is expired, cooldown starts from current time.
- If pool is already active, duration is added to existing expiry (stacking behavior).
- Very small values are clamped to at least 1 second internally.

### Example

```lua
st.addCooldownToPool('bankrobbery', 30)
st.addCooldownToPool({ 'container', 'yacht' }, 10)
```

## st.IsPoolOnCooldown()

Checks whether one or more pools are still active.

### Syntax

```lua
local isOnCooldown = st.IsPoolOnCooldown(pool)
```

### Parameters

`pool` : *string | string table*
> Pool name or list of names.

### Return value

Type: *boolean*
> Returns `true` if at least one checked pool is active.

### Example

```lua
if st.IsPoolOnCooldown('bankrobbery') then
  return
end

st.addCooldownToPool('bankrobbery', 30)
```

## Full usage example

```lua
local POOL = 'container_robbery'

st.registerCooldownPool(POOL)

RegisterNetEvent('my_resource:tryStartRobbery', function()
  local src = source

  if st.IsPoolOnCooldown(POOL) then
    TriggerClientEvent('ox_lib:notify', src, {
      type = 'error',
      description = 'This robbery is currently on cooldown.'
    })
    return
  end

  st.addCooldownToPool(POOL, 15)

  TriggerClientEvent('ox_lib:notify', src, {
    type = 'success',
    description = 'Robbery started. Cooldown: 15 minutes.'
  })
end)
```

## Validation rules

- `pool` must be a non-empty string or non-empty string array.
- Empty arrays and invalid values raise errors.
- `minutes` must be a number above `0`, otherwise an error is raised.
