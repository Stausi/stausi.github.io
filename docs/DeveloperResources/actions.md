# Actions

**Actions** are one of the two types of [Hooks](hooks). They allow functions to be executed at specific points in a script's execution. Unlike [Filters](filters), action callbacks do not return values to the calling hook. You can review the [differences between actions and filters](hooks#actions-vs-filters) for further clarification.

## Adding an Action

Adding an action involves two main steps:

1. **Creating a callback function** that will be executed when the action is triggered.
2. **Registering the callback function** to a hook that will call it when necessary.

The execution order of registered callback functions depends on:
* The manually assigned priority.
* The order in which they were registered, in cases where multiple functions share the same priority.

For example:
- An action with priority **11** runs *after* one with priority **10**.
- An action with priority **9** runs *before* one with priority **10**.

To register an action, use the `registerAction()` function with the following parameters:

1. **`string $hook_name`** – The name of the action hook.
2. **`callable $callback`** – The function to be executed when the action is triggered.
3. *(Optional)* **`int $priority`** – The execution priority (default: `10`).

The example below will run when the `startYachtHeist` action is executed in *st_yachtheist* script with priority = 10.

```lua
function action_heist_started()
  -- Do something
end
exports.st_yachtheist:registerAction('startYachtHeist', action_heist_started, 10)
```
The `action_heist_started` will be executed each time a player start the yacht heist robbery

You can refer to the script docs for a list of available hooks.

As you gain more experience, looking through Open Source code will allow you to find the most appropriate hook.
