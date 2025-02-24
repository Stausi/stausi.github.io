# Client

## Trigger Server Callback

### st.callback

The response is handled in a separate coroutine.

```lua
st.callback(name, delay, cb, ...)
```

- name: `string`
- delay: `number` or `false`
  - Amount of time until this callback can be triggered again
- cb: `function`
- ...: `any`

```lua
st.callback('ox_inventory:getItemCount', false, function(count)
    print(count)
end, 'water', {type = 'fresh'})
```

### st.callback.await

The current coroutine is yielded until a response is received.

```lua
st.callback.await(name, delay, ...)
```

- name: `string`
- delay: `number` or `false`
  - Amount of time until this callback can be triggered again
- ...: `any`

## Register Client Callback

### st.callback.register

Register an event handler for responding to server requests.

```lua
st.callback.register(name, cb)
```

- name: `string`
- cb: `function`
