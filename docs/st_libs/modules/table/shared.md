# Shared

Adds additional functions alongside the standard table library.

## st.table.contains

Checks if `table` contains the given `value`. Only intended for simple values and unnested tables.

```lua
st.table.contains(tbl, value)
```

- tbl: `table`
- value: `any`

Return:
- isContained: `boolean`

## st.table.matches

Compares if two values are equal, iterating over tables and matching both keys and values.

```lua
st.table.matches(tableOne, tableTwo)
```

- tableOne: `table`
- tableTwo: `table`

Return:
- matches: `boolean`

## st.table.deepclone

Recursively clones a table to ensure no table references remain.

```lua
st.table.deepclone(tbl)
```

- tbl: `table`

Return:
- clonedTable: `table`

## st.table.merge

Merges two tables together. Duplicate keys will be added together if they are numbers, otherwise `tableTwo`'s value will be used.

```lua
st.table.merge(tableOne, tableTwo)
```

- tableOne: `table`
- tableTwo: `table`
- addDuplicateNumbers: `boolean`
  - Duplicate keys equal to numbers will be added together unless set to `false`.

Return:
- tableOne: `table`

## st.table.freeze

Makes a table read-only, preventing further modification. Unfrozen tables stored within `table` are still mutable.

```lua
st.table.freeze(tbl)
```

- tbl: `table`

Return:
- frozenTable: `table`

## st.table.isFrozen

Returns true if `tbl` is set as read-only.

```lua
st.table.isFrozen(tbl)
```

- tbl: `table`

Return:
- isFrozen: `boolean`