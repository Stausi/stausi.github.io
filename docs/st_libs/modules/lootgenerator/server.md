---
outline: [1,3]
---

# Loot Generator (Server)

The loot generator is exposed as `st.GenerateLoot(pool, itemCount, guaranteedRarities)`.

It always returns an array of generated entries:

```lua
{
  {
    name = "item_name",
    count = 1,
    metadata = {
      rarity = "COMMON"
    }
  }
}
```

## st.GenerateLoot()

Generates loot entries from a pool.

### Syntax

```lua
st.GenerateLoot(pool, itemCount, guaranteedRarities)
```

### Parameters

`pool` : *table*
> Loot pool configuration.

`itemCount` : *number* <BadgeOptional />
> Amount of rolls to run. Defaults to `1`.

`guaranteedRarities` : *table* <BadgeOptional />
> Guaranteed rarity rolls for rarity-based pools.
>
> Format:
>
> ```lua
> {
>   LEGENDARY = 1,
>   EPIC = 2,
> }
> ```

### Return value

Type: *table*
> Array of loot entries.

## Pool formats

### 1) Rarity-based pool

Structure by rarity buckets.

```lua
local ChestLoot = {
  COMMON = {
    { name = 'bread', min = 1, max = 3 },
    { name = 'water', min = 1, max = 2 },
  },
  RARE = {
    { name = 'silver_ring', min = 1, max = 1 },
  },
  EPIC = {
    { name = 'diamond', min = 1, max = 1 },
  },
  LEGENDARY = {
    { name = 'ancient_relic', min = 1, max = 1 },
  },
}

local loot = st.GenerateLoot(ChestLoot, 4)
```

The internal rarity weight table is:

- `COMMON = 800`
- `RARE = 150`
- `EPIC = 45`
- `LEGENDARY = 5`

### 2) Flat pool

Structure as a plain array of items.

```lua
local FlatLoot = {
  { name = 'apple', min = 1, max = 3, chance = 70 },
  { name = 'bread', min = 1, max = 2, chance = 30 },
  { name = 'water', min = 1, max = 1 }, -- chance defaults to 100
}

local loot = st.GenerateLoot(FlatLoot, 2)
```

For flat pools, every item is rolled independently each round.
That means one round can add multiple items.

## Item fields

Each item can define:

- `name` : item name (`_NOTHING_` is allowed)
- `min` / `max` : random amount range (default `1` / `1`)
- `chance` : inclusion chance in flat pools (default `100`)
- `metadata` : copied into output metadata
- `rarities` : per-item rarity chances (flat pools)

### Per-item rarity chances

```lua
local WeaponLoot = {
  {
    name = 'weapon_revolver',
    min = 1,
    max = 1,
    rarities = {
      COMMON = 70,
      RARE = 20,
      EPIC = 8,
      LEGENDARY = 2,
    }
  }
}

local loot = st.GenerateLoot(WeaponLoot, 1)
```

If rarity total is below `100`, the remaining chance means no rarity metadata is attached.

## Guaranteed rarities

Guaranteed rarities reduce the remaining random rolls.

```lua
local loot = st.GenerateLoot(ChestLoot, 5, {
  LEGENDARY = 1,
  EPIC = 1,
})
```

Result behavior:

- `1` guaranteed `LEGENDARY`
- `1` guaranteed `EPIC`
- `3` additional random rolls

If guaranteed total is greater than `itemCount`, guaranteed entries are still generated and random loop is skipped.

## Special behavior and edge cases

### `_NOTHING_` entries

When `name = '_NOTHING_'`, the selection is skipped and no entry is added.

### Invalid pool

If `pool` is not a table, the function returns `{}`.

### Missing rarity bucket

If a rarity is selected but bucket is missing or empty, that roll adds no item.

### Metadata safety

Metadata is copied before modification, so source config is not mutated.

## Practical example

```lua
local RobberyLoot = {
  COMMON = {
    { name = '_NOTHING_', min = 1, max = 1 },
    { name = 'cash', min = 10, max = 50 },
    { name = 'watch', min = 1, max = 1 },
  },
  RARE = {
    { name = 'gold_ring', min = 1, max = 2 },
  },
  EPIC = {
    { name = 'diamond_ring', min = 1, max = 1 },
  },
  LEGENDARY = {
    { name = 'ancient_coin', min = 1, max = 1 },
  },
}

local reward = st.GenerateLoot(RobberyLoot, 3, {
  LEGENDARY = 1,
})
```
