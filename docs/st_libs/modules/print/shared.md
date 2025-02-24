# Shared

Prints to console conditionally based on convars set. 
Different level prints are colored and labeled. 
Resource name is always included.

## st.print

```lua
st.print.error(...)
st.print.warn(...)
st.print.info(...)
st.print.verbose(...)
st.print.debug(...)
```

- vararg: `any`
  - What to print in console. Converts tables into a pretty-print format.

### Example

```lua
st.print.warn("query latency high: ", latency)
```

### Levels

- Error
    - Indicates a failure in the system.

- Warn
    - Warns of an unexpected condition, or a state which is likely to cause an error in the future.

- Info
    - Information about high-level, successful operations.

- Verbose
    - More detailed information containing intermediate steps of high-level, operations

- Debug
    - Used by developers to understand the system and may contain detailed trace information.
Should generally not be turned on when not debugging.
