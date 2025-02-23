# Hooks
Hooks provide a way for one part of a script to interact with or modify another at designated points in execution. This system was inspired by [Kad](https://github.com/Jump-On-Studios), so credit goes to him for the concept!

There are two main types of hooks: Actions and Filters. To use them, you need to create a callback function and register it using an export linked to a specific action or filter.

A full list of available script hooks can be found in each script’s documentation.

## Actions
[Actions](actions) allow you to execute additional functionality at specific moments within a script. They trigger at predefined points, enabling callback functions to perform tasks such as logging, inserting data into a database, or executing commands. Unlike filters, action callbacks do not return values—they simply run and complete their task.

## Filters
[Filters](filters) allow for data modification during script execution. A filter's callback function receives a value, modifies it, and then returns the updated version. Filters are designed to work without causing side effects, meaning they shouldn’t alter global variables or directly affect output. Their purpose is solely to modify and return data for further use.

## Actions vs. Filters
The key difference between actions and filters comes down to how they interact with data:

- Actions perform a task based on the received data but do not return anything. They execute a function and then exit without passing a modified value back.
- Filters modify the received data and return it for further processing. They should be used strictly for adjusting values, not for performing unrelated tasks.

### To put it simply:

- An action is like a detour in the code that executes something before resuming the normal flow.
- A filter is like a refining step that tweaks a value before passing it forward.

The details of how parameters are passed through hooks will be covered in later sections.

