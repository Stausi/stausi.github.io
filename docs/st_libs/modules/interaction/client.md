---
outline: [1,3]
---

# 3D Text UI

3D Text UI is a module for creating interactive text displays in 3D space.

## Player 3D Text UI

### st.create3DTextUIOnPlayer()
Creates a 3D text UI attached to a player.

#### Syntax
```lua
st.create3DTextUIOnPlayer(id, options)
```

#### Parameters
`id` : *string*
> The id of the options category

`options` : *table*
> `option` : *object*
>> `id` : *integer* - The unique id of the options  
>> `text` : *string* - The text which is shown when in interact distance  
>> `displayDist` : *integer* - The distance before the pin marker is shown  
>> `interactDist` : *integer* - The distance before the interaction is shown  
>> `key` : *string* - The display key for the interaction  
>> `keyNum` : *integer* - The actual key listener the script will listen to.  
>> `player` : *integer* - The player server id   
>> `bone` : *string* - The bone of the entity<BadgeOptional />   
>> `onSelect` : *function* - The function triggered when the interaction is selected   
>> `canInteract` : *function* - A function returning a boolean to determine if the interaction is possible<BadgeOptional />

#### Example
```lua
st.create3DTextUIOnPlayer("player1", {
    { 
        id = "greet", 
        text = "Hello!", 
        displayDist = 10.0, 
        interactDist = 2.0, 
        key = "E", 
        keyNum = 38,
        player = 1,
        onSelect = function()
            print("Player interacted with player!")
        end,
        canInteract = function()
            return true
        end,
    },
})
```
### st.update3DTextUIOnPlayer()
Updates the 3D text UI attached to a player.

#### Syntax
```lua
st.update3DTextUIOnPlayer(id, optionId, data)
```

#### Parameters
`id` : *string*
> The id of the options category

`optionId` : *string*
> The id of the option

`data` : *object*
> `id` : *integer* - The unique id of the options  
> `text` : *string* - The text which is shown when in interact distance  
> `displayDist` : *integer* - The distance before the pin marker is shown  
> `interactDist` : *integer* - The distance before the interaction is shown  
> `key` : *string* - The display key for the interaction  
> `keyNum` : *integer* - The actual key listener the script will listen to.  
> `player` : *integer* - The player server id   
> `bone` : *string* - The bone of the entity<BadgeOptional />   

#### Example
```lua
st.update3DTextUIOnPlayer("player1", "greet", {
    id = "greet", 
    text = "Hello!", 
    displayDist = 10.0, 
    interactDist = 2.0, 
    key = "E", 
    keyNum = 38,
    player = 1,
})
```

### st.remove3DTextUIFromPlayer()
Removes the 3D text UI attached to a player.

#### Syntax
```lua
st.remove3DTextUIFromPlayer(id)
```

#### Parameters
`id` : *string*
> The id of the options category

#### Example
```lua
st.remove3DTextUIFromPlayer("player1")
```

### st.remove3DTextUIFromPlayerOption()
Removes an option on the 3D text UI attached to a player.

#### Syntax
```lua
st.remove3DTextUIFromPlayerOption(id, optionId)
```

#### Parameters
`id` : *string*
> The id of the options category

`optionId` : *string*
> The id of the option

#### Example
```lua
st.remove3DTextUIFromPlayerOption("player1", "greet")
```

## Coords 3D Text UI

### st.create3DTextUIOnCoords()
Creates a 3D text UI attached to a coord.

#### Syntax
```lua
st.create3DTextUIOnCoords(id, options)
```

#### Parameters
`id` : *string*
> The id of the options category

`options` : *table*
> `option` : *object*
>> `id` : *integer* - The unique id of the options  
>> `text` : *string* - The text which is shown when in interact distance  
>> `displayDist` : *integer* - The distance before the pin marker is shown  
>> `interactDist` : *integer* - The distance before the interaction is shown  
>> `key` : *string* - The display key for the interaction  
>> `keyNum` : *integer* - The actual key listener the script will listen to.  
>> `coords` : *vector3* - The coord where the interaction is located   
>> `onSelect` : *function* - The function triggered when the interaction is selected  
>> `canInteract` : *function* - A function returning a boolean to determine if the interaction is possible<BadgeOptional />    

#### Example
```lua
st.create3DTextUIOnCoords("coord1", {
    {
        id = "greet",
        text = "Hello!",
        displayDist = 10.0,
        interactDist = 2.0,
        key = "E",
        keyNum = 38,
        coords = vector3(0.0, 0.0, 0.0),
        onSelect = function()
            print("Player interacted with the location!")
        end,
        canInteract = function()
            return true
        end,
    },
})
```
### st.update3DTextUIOnCoords()
Updates the 3D text UI attached to a coord.

#### Syntax
```lua
st.update3DTextUIOnCoords(id, optionId, data)
```

#### Parameters
`id` : *string*
> The id of the options category

`optionId` : *string*
> The id of the option

`data` : *object*
> `id` : *integer* - The unique id of the options  
> `text` : *string* - The text which is shown when in interact distance  
> `displayDist` : *integer* - The distance before the pin marker is shown  
> `interactDist` : *integer* - The distance before the interaction is shown  
> `key` : *string* - The display key for the interaction  
> `keyNum` : *integer* - The actual key listener the script will listen to.  
> `coords` : *vector3* - The coord where the interaction is located   

#### Example
```lua
st.update3DTextUIOnCoords("coord1", "greet", {
    id = "greet", 
    text = "Hello!", 
    displayDist = 10.0, 
    interactDist = 2.0, 
    key = "E", 
    keyNum = 38,
    coords = vector3(0.0, 0.0, 0.0),
})
```

### st.remove3DTextUIFromCoords()
Removes the 3D text UI attached to a coord.

#### Syntax
```lua
st.remove3DTextUIFromCoords(id)
```

#### Parameters
`id` : *string*
> The id of the options category

#### Example
```lua
st.remove3DTextUIFromCoords("coord1")
```

### st.remove3DTextUIFromCoordsOption()
Removes an option on the 3D text UI attached to a coord.

#### Syntax
```lua
st.remove3DTextUIFromCoordsOption(id, optionId)
```

#### Parameters
`id` : *string*
> The id of the options category

`optionId` : *string*
> The id of the option

#### Example
```lua
st.remove3DTextUIFromCoordsOption("coord1", "greet")
```

## Entity 3D Text UI

### st.create3DTextUIOnEntity()
Creates a 3D text UI attached to a entity.

#### Syntax
```lua
st.create3DTextUIOnEntity(id, options)
```

#### Parameters
`id` : *string*
> The id of the options category

`options` : *table*
> `option` : *object*
>> `id` : *integer* - The unique id of the options  
>> `text` : *string* - The text which is shown when in interact distance  
>> `displayDist` : *integer* - The distance before the pin marker is shown  
>> `interactDist` : *integer* - The distance before the interaction is shown   
>> `key` : *string* - The display key for the interaction  
>> `keyNum` : *integer* - The actual key listener the script will listen to.  
>> `entity` : *integer* - The entity id   
>> `netId` : *integer* - The network id <BadgeOptional />  
>> `bone` : *string* - The bone of the entity<BadgeOptional />   
>> `onSelect` : *function* - The function triggered when the interaction is selected  
>> `canInteract` : *function* - A function returning a boolean to determine if the interaction is possible<BadgeOptional />

#### Example
```lua
st.create3DTextUIOnEntity("entity1", {
    { 
        id = "greet", 
        text = "Hello!", 
        displayDist = 10.0, 
        interactDist = 2.0, 
        key = "E", 
        keyNum = 38,
        entity = 252525,
        onSelect = function()
            print("Player interacted with entity!")
        end,
        canInteract = function()
            return true
        end,
    },
})
```
### st.update3DTextUIOnEntity()
Updates the 3D text UI attached to a entity.

#### Syntax
```lua
st.update3DTextUIOnEntity(id, optionId, data)
```

#### Parameters
`id` : *string*
> The id of the options category

`optionId` : *string*
> The id of the option

`data` : *object*
> `id` : *integer* - The unique id of the options  
> `text` : *string* - The text which is shown when in interact distance  
> `displayDist` : *integer* - The distance before the pin marker is shown  
> `interactDist` : *integer* - The distance before the interaction is shown   
> `key` : *string* - The display key for the interaction  
> `keyNum` : *integer* - The actual key listener the script will listen to.  
> `entity` : *integer* - The entity id   
> `netId` : *integer* - The network id <BadgeOptional />  
> `bone` : *string* - The bone of the entity<BadgeOptional />   

#### Example
```lua
st.update3DTextUIOnEntity("entity1", "greet", {
    id = "greet", 
    text = "Hello!", 
    displayDist = 10.0, 
    interactDist = 2.0, 
    key = "E", 
    keyNum = 38,
    entity = 252525,
})
```

### st.remove3DTextUIFromEntity()
Removes the 3D text UI attached to a entity.

#### Syntax
```lua
st.remove3DTextUIFromEntity(id)
```

#### Parameters
`id` : *string*
> The id of the options category

#### Example
```lua
st.remove3DTextUIFromEntity("entity1")
```

### st.remove3DTextUIFromEntityOption()
Removes an option on the 3D text UI attached to a entity.

#### Syntax
```lua
st.remove3DTextUIFromEntityOption(id, optionId)
```

#### Parameters
`id` : *string*
> The id of the options category

`optionId` : *string*
> The id of the option

#### Example
```lua
st.remove3DTextUIFromEntityOption("entity1", "greet")
```

## Model 3D Text UI

### st.create3DTextUIOnModel()
Creates a 3D text UI attached to a model.

#### Syntax
```lua
st.create3DTextUIOnModel(id, options)
```

#### Parameters
`id` : *string*
> The id of the options category

`options` : *table*
> `option` : *object*
>> `id` : *integer* - The unique id of the options  
>> `text` : *string* - The text which is shown when in interact distance  
>> `displayDist` : *integer* - The distance before the pin marker is shown  
>> `interactDist` : *integer* - The distance before the interaction is shown  
>> `key` : *string* - The display key for the interaction  
>> `keyNum` : *integer* - The actual key listener the script will listen to.  
>> `model` : *string* - The model name  
>> `bone` : *string* - The bone of the entity<BadgeOptional />   
>> `onSelect` : *function* - The function triggered when the interaction is selected  
>> `canInteract` : *function* - A function returning a boolean to determine if the interaction is possible<BadgeOptional />

#### Example
```lua
st.create3DTextUIOnModel("model1", {
    { 
        id = "greet", 
        text = "Hello!", 
        displayDist = 10.0, 
        interactDist = 2.0, 
        key = "E", 
        keyNum = 38,
        model = "ch_prop_diamond_trolly_01b",
        onSelect = function()
            print("Player interacted with model!")
        end,
        canInteract = function()
            return true
        end,
    },
})
```
### st.update3DTextUIOnModel()
Updates the 3D text UI attached to a model.

#### Syntax
```lua
st.update3DTextUIOnModel(id, optionId, data)
```

#### Parameters
`id` : *string*
> The id of the options category

`optionId` : *string*
> The id of the option

`data` : *object*
> `id` : *integer* - The unique id of the options  
> `text` : *string* - The text which is shown when in interact distance  
> `displayDist` : *integer* - The distance before the pin marker is shown  
> `interactDist` : *integer* - The distance before the interaction is shown  
> `key` : *string* - The display key for the interaction  
> `keyNum` : *integer* - The actual key listener the script will listen to.  
> `model` : *string* - The model name  
> `bone` : *string* - The bone of the entity<BadgeOptional />   

#### Example
```lua
st.update3DTextUIOnModel("model1", "greet", {
    id = "greet", 
    text = "Hello!", 
    displayDist = 10.0, 
    interactDist = 2.0, 
    key = "E", 
    keyNum = 38,
    model = "ch_prop_diamond_trolly_01b",
})
```

### st.remove3DTextUIFromModel()
Removes the 3D text UI attached to a model.

#### Syntax
```lua
st.remove3DTextUIFromModel(id)
```

#### Parameters
`id` : *string*
> The id of the options category

#### Example
```lua
st.remove3DTextUIFromModel("model1")
```

### st.remove3DTextUIFromModelOption()
Removes an option on the 3D text UI attached to a model.

#### Syntax
```lua
st.remove3DTextUIFromModelOption(id, optionId)
```

#### Parameters
`id` : *string*
> The id of the options category

`optionId` : *string*
> The id of the option

#### Example
```lua
st.remove3DTextUIFromModelOption("model1", "greet")
```