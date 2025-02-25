---
outline: [2,3]
---

# Debug

Debug is a powerful module for measuring performance in your scripts.

## st.debug.performance()
A function to measure the execution time of a callback function.
### Syntax
```lua
st.debug.performance(title, cb)
```
#### Parameters
`title` : *string*
> A title describing this measurement.

`cb` : *function*
> The function to be executed and measured.

#### Return value
Type: *varies*
> Returns the result(s) of the callback function.

### Example
```lua
local result = st.debug.performance("MyFunction", function()
    local sum = 0
    for i = 1, 100000 do
        sum = sum + i
    end
    return sum
end)
print(result)
-- Expected output: Performance: MyFunction -> {elapsed time} μs
```

## st.debug.performanceStart()
A function to start a performance measurement with a unique identifier.
### Syntax
```lua
st.debug.performanceStart(title)
```
#### Parameters
`title` : *string* <BadgeOptional />
> An optional title describing this measurement.

#### Return value
Type: *string*
> Returns the auto-generated ID to be used in `performanceStop()`.

### Example
```lua
local id = st.debug.performanceStart("Loop Execution")
-- Some heavy computation here
```

## st.debug.performanceStop()
A function to stop a previously started performance measurement.
### Syntax
```lua
st.debug.performanceStop(id)
```
#### Parameters
`id` : *string*
> The unique ID returned by `performanceStart()`.

#### Return value
Type: *number*
> Returns the elapsed time in microseconds.

### Example
```lua
local id = st.debug.performanceStart("Loop Execution")
for i = 1, 50000 do
    local x = i * 2
end
local elapsed = st.debug.performanceStop(id)
print("Execution time:", elapsed, "μs")
-- Expected output: Performance: Loop Execution -> {elapsed time} μs
```

