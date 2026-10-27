## game loop

- game loop for HTML Canvas games
- uses a plain TypeScript object to store loop state
- uses standalone functions to operate on the state object
- the game provides `update` and `render` functions

### create

- `create(update, render)`
  - takes the game's `update` and `render` functions
  - returns a game loop instance
  - does not start automatically

### start and stop

- `start()`
  - starts the loop if it is not already running
- `stop()`
  - stops the loop if it is running

### internal frame function

- runs once per animation frame
- calculates elapsed time
- executes zero or more fixed-timestep updates
- limits catch-up updates to 5 per frame
- calls the game's render function
- schedules the next animation frame while running

### update

- runs at a fixed timestep of 1/60 second
- calls the game's `update(dt)` with a fixed `dt`
- limits catch-up updates per frame

### render

- uses `requestAnimationFrame` for scheduling
- calls the game's `render()` after updates
- does not modify game state
