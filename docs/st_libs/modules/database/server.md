---
outline: 2
---
# Database

A library to made more optimize the link with your Database

## st.database.addColumn()

A function to create a column in a specific table if not exist

### Syntax
```lua
st.database.addColumn(tableName,name,definition)
```
#### Parameters
`tableName` : *string*
> The name of the table  

`name` : *string*
> The name of the column  

`definition` : *string*
> The definition of the column  
  
#### Return value
Type: *boolean*
> Return `true` if the column is successfully created
  

### Example
```lua
local isColumnAdded = st.addColumn('table_name','column_name','INT NOT NULL DEFAULT "0" AFTER TABLE table_name')
```

## st.database.addTable()
A function to create a table if not exist

### Syntax
```lua
st.database.addTable(tableName, tableStructure)
```
#### Parameters
`tableName` : *string*
> The name of the table

`tableStructure` : *string*
> The structure of the table  
  
#### Return value
Type: *boolean*
> Return `true` if the table successfully created  
  

### Example
```lua
local isTableCreated = st.database.addTable(
  'your_table_name',
  [[id INT NOT NULL AUTO_INCREMENT,
  first_column VARCHAR(50) NOT NULL DEFAULT '',
  second_column VARCHAR(50) NOT NULL DEFAULT '',]]
)
```

## st.database.addTrigger()

A function to create a trigger if not exist

### Syntax
```lua
st.database.addTrigger(triggerName,definition)
```
#### Parameters
`triggerName` : *string*
> The name of the trigger  
  
`definition` : *string*
> The definition of the trigger  
  

#### Return value
Type: *boolean*
> Return `true` if the trigger is successfully created
  

### Example
```lua
local isTriggerCreated = st.addTriggerDB(
  'the_name_of_the_trigger',
  "AFTER DELETE ON `table` FOR EACH ROW UPDATE `table2` SET column = 0 WHERE equiped_on = OLD.id"
)
```