# Library: master–detail — 2026-08-28

COD-29 · branch `feat/library-master-detail`

## The request

> "instead of the two columns i want to have change the layout to something like the left side some
> questions and answer and then right side we have 7 answers style for this view"
> "and dont keep any empty space on the screen use all the width"

## Why the deck had to go

The two-column deck of expanding cards had three defects that no amount of tuning fixes:

| Defect | Where it came from |
|---|---|
| Reading an answer reflows the deck | a card grows in place, pushing its column down |
| Losing your place after reading | the list you were scanning has moved under you |
| The seven lenses are buried | a button inside a card, below the fold of that card |

A list that drives a detail pane fixes all three at once: the list never moves, and the pane that
changes is the one you are looking at.

## Scope

**In.** `library?view=questions` only. A left list of questions, a right detail pane with one tab
row: `Answer` (from the bank, free) plus the eight `DeepAnswer` lenses (generated on demand, as
today). Selection by hover, click, and arrow keys. Selection in the URL. Full-width panes.

**Out.** `Saved`, `Collections`, `Feed` — they keep `QuestionCard`, which keeps working. Study,
Today, Notes, Progress. The generation API and its caching. The `?q=` search seeding shipped in #8.

**Non-negotiables.**
- No horizontal overflow at any width, phone included. The last layout pass fixed four scroll
  defects; this one must not reintroduce them.
- The list keeps its windowed rendering (48 + IntersectionObserver). The bank is 8,330 questions.
- Below `lg` there is no room for two panes: the detail replaces the list, with a way back.
- A lens tab must not fire generation until it is selected. One click, one API call, unchanged.

## Phases and their expected results

| # | Phase | Expected, written before running |
|---|---|---|
| 1 | `DeepAnswer` takes a controlled mode, exports its tab list | no visual change in `Saved`; `QuestionCard` still renders the button-then-tabs form |
| 2 | `QuestionRow` — compact list row | ~44px tall, question + topic + difficulty, truncates rather than wraps |
| 3 | `QuestionDetail` — header, unified tab row, answer, related, actions | `Answer` tab renders instantly, no network; lens tabs load on selection |
| 4 | `QuestionsView` — the two panes, selection, keyboard, hover | list scrolls independently of the page; detail does not move when the list scrolls |
| 5 | Measure | detail pane text fills its column: leftover ≤ the pane's own padding |

## Traps found on the way

- `Library.tsx` writes `setParams({ view })`, which **drops every other param**. Adding `?id=` means
  the view switch would silently discard the selection. Merge, do not replace.
- `.prose-answer` is capped at 68ch. In a detail pane that cap is the gutter the request is about,
  so it comes off here — deliberately trading line length for the explicit "use all the width".
- `StickyChrome` parks against `--app-bar-h` and slides away on scroll. The list pane's sticky offset
  has to agree with it or the two overlap.
