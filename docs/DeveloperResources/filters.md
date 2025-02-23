# Filters

**Filters** are one of the two types of [Hooks](hooks).

They allow functions to modify data at specific points during script execution. Unlike [Actions](actions), filters are designed to operate in isolation and should not cause side effects such as modifying global variables or producing output. Filters are expected to return a modified version of the received data.

## Adding a Filter

Adding a filter involves two key steps:

1. **Creating a callback function** that will process and modify the data.
2. **Registering the callback function** to a hook, ensuring it gets called at the right moment.

The execution order of filter functions is determined by:
* The manually assigned priority.
* The order in which they were registered, in cases where multiple functions share the same priority.

For example:
- A filter with priority **11** runs *after* one with priority **10**.
- A filter with priority **9** runs *before* one with priority **10**.

To register a filter, use the `registerFilter()` function with the following parameters:

1. **`string $hook_name`** – The name of the filter hook.
2. **`callable $callback`** – The function responsible for modifying the data.
3. *(Optional)* **`int $priority`** – The execution priority (default: `10`).
