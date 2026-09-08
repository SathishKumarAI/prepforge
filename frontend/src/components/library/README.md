# `components/library` — the Library's four views and the Questions view's parts

Ten files. Read this table, not the code.

## Change → file

| Change | File |
|---|---|
| Which view a `?view=` maps to, the header counts, the session timer's place | `../../pages/Library.tsx` |
| Selection, the two-pane grid, when the list is away, j/k, Recall on/off | `QuestionsView.tsx` |
| Search box, topic/difficulty chips, Clear filters, the Recall and Hide-list buttons, the `/` key | `FilterBand.tsx` |
| Page size, debounce, appending the next page, the scroll sentinel | `../../hooks/useQuestionPages.ts` |
| The gutter handle and the hover overlay for a put-away list | `ListPeek.tsx` |
| The "Go deeper" reading-list disclosure | `DeepStudyLinks.tsx` |
| One line in the list | `QuestionRow.tsx` |
| Everything about one question: lens tabs, reveal, rating, read aloud, notes, related | `QuestionDetail.tsx` |
| The session clock pill and the end-of-session summary | `SessionTimer.tsx` (counts: `../../hooks/useLibrarySession.ts`) |
| Saved / Collections / Feed views | `SavedView.tsx` / `CollectionsView.tsx` / `FeedView.tsx` |

## Rules these files keep

- **One list.** The in-grid column and the peek overlay render the same `listPane`
  element; only one is ever mounted, so the scroll sentinel has one owner.
- **Hover intent is one number.** The row peek (`QuestionsView.PEEK_MS`) and the list
  peek (`ListPeek.PEEK_MS`) are both 250 ms; change both or neither.
- **`listAway` is derived, never stored.** `listHidden` is the preference; reading mode
  and a downward scroll can also put the list away, and "Keep open" pins it back.
- **The detail follows the URL, not the loaded rows.** A deep link to a question on
  page 15 opens that question; the list highlights it if and when its page arrives.
- **`FilterBand` owns no state.** Every value comes in, every change goes out.

## Traps

- A Radix dialog left open anywhere silently disables every `useHotkeys` binding and
  the j/k handler. Check `[role=dialog]` before believing a key does nothing.
- React's `onMouseEnter` listens to `mouseover`, not `mouseenter`: a synthetic
  `mouseenter` in a test does not open the peek.
