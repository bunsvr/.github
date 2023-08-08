# Stric
This is a project bootstrapped using the Stric official template.

## Structure
The basic structure of the project.

- [`src`](./src): Contains all source code.
- [`src/index.ts`](./src/index.ts): The main file which adds all plugins, handle 404 and errors.
- [`src/utils`](./src/utils): Contains utilities such as quick response functions.
- [`src/databases`](./src/databases): Contains databases exports and scripts. To bootstrap a database a `bootstrap.ts` file at the corresponding database folder must exist.
- [`src/scripts`](./src/scripts): Contains utility scripts. 
- [`src/plugins`](./src/plugins): Contains all plugins for the main applications.
- [`src/plugins/groups`](./src/plugins/groups): Contains all router groups.

This template is a simple Stric app that store users data with SQLite which you can search later and simulates basic authentications.
You can delete everything in `src` and start from scratch.

## Scripts 
Here are pre-made scripts to use with this template.
```bash
# Start the app 
bun run dev 

# Bootstrap a database (for creating tables, ...)
# This run 'bootstrap.ts' in 'src/databases/users'
bun db:init users
```
