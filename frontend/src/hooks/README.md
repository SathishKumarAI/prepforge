# `hooks` — React state and side-effects, one concern each

Stores follow one shape: a module-level `shared` value plus a listener set, so
every screen sees the same copy without a provider (`useProgress`,
`useSettings`, `useNotes`, `useUserCards`). Fetch hooks cache at module level
and share the in-flight request.

## Change → file

| Change | File |
|---|---|
| Progress store: bookmarks, notes, SRS cards, recent, quiz history | `useProgress.ts` |
| Settings store | `useSettings.ts` |
| Applying settings to the document (theme, text, leading, density, motion) | `useApplyTheme.ts` |
| Notes store / your own cards store | `useNotes.ts` / `useUserCards.ts` |
| The question index (titles, topics, difficulty, flags) — cached, ETag-checked; `reloadQuestionIndex()` after an ingest | `useQuestionIndex.ts` |
| One whole question by id | `useQuestion.ts` |
| The Library's server-paged list: page one, next page, the sentinel | `useQuestionPages.ts` |
| A running study session: transitions, countdown, keys | `useStudySession.ts` |
| A timed Library session and its derived counts | `useLibrarySession.ts` |
| Which lenses are free right now (LM Studio probe) | `useProviders.ts` |
| Totals over generated answers on disk | `useAnswerStats.ts` |
| Single-key page shortcuts (ignores fields, buttons, open dialogs) | `useHotkeys.ts` |
| Escape to close something | `useEscapeKey.ts` |
| Scroll direction, for chrome that gets out of the way | `useScrollDirection.ts` |
| Read text aloud (Web Speech) | `useSpeech.ts` |
| Live theme colours as strings, for a chart library | `useThemeColors.ts` |
| Phone breakpoint | `use-mobile.tsx` |

## Traps

- `useHotkeys` binds nothing while any `[role=dialog]` is open. A dialog that failed
  to close makes every key look broken.
- A mapped hotkey is `preventDefault`-ed. Bind Space only while it means something,
  or the page stops scrolling.
- `useLibrarySession` diffs the progress store against the previous render: exactly
  one mounted caller, or counts double.
