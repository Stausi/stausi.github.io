# 🤝 Teams
Documentation relating to the st_minigames.

:::tabs
== GET FOR FREE
[Get the script](https://shop.stausi.com/package/6526480)
:::

## 1. Installation
To install st_minigames:

- Download st_minigames from your [keymaster](https://keymaster.fivem.net/asset-grants?search=minigames)
- Unzip the folder and drop it in your resource folder <br><br>
- Add this ensure in your server.cfg
  - `ensure st_minigames`

## 2. Usage
Press F10 and start manageing your team!

## 3. For developers

### Hotwire Minigames
Starts a hotwire minigame using UI

#### Syntax
```lua
--@return returns in boolean if minigame is won or not
local hasWon = exports.st_minigames:StartDrilling()
``` 

#### Syntax

```lua
--@return returns in boolean if minigame is won or not
exports.st_minigames:StartDrilling(function(hasWon)
end)
```

### Hacking Minigames
Starts a hacking minigame using UI

#### Sync Syntax
```lua
local hasWon = exports.st_minigames:StartHackingMinigame(style, timeout, interval)
```

#### Parameters

`style` : `string` (Styles below)  
> "numeric"  
> "alphabet"  
> "alphanumeric"  
> "greek"  
> "braille"  
> "runes"  
`timeout` : `number` (Time in seconds when the minigame stops and makes the user lose)  
`interval` : `number` (Interval for each time the UI moves)  

#### Async Syntax

```lua
exports.st_minigames:StartHackingMinigame(style, timeout, interval, function(hasWon)
end)
```

#### Parameters
`style` : `string` (Styles below)  
> "numeric"  
> "alphabet"  
> "alphanumeric"  
> "greek"  
> "braille"  
> "runes"  
`timeout` : `number` (Time in seconds when the minigame stops and makes the user lose)  
`interval` : `number` (Interval for each time the UI moves)  

### Hotwire Minigames
Starts a hotwire minigame using UI

#### Sync Syntax
```lua
--@param time is the time in ms, how long the user has to complete the minigame
--@return returns in boolean if minigame is won or not
local hasWon = exports.st_minigames:StartHotwire(time)
``` 

#### Async Syntax

```lua
--@param time is the time in ms, how long the user has to complete the minigame
--@return returns in boolean if minigame is won or not
exports.st_minigames:StartHotwire(time, function(hasWon)
end)
```

### Lockpick Minigames
Starts a lockpick minigame using UI

#### Sync Syntax
```lua
--@param corrects is how many corrects the use most have before winning the minigame
--@param timeMultiplier is how fast the arrow moves
--@return returns in boolean if minigame is won or not
local hasWon = exports.st_minigames:StartLockpickMinigame(corrects, timeMultiplier)
``` 

#### Async Syntax

```lua
--@param corrects is how many corrects the use most have before winning the minigame
--@param timeMultiplier is how fast the arrow moves
--@return returns in boolean if minigame is won or not
exports.st_minigames:StartLockpickMinigame(corrects, timeMultiplier, function(hasWon)
end)
```

### Lockpick Minigames
Starts a safecrack minigame using UI

#### Sync Syntax
```lua
--@param status : true/false if safecrack UI should be shown or not
--@param locks is how many locks the user must crack before winning
--@return returns in boolean if minigame is won or not
local hasWon = exports.st_minigames:SafeCrack(status, locks)
``` 

#### Async Syntax

```lua
--@param status : true/false if safecrack UI should be shown or not
--@param locks is how many locks the user must crack before winning
--@return returns in boolean if minigame is won or not
exports.st_minigames:SafeCrack(status, locks, function(hasWon)
end)
```

### Lockpick Minigames
Starts a Thermite minigame using UI

#### Sync Syntax
```lua
--@param mode is how many boxes which should be shown
--@param time is the time in ms, how long the user has to complete the minigame
--@return returns in boolean if minigame is won or not
local hasWon = exports.st_minigames:StartThermiteMinigame(mode, time)
``` 

#### Async Syntax

```lua
--@param mode is how many boxes which should be shown
--@param time is the time in ms, how long the user has to complete the minigame
--@return returns in boolean if minigame is won or not
exports.st_minigames:StartHotwire(mode, time, function(hasWon)
end)
```

### Lockpick Minigames
Starts a Voltlab minigame using UI

#### Sync Syntax
```lua
--@param time is the time in ms, how long the user has to complete the minigame
--@return returns in boolean if minigame is won or not
local hasWon = exports.st_minigames:Voltlab(time)
``` 

#### Async Syntax

```lua
--@param time is the time in ms, how long the user has to complete the minigame
--@return returns in boolean if minigame is won or not
exports.st_minigames:Voltlab(time, function(hasWon)
end)
```