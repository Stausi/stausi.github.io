---
outline: [1,3]
---

# Entity Blips

Entity blips which is persistent, even if you leave scope.

### st.registerBlipMember()
Register a player as blip member of a certain group

#### Syntax
```lua
st.registerBlipMember(source, groups)
```

#### Parameters
`source` : *integer*
> The source of the player

`groups` : *string table*
> A string table with the name of the groups

#### Example
```lua
st.registerBlipMember(1, { "police" })
```

### st.removeBlipMember()
Remove a player blip member from a certain group

#### Syntax
```lua
st.removeBlipMember(source, groups)
```

#### Parameters
`source` : *integer*
> The source of the player

`groups` : *string table*
> A string table with the name of the groups

#### Example
```lua
st.removeBlipMember(1, { "police" })
```

### st.registerBlipEntity()
Register a entity as a blip

#### Syntax
```lua
st.registerBlipEntity(source, data)
```

#### Parameters
`source` : *integer*
> The source of the player

`data` : *table*
> `netID` : *integer* - The network id from the entity  
> `user` : *integer* - The source of the player<BadgeOptional />  
> `groups` : *string table* - A string table with the name of the groups<BadgeOptional />  
> `users` : *numbers table* - A numbers table with the source of the users<BadgeOptional />  
> `refreshRate` : *integer* - The refreshRate in ms<BadgeOptional />  
> `blipData` : *table* <BadgeOptional />
>> `name` : *string* - The name of the blip<BadgeOptional />  
>> `sprite` : *integer* - The sprite of the blip<BadgeOptional />  
>> `colour` : *integer* - The colour of the blip<BadgeOptional />  
>> `scale` : *integer* - The scale of the blip<BadgeOptional />  
>> `route` : *boolean* - If the user will have a route to the blip<BadgeOptional />  
>> `routColour` : *integer* - The route colour<BadgeOptional />  
>> `attachOnEntity` : *boolean* - If the blip should attach to the entity when in scope<BadgeOptional />  

#### Example
```lua
st.registerBlipEntity(1, { 
    netID = 1,
    refreshRate = 500,
    blipData = {
        name = "Mit seje køretøj!"
    }
})
```

If no user, groups, or users is set, it will add the blip cache for the source

### st.removeBlipEntity()
Remove a entity blip

#### Syntax
```lua
st.removeBlipEntity(netID)
```

#### Parameters
`netID` : *integer*
> The network id of the entity

#### Example
```lua
st.removeBlipEntity(1)
```