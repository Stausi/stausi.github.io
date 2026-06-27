---
outline: [1,3]
---

# Random (Shared)

The random module is export-based and can be used from both client and server.

## random

Returns a random integer between `min` and `max`.

### Syntax

```lua
local value = exports['st_libs']:random(min, max)
```

### Parameters

`min` : *number* <BadgeOptional />

`max` : *number* <BadgeOptional />

### Return value

Type: *number*
> Random integer in range.

If parameters are invalid, it falls back to range `1..100`.

## chance

Rolls a percentage chance.

### Syntax

```lua
local ok = exports['st_libs']:chance(likelihood)
```

### Parameters

`likelihood` : *number* <BadgeOptional />
> Chance percent (`0-100`). Defaults to `50` if invalid.

### Return value

Type: *boolean*

## coinflip

Simulates a coin toss.

### Syntax

```lua
local heads = exports['st_libs']:coinflip()
```

### Return value

Type: *boolean*

## dice

Rolls a 6-sided die.

### Syntax

```lua
local roll = exports['st_libs']:dice()
```

### Return value

Type: *number*
> Integer in range `1..6`.

## selectitem

Selects one item from a weighted list.

### Syntax

```lua
local result = exports['st_libs']:selectitem(items, weights)
```

### Parameters

`items` : *table*
> Array of candidate values.

`weights` : *table*
> Array of weight numbers matching the item order.

### Return value

Type: *any*
> One selected element from `items`.

## catchfish

Utility helper that returns a fish item name from weighted categories.

### Syntax

```lua
local fishItem = exports['st_libs']:catchfish()
```

### Return value

Type: *string | nil*

## catchfishtwo

Alternative fish helper with another weighted distribution.

### Syntax

```lua
local fishItem = exports['st_libs']:catchfishtwo()
```

### Return value

Type: *string | nil*

## Examples

### Generic RNG flow

```lua
local score = exports['st_libs']:random(10, 100)
local crit = exports['st_libs']:chance(25)
local direction = exports['st_libs']:coinflip() and 'left' or 'right'
local dice = exports['st_libs']:dice()

print(score, crit, direction, dice)
```

### Weighted rewards

```lua
local reward = exports['st_libs']:selectitem(
  { 'cash', 'gold', 'diamond' },
  { 70, 25, 5 }
)
```
