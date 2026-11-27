type KeyCode = string;

type KeyboardState = {
  pressed: Set<KeyCode>;
  justPressed: Set<KeyCode>;
  justReleased: Set<KeyCode>;
};

export type KeyboardInput = {
  state: KeyboardState;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleKeyUp: (event: KeyboardEvent) => void;
  update: () => void;
  isPressed: (key: KeyCode) => boolean;
  isJustPressed: (key: KeyCode) => boolean;
  isJustReleased: (key: KeyCode) => boolean;
  dispose: () => void;
};

function createKeyboardState(): KeyboardState {
  return {
    pressed: new Set(),
    justPressed: new Set(),
    justReleased: new Set(),
  };
}

function handleKeyDown(state: KeyboardState, event: KeyboardEvent): void {
  const key = event.code;

  if (!state.pressed.has(key)) {
    state.justPressed.add(key);
  }

  state.pressed.add(key);
}

function handleKeyUp(state: KeyboardState, event: KeyboardEvent): void {
  const key = event.code;

  if (state.pressed.has(key)) {
    state.justReleased.add(key);
  }

  state.pressed.delete(key);
}

function updateKeyboardState(state: KeyboardState): void {
  state.justPressed.clear();
  state.justReleased.clear();
}

function isKeyPressed(state: KeyboardState, key: KeyCode): boolean {
  return state.pressed.has(key);
}

function isKeyJustPressed(state: KeyboardState, key: KeyCode): boolean {
  return state.justPressed.has(key);
}

function isKeyJustReleased(state: KeyboardState, key: KeyCode): boolean {
  return state.justReleased.has(key);
}

function clearKeyboardState(state: KeyboardState): void {
  state.pressed.clear();
  state.justPressed.clear();
  state.justReleased.clear();
}

export function createKeyboardInput(target: Window = window): KeyboardInput {
  const state = createKeyboardState();

  const onKeyDown = (event: KeyboardEvent): void => {
    handleKeyDown(state, event);
  };

  const onKeyUp = (event: KeyboardEvent): void => {
    handleKeyUp(state, event);
  };

  const onBlur = (): void => {
    clearKeyboardState(state);
  };

  target.addEventListener("keydown", onKeyDown);
  target.addEventListener("keyup", onKeyUp);
  target.addEventListener("blur", onBlur);

  return {
    state,
    handleKeyDown: onKeyDown,
    handleKeyUp: onKeyUp,
    update: () => updateKeyboardState(state),
    isPressed: (key) => isKeyPressed(state, key),
    isJustPressed: (key) => isKeyJustPressed(state, key),
    isJustReleased: (key) => isKeyJustReleased(state, key),
    dispose: () => {
      target.removeEventListener("keydown", onKeyDown);
      target.removeEventListener("keyup", onKeyUp);
      target.removeEventListener("blur", onBlur);
      clearKeyboardState(state);
    },
  };
}
