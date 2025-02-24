---
outline: [2,3]
---

# Client

Values and cache functionality available to the client, in addition to the [shared](shared) values.

## Default values

- ped: `number`
  - player entity id
- playerId: `number`
  - player id
- serverId: `number`
  - player server id
- weapon: `number` or `false`
  - current weapon hash
- vehicle: `number` or `false`
  - vehicle entity id
- seat: `number` or `false`
  - vehicle seat index
- coords: `vector3`
  - current player coords
  - only populated if using `zones` or `points`
  - cannot be listened for with `st.onCache`
- mount: `number` or `false` (RedM only)
  - mount entity id

## st.onCache

Register an event handler that is triggered when the cached value is updated.

### Example
```lua
st.onCache(key, function(value, oldValue) end)
```

- key: `string`
    - `ped`
    - `vehicle`
    - `seat`
    - `weapon`
    - `mount` (RedM only)
- value: `any`

```lua
st.onCache('vehicle', function(value, oldValue)
    print('old vehicle:', cache.vehicle)
    print('new vehicle:', value)
end)
```
