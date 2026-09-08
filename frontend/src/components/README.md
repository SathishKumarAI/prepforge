# `components` — what renders

Subdirectories each carry their own README with a change → file table:
`page/` (the three-zone contract), `shell/` (the nav), `library/` (the
Library's views), `study/`, `card/`, `notes/`, `ui/` (shadcn primitives).

## Change → file

| Change | File |
|---|---|
| Composition of the shell; focus mode; global keys (`?`, `f`, Ctrl+K) | `Layout.tsx` (parts in `shell/`) |
| Ctrl+K palette: what it lists and where it jumps | `CommandPalette.tsx` |
| The Settings dialog and its fields | `SettingsPanel.tsx` |
| The keyboard-shortcut sheet | `ShortcutHelp.tsx` |
| Download / restore controls | `BackupControls.tsx` |
| A generated lens: fetching, versions, ⓘ, regenerate | `DeepAnswer.tsx` |
| Rendering markdown (tables, code, footnotes, highlight loading) | `Markdown.tsx` |
| Long-form reading surface with a table of contents | `ReadingPane.tsx` |
| A saved-list card (Library → Saved) | `QuestionCard.tsx` (parts in `card/`) |
| Highlight → "Make a card" | `CardFromSelection.tsx` |
| Opening a source document / an article in a dialog | `SourceDoc.tsx` / `ArticleReader.tsx` |
| Recording a voice note | `VoiceRecorder.tsx` |
| Topic / difficulty badge | `Badge.tsx` |
| A key cap | `Kbd.tsx` |
| Loading, skeleton, empty surfaces | `States.tsx` |

## Rules

- **Glass is for chrome.** `.glass` on bars, menus, tooltips, floating controls;
  `.panel` or opaque on anything read. See `page/README.md`.
- **One accent.** The accent is spent on the primary button, the active nav item,
  the active segment and the spine. Everything else is neutral.
- **Every clickable thing shows its pressed state** (`aria-pressed` + a fill).
