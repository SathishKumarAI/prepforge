# `components/library` — the Library's four views and the Questions view's parts

Ten files. Read this table, not the code.

## Change → file

| Change | File |
|---|---|
| Which view a `?view=` maps to, the header counts, the session timer's place | `../../pages/Library.tsx` |
| Selection, the two-pane grid, when the list is away, j/k, Recall on/off | `QuestionsView.tsx` |
| Search box, the Topic and Difficulty selects, Clear filters, the Recall and Hide-list buttons, the `/` key | `FilterBand.tsx` |
| Page size, debounce, appending the next page, the scroll sentinel | `../../hooks/useQuestionPages.ts` |
| The gutter handle and the hover overlay for a hidden list | `ListPeek.tsx` |
| The "Go deeper" reading-list disclosure | `DeepStudyLinks.tsx` |
| One line in the list | `QuestionRow.tsx` |
| Everything about one question: lens tabs, reveal, rating, read aloud, notes, related | `QuestionDetail.tsx` |
| Saved / Collections / Feed views | `SavedView.tsx` / `CollectionsView.tsx` / `FeedView.tsx` |

## Rules these files keep

- **One list.** The in-grid column and the peek overlay render the same `listPane`
  element; only one is ever mounted, so the scroll sentinel has one owner.
- **The list stays put.** Only the Hide list button hides it. Auto-hide on scroll and
  hide-on-deep-link were removed (COD-166): scrolling the list to find a question moved
  the page and took the list away.
- **Hover previews, click commits.** A row previews after 250 ms of a pointer that MOVED
  (`hooks/useHoverIntent`); the URL changes only on a click or j/k. `mouseenter` is
  never used for selection: Chrome re-dispatches the pointer's position after a scroll
  or a reflow, and that switched the open answer under a resting pointer.
- **The URL → state sync is keyed on the URL's id only.** Keyed on `selectedId` as well,
  it snapped every hover preview straight back to the URL's question.
- **Nothing slides away on scroll.** The filter band scrolls with the page; sticky
  things park at constant offsets (there is no app bar).
- **The detail follows the URL, not the loaded rows.** A deep link to a question on
  page 15 opens that question; the list highlights it if and when its page arrives.
- **`FilterBand` owns no state.** Every value comes in, every change goes out.

## Traps

- A Radix dialog left open anywhere silently disables every `useHotkeys` binding and
  the j/k handler. Check `[role=dialog]` before believing a key does nothing.
- React's `onMouseEnter` listens to `mouseover`, not `mouseenter`: a synthetic
  `mouseenter` in a test does not open the peek.
