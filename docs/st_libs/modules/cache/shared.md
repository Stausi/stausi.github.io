# Shared

A table containing cached function results, which may be constants or infrequently changed.

## Default values

- resource: `string`
  - the value returned by [GetCurrentResourceName](https://docs.fivem.net/natives/?_0xE5E9EBBB).
- game: `'fxserver' | 'fivem' | 'redm'`
  - the value returned by [GetGameName](https://docs.fivem.net/natives/?_0xE8EAA18B).

## Adding new cached values

Values can be cached permanently, or added with a timeout.

```lua
cache(key, func, timeout)
```

- key: `string`
  - a unique name to store and access the cached state.
- func: `function`
  - a function to call when the cache is invalidated/empty.
- timeout?: `number`
  - a timer in milliseconds to clear the cached state.

```lua
local i = 0

while true do
    Wait(1000)
    i += 1

    print(cache('test', function() return i end, 5000))
end

-- output:
> 1
> 1
> 1
> 1
> 1
> 6
> 6
> 6
```