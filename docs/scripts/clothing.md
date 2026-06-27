# 👚 Clothing Menu
Documentation relating to the st_clothing.

:::tabs
== BUY
[Buy the script](https://shop.stausi.com/package/6554614)
:::

## 1. Installation
The Clothing Menu works on ESX/QB frameworks thats compatible with st_libs. If you miss one, create it in the libs, or ask me on discord!<br>

To install st_clothing :

- Download the library: [st_libs](https://github.com/Stausi/st_libs/releases/latest/download/st_libs.zip)
- Unzip the folder and drop it in your resource folder <br><br>
- Download st_clothing from your [keymaster](https://keymaster.fivem.net/asset-grants?search=clothing)
- Unzip the folder and drop it in your resource folder <br><br>
- Add this ensure in your server.cfg
  - `ensure st_libs`
  - `ensure st_clothing`

## 2. Usage
Use /clothing command or use the several hair dressers or clothing stores to customize your character!

## 3. Configuration

:::details Config.lua
```lua
Config = Config or {}

-- New hud, which utilise images as clothing
-- The old one, is in plain text

Config.NewHud = true

-- Increases faces with 45 for using Onx faces.

Config.OnxFaces = false

-- The position of notification
-- Types from Ox Lib

-- 'top'
-- 'top-right'
-- 'top-left'
-- 'bottom'
-- 'bottom-right'
-- 'bottom-left'
-- 'center-right'
-- 'center-left'

Config.NotifyPosition = "top-right"

-- This is NOT recommended that, this can be used to bug several aspects of the game.
-- If you need a player to change gender, give them the PED model.

Config.CanChangeGender = false

-- If you Previous used Illenium, please use the same size here.
-- Sets how long a Outfit code will be

Config.OutfitCodeLength = 10

-- Your admin rang, to manage peds for players

Config.AdminGroup = "admin"

-- Your Payment methode

Config.PaymentType = "bank"

-- How long cooldown before reloading skin again

Config.ReloadSkinCooldown = 5000

-- If the players face should autofix for the mask.

Config.AutoFixMasks = true

-- Color codes in Hex code for the UI.
-- If you want to edit more, you can edit CSS directly in /web/css/custom-styles.css

Config.Themes = {
    mainColor = "#ae1e1e",
    paymentColor = "#42C97A",
}

-- Please specify addon peds here.

Config.AddonPeds = {
    -- ["konrad_ped"] = true,
}

-- If you have custom peds, and need to set a converted image from a normal ped
-- So like a custom ped named `konrad_ped` which is from `u_m_y_chip` will take the image from `u_m_y_chip`.
-- If not inspired by native ped, just add a custom image in the build folder.

Config.PedConvertImage = {
    -- ["konrad_ped"] = "u_m_y_chip",
}

-- Enable prices in the clothing menu.

Config.HasPrices = true

-- Sets the prices for each category.

Config.CategoryPrices = {
    ["category_clothing"] = 20,
    ["category_access"] = 20,
    ["category_hair"] = 20,
}

-- Here you can set prices for each component.
-- Like in the example component id is 11 (torso) and number 5 in torso is 200$.

Config.ComponentPrices = {
    [11] = {
        [5] = 200,
    }
}

-- Here you can set prices for each prop.
-- Like in the example prop id is 0 (helmet) and number 5 in helmet is 200$.

Config.PropsPrices = {
    [0] = {
        [5] = 200,
    }
}

-- Set restrictions on what can open on the different openings
-- Leave empty or nil, to leave everything open.

--[[
    Different Categories:
        - category_peds (Overview over users peds)
        - category_face (Facial customization)
        - category_skin (Skin customization)
        - category_hair (Hair customization)
        - category_makeup (Makeup customization)
        - category_clothing (Clothing)
        - category_access (Accessories)
    
    
    ATTENTION!!!
    If using Multichar, you can only add access to a player which is created.
    So by limiting Peds to neither is NOT advised
]]

Config.Restrictions = {
    ["command"] = nil, -- By doing this, you are complete disabling this methode.
    ["plastic"] = {
        ["category_clothing"] = true,
        ["category_access"] = true,
        ["category_hair"] = true,
    },
    ["barber"] = {
        ["category_peds"] = true,
        ["category_face"] = true,
        ["category_clothing"] = true,
        ["category_access"] = true,
    },
    ["clothes"] = {
        ["category_face"] = true,
        ["category_skin"] = true,
        ["category_hair"] = true,
    },
}

-- Specify the clothing command here

Config.Command = "clothing"

-- Should wardrobes open with the command

Config.CommandWardrobe = false

-- If /clothing command only should be enable near a store

Config.OnlyEnableCommandNearStore = false

-- The distance to the nearest store

Config.NearestStoreDistance = 20.0

-- If /clothing command should use the nearest store as permissions

Config.UseNearestStore = true

-- If Markers should be enabled or not.

Config.EnableMarkers = true

-- Which key to interact with the different kinds of Stores

Config.EnteractKey = "E"

-- Marker style for the stores.

Config.Size = { x = 0.7, y = 0.7, z = 0.7 }
Config.Color = { r = 240, g = 52, b = 52 }
Config.Type = 20

-- Which stores to have a coord where you can interact with the style of clothing/store.

Config.Stores = {
    ["plastic"] = {
        name = 'Plastic Surgery',
        interactLabel = 'open the Plastic Surgery',
        hasWardrobe = false,
        spriteType = 362,
        spriteColour = 0,
        spriteScale = 0.9,
        StoresCoords = {
            {pos = vector3(357.33, -601.94, 42.28), hasBlip = true}, 
        }
    },
    ["barber"] = {
        name = 'Barber',
        interactLabel = 'open the Barber',
        hasWardrobe = false,
        spriteType = 71,
        spriteColour = 51,
        spriteScale = 0.8,
        StoresCoords = {
            {pos = vector3(-814.308, -183.823, 36.568), hasBlip = true}, 
            {pos = vector3(136.826, -1708.373, 28.291), hasBlip = true}, 
            {pos = vector3(-1282.604, -1116.757, 5.990), hasBlip = true}, 
            {pos = vector3(1931.513, 3729.671, 31.844), hasBlip = true}, 
            {pos = vector3(1212.840, -472.921, 65.208), hasBlip = true}, 
            {pos = vector3(-32.885, -152.319, 56.076), hasBlip = true}, 
            {pos = vector3(-278.077, 6228.463, 30.695), hasBlip = true}, 
            {pos = vector3(111.67, -1302.51, 28.3), hasBlip = false}, 
        }
    },
    ["clothes"] = {
        name = 'Clothing Store',
        interactLabel = 'open the Clothing Store',
        hasWardrobe = true,
        spriteType = 73,
        spriteColour = 0,
        spriteScale = 1.0,
        StoresCoords = {
            {pos = vector3(72.254, -1399.102, 28.376), hasBlip = true},
            {pos = vector3(-709.72, -152.24, 36.43), hasBlip = true},
            {pos = vector3(-163.61, -303.07, 38.75), hasBlip = true},
            {pos = vector3(428.694, -800.106, 28.491), hasBlip = true},
            {pos = vector3(-829.413, -1073.710, 10.328), hasBlip = true},
            {pos = vector3(-1450.23, -237.47, 48.83), hasBlip = true},
            {pos = vector3(11.632, 6514.224, 30.877), hasBlip = true},
            {pos = vector3(124.91, -224.13, 53.57), hasBlip = true},
            {pos = vector3(1696.291, 4829.312, 41.063), hasBlip = true},
            {pos = vector3(614.88, 2763.41, 41.10), hasBlip = true},
            {pos = vector3(1190.550, 2713.441, 37.222), hasBlip = true},
            {pos = vector3(-1192.40, -768.36, 16.34), hasBlip = true},
            {pos = vector3(-3171.43, 1043.59, 19.88), hasBlip = true},
            {pos = vector3(-1108.441, 2708.923, 18.107), hasBlip = true},
            {pos = vector3(458.34, -999.08, 29.72), hasBlip = false},
            {pos = vector3(1839.68, 3677.68, 37.94), hasBlip = false},
            {pos = vector3(-452.73, 6016.12, 30.73), hasBlip = false},
            {pos = vector3(379.41, -1408.27, 31.95), hasBlip = false},
            {pos = vector3(1115.52, -3161.18, -37.80), hasBlip = false},
            {pos = vector3(107.54, -1306.74, 28.3), hasBlip = false},
            {pos = vector3(-731.90, -1311.47, 4.00), hasBlip = false},
            {pos = vector3(1748.88, 2482.93, 44.74), hasBlip = false},
            {pos = vector3(1833.96, 2570.84, 45.03), hasBlip = false},
            {pos = vector3(284.34, -1170.51, 28.29), hasBlip = false},
            {pos = vector3(-1382.29, -632.44, 29.82), hasBlip = false},
            {pos = vector3(-566.49, -914.92, 22.87), hasBlip = false},
            {pos = vector3(-590.66, -925.80, 27.70), hasBlip = false},
            {pos = vector3(922.19, 28.46, 70.85), hasBlip = false},
            {pos = vector3(2514.97, -344.52, 100.91), hasBlip = false},
            {pos = vector3(2522.25, -330.46, 93.11), hasBlip = false},
            {pos = vector3(-571.87, 209.79, 82.31), hasBlip = false},
            {pos = vector3(1787.28, 3653.49, 33.87), hasBlip = false},
            {pos = vector3(298.94, -598.25, 42.31), hasBlip = false},
        }
    },
}

-- Just Initial clothes for the player.
-- Only modify this, if you know what you are doing.

Config.InitialPlayerClothes = {
    Male = {
        Model = "mp_m_freemode_01",
        Components = {
            {
                component_id = 0, -- Face
                drawable = 0,
                texture = 0
            },
            {
                component_id = 1, -- Mask
                drawable = 0,
                texture = 0
            },
            {
                component_id = 2, -- Hair
                drawable = 0,
                texture = 0
            },
            {
                component_id = 3, -- Upper Body
                drawable = 0,
                texture = 0
            },
            {
                component_id = 4, -- Lower Body
                drawable = 0,
                texture = 0
            },
            {
                component_id = 5, -- Bag
                drawable = 0,
                texture = 0
            },
            {
                component_id = 6, -- Shoes
                drawable = 0,
                texture = 0
            },
            {
                component_id = 7, -- Scarf & Chains
                drawable = 0,
                texture = 0
            },
            {
                component_id = 8, -- Shirt
                drawable = 0,
                texture = 0
            },
            {
                component_id = 9, -- Body Armor
                drawable = 0,
                texture = 0
            },
            {
                component_id = 10, -- Decals
                drawable = 0,
                texture = 0
            },
            {
                component_id = 11, -- Jacket
                drawable = 0,
                texture = 0
            }
        },
        Props = {
            {
                prop_id = 0, -- Hat
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 1, -- Glasses
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 2, -- Ear
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 6, -- Watch
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 7, -- Bracelet
                drawable = -1,
                texture = -1
            }
        },
        Hair = {
            color = 0,
            highlight = 0,
            style = 0,
            texture = 0
        }
    },
    Female = {
        Model = "mp_f_freemode_01",
        Components = {
            {
                component_id = 0, -- Face
                drawable = 0,
                texture = 0
            },
            {
                component_id = 1, -- Mask
                drawable = 0,
                texture = 0
            },
            {
                component_id = 2, -- Hair
                drawable = 0,
                texture = 0
            },
            {
                component_id = 3, -- Upper Body
                drawable = 0,
                texture = 0
            },
            {
                component_id = 4, -- Lower Body
                drawable = 0,
                texture = 0
            },
            {
                component_id = 5, -- Bag
                drawable = 0,
                texture = 0
            },
            {
                component_id = 6, -- Shoes
                drawable = 0,
                texture = 0
            },
            {
                component_id = 7, -- Scarf & Chains
                drawable = 0,
                texture = 0
            },
            {
                component_id = 8, -- Shirt
                drawable = 0,
                texture = 0
            },
            {
                component_id = 9, -- Body Armor
                drawable = 0,
                texture = 0
            },
            {
                component_id = 10, -- Decals
                drawable = 0,
                texture = 0
            },
            {
                component_id = 11, -- Jacket
                drawable = 0,
                texture = 0
            }
        },
        Props = {
            {
                prop_id = 0, -- Hat
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 1, -- Glasses
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 2, -- Ear
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 6, -- Watch
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 7, -- Bracelet
                drawable = -1,
                texture = -1
            }
        },
        Hair = {
            color = 0,
            highlight = 0,
            style = 0,
            texture = 0
        }
    }
}
```

:::
## 4. For developers

### Exports

#### <Badge type="client" text="Client" /> Opens the clothing menu
Opens the clothing menu
```lua
exports['st_clothing']:OpenClothingMenu()
```

### Get Exports

#### <Badge type="client" text="Client" /> Get the current ped model
Get the current ped model
```lua
local model = exports['st_clothing']:getPedModel()
```

#### <Badge type="client" text="Client" /> Get the current ped components
Get the current ped components
```lua
local components = exports['st_clothing']:getPedComponents()
```

#### <Badge type="client" text="Client" /> Get the current ped props
Get the current ped props
```lua
local props = exports['st_clothing']:getPedProps()
```

#### <Badge type="client" text="Client" /> Get the current ped head blend
Get the current ped head blend
```lua
local blend = exports['st_clothing']:getPedHeadBlend()
```

#### <Badge type="client" text="Client" /> Get the current ped face features
Get the current ped face features
```lua
local features = exports['st_clothing']:getPedFaceFeatures()
```

#### <Badge type="client" text="Client" /> Get the current ped head overlays
Get the current ped head overlays
```lua
local overlays = exports['st_clothing']:getPedHeadOverlays()
```

#### <Badge type="client" text="Client" /> Get the current ped hair
Get the current ped hair
```lua
local hair = exports['st_clothing']:getPedHair()
```

#### <Badge type="client" text="Client" /> Get the current ped appearance
Get the current ped appearance
```lua
local appearance = exports['st_clothing']:getPedAppearance()
```

### Set Exports

#### <Badge type="client" text="Client" /> Set the current ped model
Set the current ped model
```lua
---@param model = string : Define the ped model
exports['st_clothing']:setPlayerModel(model)
```

#### <Badge type="client" text="Client" /> Set the current ped model
Set the current ped model
```lua
---@param model = string : Define the ped model
exports['st_clothing']:setPlayerModel(model)
```

#### <Badge type="client" text="Client" /> Set ped head blend
Set the head blend of the ped
```lua
---@param blendData = table : Define the head blend data
exports['st_clothing']:setPedHeadBlend(blendData)
```

#### <Badge type="client" text="Client" /> Set ped face features
Set the face features of the ped
```lua
---@param features = table : Define the face features
exports['st_clothing']:setPedFaceFeatures(features)
```

#### <Badge type="client" text="Client" /> Set ped head overlays
Set the head overlays of the ped
```lua
---@param overlays = table : Define the head overlays
exports['st_clothing']:setPedHeadOverlays(overlays)
```

#### <Badge type="client" text="Client" /> Set ped hair
Set the hair style of the ped
```lua
---@param hairData = table : Define the hair style
exports['st_clothing']:setPedHair(hairData)
```

#### <Badge type="client" text="Client" /> Set ped eye color
Set the eye color of the ped
```lua
---@param eyeColor = number : Define the eye color ID
exports['st_clothing']:setPedEyeColor(eyeColor)
```

#### <Badge type="client" text="Client" /> Set ped component
Set a specific component of the ped
```lua
---@param componentId = number : Component ID
---@param drawableId = number : Drawable ID
---@param textureId = number : Texture ID
---@param paletteId = number : Palette ID
exports['st_clothing']:setPedComponent(componentId, drawableId, textureId, paletteId)
```

#### <Badge type="client" text="Client" /> Set ped components
Set multiple components of the ped
```lua
---@param components = table : Define multiple components
exports['st_clothing']:setPedComponents(components)
```

#### <Badge type="client" text="Client" /> Set ped prop
Set a specific prop for the ped
```lua
---@param propId = number : Prop ID
---@param drawableId = number : Drawable ID
---@param textureId = number : Texture ID
exports['st_clothing']:setPedProp(propId, drawableId, textureId)
```

#### <Badge type="client" text="Client" /> Set ped props
Set multiple props for the ped
```lua
---@param props = table : Define multiple props
exports['st_clothing']:setPedProps(props)
```

#### <Badge type="client" text="Client" /> Set player appearance
Set the entire player appearance
```lua
---@param appearanceData = table : Define the full appearance data
exports['st_clothing']:setPlayerAppearance(appearanceData)
```

#### <Badge type="client" text="Client" /> Set ped appearance
Set the entire ped appearance
```lua
---@param appearanceData = table : Define the full appearance data
exports['st_clothing']:setPedAppearance(appearanceData)
```

## 5. Tattoo Shops

### 5.1 Tattoo Shop Locations

Tattoo shops are defined in `Config.TattooShops`. Each entry specifies a world position and optionally a blip on the map.

:::details Config.TattooShops
```lua
Config.TattooShops = {
    {
        pos = vector3(322.73, 180.94, 103.58),
        hasBlip = true,
        name = "Inkhaus Tattoo"
    },
    -- Add more shops here
}
```
:::

### 5.2 Tattoo Chair Settings

`Config.TattooSettings` controls the tattoo artist workflow. Each entry is keyed by a business name that corresponds to the `companyName` field.

:::details Config.TattooSettings
```lua
Config.TattooSettings = {
    ["vinewood_business"] = {
        companyName = "inkhaus",
        chairs = {
            {
                hasPlayerInChair = false,
                -- Where the customer sits
                coords = vector4(325.12, 183.33, 103.36, 295.15),
                offset = vector3(0.1, 0.88, -0.6),
                playerSource = 0,
                isPlayerWorking = false,
                -- The prop used as the artist's stool
                workModel = "mxc_tattoo_prop_stool",
                -- Where the artist stands/sits
                workcoords = vector4(325.1, 184.32, 103.32, 271.47),
                workoffset = vector3(0.2, -0.2, -0.6),
                -- Minimum tattoos needed to unlock the job
                workNeededTattoos = 0,
            },
        },
    },
}
```
:::

| Field | Type | Description |
|---|---|---|
| `companyName` | `string` | Internal identifier matching the shop entry |
| `coords` | `vector4` | Position and heading for the customer chair |
| `offset` | `vector3` | Offset applied when seating the customer |
| `workModel` | `string` | Prop spawned as the artist's seat |
| `workcoords` | `vector4` | Position and heading for the artist |
| `workoffset` | `vector3` | Offset applied when seating the artist |
| `workNeededTattoos` | `number` | How many tattoos a worker must have applied to unlock the job |

---

### 5.3 rcore_tattoos Integration

st_clothing supports loading custom tattoo lists from **rcore_tattoos**. When `rcore_tattoos` is running, st_clothing automatically pulls its tattoo lists at startup via an export.

#### Step 1 — Add the export to rcore_tattoos

Open `rcore_tattoos/config.lua` and add the following export **at the bottom of the file**:

```lua
exports('GetTattooList', function()
    return Config.TattooLists
end)
```

#### Step 2 — Define your tattoo list files

In `rcore_tattoos/config.lua`, define `Config.TattooLists` as a table of file paths. Each path is relative to the `assets/tattooLists/` directory inside the rcore_tattoos resource.

```lua
Config.TattooLists = {
    "custom_pack_01.json",
    "custom_pack_02.json",
}
```

#### Step 3 — JSON file format

Each JSON file inside `rcore_tattoos/assets/tattooLists/` should follow this structure:

```json
{
    "collection": "my_custom_pack",
    "tattoos": [
        {
            "name": "Dragon Back",
            "price": 500,
            "zone": "ZONE_TORSO",
            "hashMale": "mp_tat_m_dragon_back",
            "hashFemale": "mp_tat_f_dragon_back"
        }
    ]
}
```

| Field | Type | Description |
|---|---|---|
| `collection` | `string` | Unique identifier for the pack (used as a category label) |
| `name` | `string` | Display name shown in the tattoo menu |
| `price` | `number` | Cost of the tattoo (stripped from client-side data automatically) |
| `zone` | `string` | Body zone — see zones table below |
| `hashMale` | `string` | Game hash for male ped |
| `hashFemale` | `string` | Game hash for female ped |

**Available zones:**

| Zone key | Description |
|---|---|
| `ZONE_HEAD` | Head |
| `ZONE_TORSO` | Torso / chest / back |
| `ZONE_LEFT_ARM` | Left arm |
| `ZONE_RIGHT_ARM` | Right arm |
| `ZONE_LEFT_LEG` | Left leg |
| `ZONE_RIGHT_LEG` | Right leg |

#### Step 4 — Ensure order in server.cfg

Make sure `rcore_tattoos` is started **before** `st_clothing`:

```
ensure rcore_tattoos
ensure st_clothing
```

::: tip
Prices are automatically stripped from the data sent to clients — only the server holds the full price information.
:::

---

## 6. CDN Setup

By default st_clothing serves all clothing preview images directly from your FiveM server. For servers with many players this can cause noticeable load times. Using a CDN offloads image delivery to a dedicated file host, making the menu significantly faster.

### 6.1 What is the CDN used for?

The `Config.NewHud = true` clothing UI shows a **preview image** for every drawable in each category (components and props). Without a CDN these images are streamed from your server. With a CDN they are fetched from an external URL, reducing bandwidth on your game server.

### 6.2 Generating the images

The resource ships with a ready-made image capture tool inside `other_resources/image-creator`.

#### Dependencies

- [screenshot-basic](https://github.com/citizenfx/screenshot-basic) — must be started before the image-creator resource
- Node.js + yarn

#### Installation

1. Rename the folder from `main-fivem-greenscreener` to `fivem-greenscreener`.
2. Place it **directly** in your resources root (not inside a subfolder like `[scripts]`).
3. Ensure `screenshot-basic` and `fivem-greenscreener` in your `server.cfg`.

#### Running the capture

1. Disable any dynamic weather/time scripts to get a clean background.
2. Join your server and run `/screenshot` in chat.
3. Wait for the process to finish — **do not move your mouse** while it runs.

The script places all screenshots in the resource's output folder, using this naming convention:

```
{pedModel}_{componentId}_{drawableId}
{pedModel}_prop_{propId}_{drawableId}
```

**Examples:**
- `mp_m_freemode_01_11_5.png` — male ped, jacket (component 11), drawable 5
- `mp_f_freemode_01_prop_0_3.png` — female ped, hat (prop 0), drawable 3

#### Processing the images

After capture, process the raw PNG screenshots:

1. Use **[XnConvert](https://www.xnview.com/en/xnconvert/)** (or a similar batch processor) to:
   - Remove the green screen background (chroma key / color replace → transparent)
   - Convert to `.webp` for smaller file sizes

> Keeping images as `.webp` is strongly recommended — it can reduce image sizes by 60–80 % compared to PNG.

### 6.3 Hosting the images

Upload the processed images to any static file host. Common options:

| Provider | Notes |
|---|---|
| **Cloudflare R2** | Free tier, global CDN, S3-compatible |
| **AWS S3 + CloudFront** | Reliable, pay-per-use |
| **Cloudflare Pages** | Free static hosting, easy Git deployment |
| **Bunny CDN** | Cheap bandwidth, easy to use |

Organise your files so they are accessible at a stable base URL, e.g.:

```
https://cdn.example.com/clothing/mp_m_freemode_01_11_5.webp
```

### 6.4 Configuring the CDN URL

Open `config.lua` and set `Config.CdnUrl` to the **base URL** of your image host — without a trailing slash:

```lua
-- Default (CDN disabled — images served from game server)
Config.CdnUrl = "false"

-- With CDN enabled
Config.CdnUrl = "https://cdn.example.com/clothing"
```

When a CDN URL is set, st_clothing constructs image paths as:

```
{Config.CdnUrl}/{pedModel}_{componentId}_{drawableId}.webp
```

::: warning
Make sure CORS is configured on your CDN/bucket to allow requests from your FiveM server domain, otherwise images may fail to load in the NUI.
:::

::: tip
You can use **Cloudflare R2** with a custom domain entirely for free for most server sizes. Create a public bucket, upload your `.webp` images, and point `Config.CdnUrl` to your R2 public URL or custom domain.
:::