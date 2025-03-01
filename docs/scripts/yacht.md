# 🚢 Yacht Heist
Documentation relating to the st_yachtheist.

:::tabs
== BUY
[Buy the script](https://shop.stausi.com/package/6636025)
:::

## 1. Installation
The Yacht Heist works on ESX/QB frameworks thats compatible with st_libs. If you miss one, create it in the libs, or ask me on discord!<br>
It also supports several of inventories. If you miss one, create it in the libs, or ask me on discord!

:::tip
This script can also works on several other frameworks. Framework support is only for see how many cops which are online
:::

To install st_yachtheist :

- Download the library: [st_libs](https://github.com/Stausi/st_libs/releases/latest/download/st_libs.zip)
- Unzip the folder and drop it in your resource folder <br><br>
- Get st_minigames for free from [store](https://shop.stausi.com/package/6526480) and download from your [keymaster](https://keymaster.fivem.net/asset-grants?search=minigames)
- Unzip the folder and drop it in your resource folder <br><br>
- Get st_teams for free from [store](https://shop.stausi.com/package/6528185) and download from your [keymaster](https://keymaster.fivem.net/asset-grants?search=teams)
- Unzip the folder and drop it in your resource folder <br><br>
- Download st_yachtheist from your [keymaster](https://keymaster.fivem.net/asset-grants?search=yacht)
- Unzip the folder and drop it in your resource folder <br><br>
- Add this ensure in your server.cfg
  - `ensure st_libs`
  - `ensure st_minigames`
  - `ensure st_teams`
  - `ensure st_yachtheist`

## 2. Usage
Find the NPC on that map, and start the heist! Be prepared and take some friend with you!

## 3. Configuration

:::details Config.lua
```lua
Config = Config or {}

Config.Devmode = false

Config.Minutes = function(minutes) return minutes * 60 end
Config.Hours = function(hours) return hours * (60 * 60) end
Config.Days = function(days) return days * (24 * (60 * 60)) end

-- Police Officers needed for doing action on Yacht Heist.

Config.PoliceNeeded = 2

-- Checking Police only on start 
-- If this is true, it will only check police online on starting the heist.

Config.OnlyCheckOnStart = true

-- How long cooldown the heist has

Config.Cooldown = Config.Hours(2)

-- If you want to use Stausi interaction menu for this script, set this to false.
-- If you want to use your ox_target interaction menu, set this to true.

Config.UseOxTarget = false

-- Position and model for starter npc.
-- Change this to false if you don't want a starter npc.
-- You can use client sided exports to start it instead.
-- Like exports['st_yachtheist']:StartHeist()

Config.StarterNPCModel = "IG_Thornton"
Config.StarterNPCPos = vector4(1279.582, -3258.825, 4.92, 269.366) 

-- This will enable or disable if police should be alerted when approaching the boat.

Config.PoliceAlert = true

-- If a helicopter should spawn on the yacht or not.
-- This doesn't have any effect other than visual.

Config.SpawnHelicopter = true

-- How many guards that should be spawned on the boat

Config.MaxGuardSpawns = 50

-- Which Guards is spawned on the boat

Config.BoatNPCGuards = {
    "G_M_M_CartelGuards_01",
    "G_M_M_CartelGuards_02",
}

-- Which Weapons the Guards has on the boat
-- And which components they have on the weapons

Config.YachtNPCWeapons = {
    ["WEAPON_MICROSMG"] = {
        "COMPONENT_AT_PI_FLSH",
        "COMPONENT_MICROSMG_CLIP_02",
        "COMPONENT_AT_SCOPE_MACRO",
    },
    ["WEAPON_ASSAULTRIFLE"] = {
        "COMPONENT_AT_AR_AFGRIP",
        "COMPONENT_HEAVYSHOTGUN_CLIP_03",
        "COMPONENT_AT_AR_FLSH",
    },
}

-- The translation for every error message.
-- If you don't want any message you test leave it blank with "".

Config.Error = "Error"
Config.Success = "Success"
Config.Inform = "Info"

Config.Amount = "Amount"
Config.NoItems = "You don't have enough items for this."
Config.CantCarry = "You can't carry the outcome of this."

Config.StartRobbery = "Start Yacht Heist"
Config.GoToArea = "Find the boat. It's marked on your GPS."

Config.NoPolice = "There is not enough police"
Config.TimeLeft = "Time left: %s min %s seconds"
Config.NoTeam = "You are not in a team"

Config.LocationOccupied = "This place is already taken or occupied."
Config.NoArms = "You can't have a weapon in your hand"
Config.NoSwitchblade = "You need a switchblade in your hand"

Config.CutRight = "Press ~INPUT_CONTEXT~ for cut right"
Config.CutDown = "Press ~INPUT_CONTEXT~ for cut down"
Config.CutLeft = "Press ~INPUT_CONTEXT~ for cut left"
Config.CutUp = "Press ~INPUT_CONTEXT~ for cut up"

--[[
Config.Categories Explanation:

Each category defines a set of customizable properties for different handler actions in your script.
Below is a description of each configurable property:

- label:          (string) The text that appears to describe the action to the player.
- icon:           (string) The Font Awesome icon to visually represent the action in the UI.
- tableType       (string) If a table, you can set the type to either `weed`, `coke`, `gold` or `money`
- artModel        (string) If a art grab, you can set the prop name here.
- rewards:        (table) Specifies the loot items from which the player will receive rewards.
    - pool:            (table) A reward pool, it will select a random pool when rewarding the player
        - name:            (string) The item’s internal identifier.
        - amount:          (number) The quantity of the item required.
- requiredItems:  (table) A list of items needed to perform the action. Each item includes:
    - name:            (string) The item’s internal identifier.
    - amount:          (number) The quantity of the item required.
    - removeOnSucceed: (boolean, optional) Whether the item is removed upon successful action.
    - removeOnFail:    (boolean, optional) Whether the item is removed if the action fails.
    - hideOnList:      (boolean, optional) If true, hides this item from resource overview.

Categories:
Define common settings for similar actions to streamline configuration.
These categories are then referenced in PericoHandlers by the `category` field.
--]]

Config.Categories = {
    ["Table_1"] = {
        label = "Take From Table",
        icon = "fa-solid fa-sack-dollar",
        tableType = "gold",
        rewards = {
            [1] = {
                { item = "gold_bar", amount = { min = 24, max = 24 }, chance = 100 },
            },
        },
    },
    ["Table_2"] = {
        label = "Take From Table",
        icon = "fa-solid fa-sack-dollar",
        tableType = "weed",
        rewards = {
            [1] = {
                { item = "black_money", amount = { min = 1500000, max = 1500000 }, chance = 100 },
            },
        },
    },
    ["Table_3"] = {
        label = "Take From Table",
        icon = "fa-solid fa-sack-dollar",
        tableType = "coke",
        rewards = {
            [1] = {
                { item = "coke_packaged", amount = { min = 24, max = 24 }, chance = 100 },
            },
        },
    },
    ["Painting"] = {
        label = "Steal Painting",
        icon = "fa-solid fa-paintbrush",
        rewards = {
            [1] = {
                { item = "painting_1", amount = { min = 1, max = 1 }, chance = 100 },
            },
        },
    },
    ["Arts_1"] = {
        label = "Steal Skull",
        icon = "fa-solid fa-skull",
        artModel = "vw_prop_casino_art_skull_03b",
        rewards = {
            [1] = {
                { item = "painting_1", amount = { min = 1, max = 1 }, chance = 100 },
            },
        },
    },
    ["Arts_2"] = {
        label = "Steal Grenade",
        icon = "fa-solid fa-bomb",
        artModel = "vw_prop_casino_art_grenade_01a",
        rewards = {
            [1] = {
                { item = "painting_1", amount = { min = 1, max = 1 }, chance = 100 },
            },
        },
    },
    ["Arts_3"] = {
        label = "Steal Bottle",
        icon = "fa-solid fa-bottle-droplet",
        artModel = "h4_prop_h4_t_bottle_02a",
        rewards = {
            [1] = {
                { item = "painting_1", amount = { min = 1, max = 1 }, chance = 100 },
            },
        },
    },
}

-- Add extra handlers for the heist here.
-- ATTENTION - This is a advanced feature and should only be used by experienced developers.

Config.AdditionalHandlers = {
    -- Example of how to add a painting handler:
    -- ["paintings"] = {
    --     vector4(-1430.328, 6754.428, 9.132992, 165.0), -- The position of the prop
    -- },

    -- Example of how to add a table handler:
    -- ["grabStacks"] = {
    --     {
    --         position = vector4(-1429.39526, 6760.877, 5.78307, -20.0), -- The position of the prop
    --         category = "Table_4", -- MUST BE UNIQUE!! ALSO MUST BE IN Config.Categories
    --     },
    -- },

    -- Example of how to add a art handler:
    -- ["arts"] = {
    --     {
    --         position = vector4(-1425.983, 6752.209, 8.596047, 120.0), -- The position of the prop
    --         model = "vw_prop_casino_art_skull_03b", -- The prop model
    --         category = "Arts_4", -- MUST BE UNIQUE!! ALSO MUST BE IN Config.Categories
    --     },
    -- },
}
```

:::
## 4. For developers

### Actions

[Actions](/DeveloperResources/actions) are the new way to modify how the script works or add new features. These actions are event that occurs at a specific point in time during the execution of the script. But contrary to events, actions are **synchronous**. 

#### <Badge type="client" text="Client" /> startYachtHeist
Fires when the yacht heist is started
```lua
exports.st_yachtheist:registerAction('startYachtHeist', function()
end)
```

### Filters

[Filters](/DeveloperResources/filters) are the new way to modify data used by the script. These filters are fired at a specific point in time during the execution of the script. But contrary to events, filters are **synchronous**. 

#### <Badge type="client" text="Client" /> canStartYachtHeist
Fires before the yacht heist is started
```lua
---@param canStart - boolean
exports.st_yachtheist:registerFilter('canStartYachtHeist', function(canStart)
	return canStart
end)
```

### Exports

#### <Badge type="client" text="Client" /> Start the yacht heist
Export to start Yacht Heist
```lua
exports['st_yachtheist']:StartHeist()
```