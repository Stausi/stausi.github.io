# Server

## Trigger Client Callback

### st.callback

The response is handled in a separate coroutine.

```lua
st.callback(name, playerId, cb, ...)
```

- name: `string`
- playerId: `number`
- cb: `function`
- ...: `any`

### st.callback.await

The current coroutine is yielded until a response is received.

```lua
st.callback.await(name, playerId, ...)
```

- name: `string`
- playerId: `number`
- ...: `any`

## Register Server Callback

### st.callback.register

Register an event handler for responding to client requests.

```lua
st.callback.register(name, cb)
```

- name: `string`
- cb: `function`
