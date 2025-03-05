# 🤝 Teams
Documentation relating to the st_teams.

:::tabs
== GET FOR FREE
[Get the script](https://shop.stausi.com/package/6528185)
:::

## 1. Installation
To install st_teams :

- Download st_teams from your [keymaster](https://keymaster.fivem.net/asset-grants?search=teams)
- Unzip the folder and drop it in your resource folder <br><br>
- Add this ensure in your server.cfg
  - `ensure st_teams`

## 2. Usage
Press F10 and start manageing your team!

## 3. For developers

### Data Structure

`owner` : *table*   
> `source` : *number* - The source of the owner   
> `identifier` : *string* - The identifier of the owner   
> `name` : *string* - The player name of the owner   

`uuid` : *string* - The team UUID   
`name` : *string* - The team name

`members` : *table*   
> `source` : *number* - The member source   
> `identifier` : *string* - The member identifier   
> `name` : *string* - The member name 

`invites` : *table*   
> `source` : *number* - The invited player source   
> `identifier` : *string* - The invited player identifier    
> `name` : *string* - The invited player name    

### Events
Events which are triggered when a team action occurs

#### <Badge type="server" text="Server" /> st_teams:teamAction

##### Syntax
```lua
RegisterNetEvent("st_teams:teamAction", function(uuid, actionType, target) end)
```

##### Parameters
`uuid` : *string*
> The uuid of the team

`actionType` : *string*
> `inviteMember` : *string* - When a member is invited to a team   
> `removeInvite` : *string* - When a member has invite removed   
> `declineInvite` : *string* - When a member declines an invite   
> `togglePublic` : *string* - When a team is going public or not in Teams Hub   
> `addPlayer` : *string* - When a member has been added to the team   
> `removePlayer` : *string* - When a member has been removed from the team   
> `leaveTeam` : *string* - When a member has left the team   
> `CreateTeam` : *string* - When a team is created   
> `deleteTeam` : *string* - When a team is deleted   
> `changeownership` : *string* - When a teams ownership is changed   
> `changename` : *string* - When a teams name is changed   

### Exports

#### <Badge type="server" text="Server" /> Get The Team from UUID
Returns the team from uuid
```lua
-- @param uuid - The Team UUID
-- @return Team
local team = exports.st_teams:getTeamFromUUID(uuid)
```

#### <Badge type="server" text="Server" /> Get The Team from UUID
Returns the team from uuid
```lua
-- @param uuid - The Team UUID
-- @return Team
local team = exports.st_teams:getTeamFromUUID(uuid)
```

#### <Badge type="server" text="Server" /> Leave the team
Makes the user leave the team
```lua
-- @param source - The source which leaves the team
exports.st_teams:leaveTeam(source)
```

#### <Badge type="server" text="Server" /> Add player to team
Adds a target to the team
```lua
-- @param source - The source which adds the target to the team
-- @param target - The target which is added to the team
exports.st_teams:AddPlayerToTeam(source, target)
```

#### <Badge type="server" text="Server" /> Is Player in Team
Returns if player is in a team or not
```lua
-- @param source - The source which is in a team or not
-- @return Boolean
local isInTeam = exports.st_teams:IsPlayerInTeam(source)
```

#### <Badge type="server" text="Server" /> Create Team
Creates a team
```lua
-- @param source - The source which creates the team
-- @param name - The name of the team (optional)
-- @return Team
local team = exports.st_teams:getTeamFromUUID(uuid)
```