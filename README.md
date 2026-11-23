# Graphite Separated

A cool graphite theme for [Safelight](https://github.com/anthonyreimche/SafeLight), mapped from the darktable theme Modern Graphite Separated. Blue-grey panel headers, a cyan accent, a teal slider and a cooler grey around the photo.

## Install

In Safelight, go to **View ▸ Extensions** and enter:

```
OPGERUIMD97/safelight-graphite-separated
```

Then apply it via **View ▸ Theme**.

Manual install: copy this folder into Safelight's plugins directory as a real directory named `theme-graphite-separated` (the folder name has to match `id`; a symlink is skipped), then restart Safelight. No build step; `index.js` is the bundle.

## Palette

| Role | Hex | Safelight token |
| --- | --- | --- |
| Lighttable / canvas | `#101419` | `--color-surface-0` |
| Panels, thumbnails | `#171c22` | `--color-surface-1` |
| Panel headers | `#4d6175` | `--color-surface-2` |
| Selected | `#355f91` | `--color-surface-3` |
| Hover | `#2a3b4c` | `--color-surface-4` |
| Control borders | `#32404d` | `--color-border` |
| Subtle borders (graph grid) | `#1d2630` | `--color-border-subtle` |
| Body text | `#dce5ed` | `--color-text-primary` |
| Labels | `#b7c2cd` | `--color-text-secondary` |
| Placeholder | `#738191` | `--color-text-muted` |
| Accent | `#7fb6ff` | `--color-accent` |
| Accent hover | `#9dc8ff` | `--color-accent-hover` |
| Slider fill | `#53c7b4` | `--color-slider-fill` |
| Text on accent | `#101419` | `--color-on-accent` |
| Stars | `#e0a84f` | `--color-rating` |
| Develop surround | `#565d66` | `--color-canvas-surround` |

The top bar uses the same token as the panel rails, so it is `#171c22`. Flags and colour labels keep Safelight's own colours, so picks, rejects and labels stay readable.

## Notes

- `--font-mono` is left unset. In Safelight 3.x that variable is the interface font, and setting it would override **Preferences ▸ Interface ▸ Interface font**. Panel titles use Switzer when that face is installed, then Avenir Next and Helvetica Neue. Install Switzer from the darktable pack if you want that face on the headers.
- What carried over from darktable: cards with a blue-grey cap, a 12px corner, a frame in the header colour, 7px control corners, an amber thumbnail outline and a cyan scrollbar. The darktable file doesn't record which panels sit on which rail, so this theme doesn't register a layout.
- Left out: the mauve blending-panel colours and the inner section pills are darktable module markup; Safelight has no matching hooks.
- The chrome stylesheet applies only while this theme is active. Dock markup is Safelight's own and can change between releases.

## Changelog

### 1.0.0
- First release: palette and panel chrome mapped from Modern Graphite Separated.

## License

MIT
