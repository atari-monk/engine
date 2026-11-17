export type FullscreenResult = {
  success: boolean;
  error: string | null;
};

export async function enterFullscreen(
  canvas: HTMLElement,
): Promise<FullscreenResult> {
  if (!canvas.requestFullscreen) {
    return {
      success: false,
      error: "Fullscreen API is not supported",
    };
  }

  try {
    await canvas.requestFullscreen();

    return {
      success: true,
      error: null,
    };
  } catch (error: unknown) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to enter fullscreen",
    };
  }
}
