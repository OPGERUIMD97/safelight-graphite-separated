// Graphite Separated — cool graphite theme for Safelight.
//
// Mapped from the darktable user.css "Modern Graphite Separated":
// blue-grey module headers, a cyan accent, a teal slider fill, and a
// cooler grey around the photo. The stylesheet redraws the separated
// cards (12px caps, header band, frame). It does not move panels.

const MARK = "--theme-graphite-separated";

// Active only while this theme's vars are on <html>. Safelight removes them
// when another theme is chosen, so the chrome rules drop out with the colours.
const CHROME_CSS = `
html[style*="${MARK}: 1"] [data-rail] {
  background-color: #101419;
  border-color: transparent;
}

html[style*="${MARK}: 1"] [data-dock-panel] {
  margin: 3px 6px;
  border: none;
  border-radius: 12px;
  background-color: #171c22;
  box-shadow: inset 0 0 0 2px #4d6175;
}

html[style*="${MARK}: 1"] [data-dock-panel] > div:first-child,
html[style*="${MARK}: 1"] .sl-floating-panel > div:first-child {
  height: auto;
  min-height: 32px;
  border: none;
  border-radius: 12px 12px 0 0;
  background-color: #4d6175;
  padding: 6px 8px;
}

html[style*="${MARK}: 1"] [data-dock-panel] > div:first-child > span.flex-1,
html[style*="${MARK}: 1"] .sl-floating-panel > div:first-child > span.flex-1 {
  text-transform: none;
  letter-spacing: 0.35px;
  font-size: 13px;
  font-weight: 600;
  color: #edf4fb;
  font-family: "Switzer Semibold", "Switzer", "Avenir Next Demi Bold", "Avenir Next", "Helvetica Neue", sans-serif;
}

html[style*="${MARK}: 1"] [data-dock-panel] > div:first-child > span.w-2,
html[style*="${MARK}: 1"] .sl-floating-panel > div:first-child > span.w-2 {
  width: 14px;
  font-size: 13px;
  line-height: 1;
}

html[style*="${MARK}: 1"] [data-dock-panel] > div:first-child > button[title="Close panel"],
html[style*="${MARK}: 1"] .sl-floating-panel > div:first-child > button[title="Close panel"] {
  font-size: 16px;
  line-height: 1;
  padding-inline: 4px;
}

html[style*="${MARK}: 1"] button:not(.sl-switch):not(.sl-select),
html[style*="${MARK}: 1"] input[type="text"],
html[style*="${MARK}: 1"] input[type="number"],
html[style*="${MARK}: 1"] input[type="search"],
html[style*="${MARK}: 1"] textarea,
html[style*="${MARK}: 1"] .sl-select {
  border-radius: 7px;
  border-color: #32404d;
}

html[style*="${MARK}: 1"] button:not(.sl-switch):not(.sl-select):hover,
html[style*="${MARK}: 1"] input[type="text"]:hover,
html[style*="${MARK}: 1"] input[type="number"]:hover,
html[style*="${MARK}: 1"] input[type="search"]:hover,
html[style*="${MARK}: 1"] textarea:hover,
html[style*="${MARK}: 1"] .sl-select:hover {
  border-color: #67c7d9;
}

html[style*="${MARK}: 1"] [data-photo-id].border-text-secondary,
html[style*="${MARK}: 1"] [data-photo-id].border-text-secondary\\/60,
html[style*="${MARK}: 1"] [data-photo-id]:hover {
  border-color: #d98c3f;
}

html[style*="${MARK}: 1"] ::-webkit-scrollbar-thumb {
  background-color: #27313a;
  border-radius: 6px;
}

html[style*="${MARK}: 1"] ::-webkit-scrollbar-thumb:hover {
  background-color: #78c8ff;
}
`;

export function activate(api) {
  api.registerTheme({
    id: "theme-graphite-separated.theme",
    name: "Graphite Separated",
    colorScheme: "dark",
    vars: {
      // Library grid and the gap between panel cards.
      "--color-surface-0": "#101419",
      // Panel rails, thumbnails, top bar.
      "--color-surface-1": "#171c22",
      // Panel headers. Blue-grey, set apart from the panel body.
      "--color-surface-2": "#4d6175",
      // Pressed and selected rows.
      "--color-surface-3": "#355f91",
      // Hover.
      "--color-surface-4": "#2a3b4c",

      "--color-border": "#32404d",
      "--color-border-subtle": "#1d2630",

      "--color-text-primary": "#dce5ed",
      "--color-text-secondary": "#b7c2cd",
      "--color-text-muted": "#738191",

      "--color-accent": "#7fb6ff",
      "--color-accent-hover": "#9dc8ff",
      // Slider fill stays teal. The accent itself is cyan.
      "--color-slider-fill": "#53c7b4",
      "--color-on-accent": "#101419",

      // Develop's surround behind the photo.
      "--color-canvas-surround": "#565d66",

      "--color-rating": "#e0a84f",
      "--color-flag-pick": "#7A9B76",
      "--color-flag-reject": "#C1453C",

      "--color-label-red": "#C1453C",
      "--color-label-yellow": "#D9A05B",
      "--color-label-green": "#7A9B76",
      "--color-label-blue": "#6B8CAE",
      "--color-label-purple": "#9B7AA3",

      "--curve-rgb": "#f3f8fc",
      "--curve-grid": "#1d2630",
      "--curve-identity": "#83909d",
      "--curve-ring": "#c8d2dc",
      "--curve-ring-focused": "#7fb6ff",
      "--curve-point": "#f3f8fc",
      "--histogram-curve": "rgba(188, 200, 212, 0.45)",
      "--histogram-grid": "#1d2630",
      "--histogram-zone": "rgba(188, 200, 212, 0.12)",
      "--histogram-label": "#c8d2dc",

      // Marker read by the chrome stylesheet. Not a colour.
      [MARK]: "1",

      // Leave --font-mono unset so Preferences ▸ Interface ▸ Interface font
      // keeps working. In Safelight 3.x that variable is the UI font.
      "--font-code": "'SF Mono', 'Cascadia Code', 'Fira Code', Consolas, ui-monospace, monospace",
    },
  });

  api.registerStylesheet?.({
    id: "theme-graphite-separated.chrome",
    css: CHROME_CSS,
  });
}

export function deactivate() {}
