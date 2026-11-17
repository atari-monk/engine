# [fullscreen](code/fullscreen.md)

- [task](#task)
- [srs](#srs)
- [export](#export)
- [usage](#usage)

## task

- [x] create `src/fullscreen.ts`
- [x] copy code from game project
- [x] document srs from code
- [x] document export
- [x] document usage
- [x] publish library locally
- [x] test in game project
- [x] commit feature

## srs

- allow entering fullscreen mode for an html element
- report success or failure with an error message

## export

`src/index.ts`

```ts
export type { FullscreenResult } from "./fullscreen";
export { enterFullscreen } from "./fullscreen";
```

## usage

```ts
import { enterFullscreen } from "atari-monk-engine";

await enterFullscreen(canvas);
```

---

[top](#fullscreen)
