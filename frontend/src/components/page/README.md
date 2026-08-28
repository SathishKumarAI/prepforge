# `components/page` — the page contract

Every page is at most **three zones, in this order**. There is no zone 4: a page
that accepts one accepts all of them, because there is then no principle left to
point at when the next streak badge or tip banner is proposed.

| Zone | Holds | Rule |
|---|---|---|
| **Orient** | one bar of facts | ≤ 4, and each must change what you do in the next 30 seconds |
| **Act** | the thing the page exists to do | the page's *single* primary button |
| **Review** | what has been recorded | summary → signature visual → list |

## Change → file

| Change | File |
|---|---|
| Zone structure, page title, wide-tier split | `PageLayout.tsx` (`Page`) |
| A labelled region *inside* a zone | `PageLayout.tsx` (`Band`) |
| The orient bar, or a fact in it | `Orient.tsx` |
| Session progress + outcome strip | `Spine.tsx` |
| What an empty region renders | `EmptyFrame.tsx` |
| Colours, radii, type steps, the accent | `../../styles/index.css` + `tailwind.config.js` |
| Button tiers | `../ui/button.tsx` |
| Filter/toggle pills | `../ui/chip.tsx` |

## Rules these components exist to enforce

- **Cards are objects, not sections.** A raised `.panel` wraps a thing with its
  own actions and its own state. A region of a page gets a heading and a
  hairline — that is what `Band` is. Max two raised cards per page.
- **One accent.** `mauve` is spent on: the active nav item, the active mode
  segment, the primary button, and the spine's current segment. Status pills,
  links, icons, borders and counts are neutral. Topic keeps a 6px dot because
  that is data, not chrome.
- **One left gutter and one right gutter** for every element. Tabs aligned to an
  outer container while cards centre in a narrower column is most of why a page
  reads as unstructured, and it is invisible until you look for it.
- **Wide layouts split zones, they never stretch them**, and they split on a
  **container query** — the sidebar collapses, so viewport width is the wrong
  signal. One breakpoint, no intermediate layout.
- **No control exceeds ~380px** (`.field`). A stretched input is a stranded
  input: the eye travels the whole width to find the caret.
- **Motion conveys state only.** Hover colour at ~100ms, content change at
  ~200ms. No entrance animations, no index-staggered reveals.
- **Render `—`, not `0`, for absent values.** Zero is a measurement; an em dash
  is "nobody has told us yet", and printing zero for the second makes an
  untouched page look like a bad week.

## Traps

- `text-base` sets a **font size** as well as a colour — `base` exists in both
  the colour and `fontSize` scales. Use `text-crust` on accent fills.
- `.glass` is a deprecated alias for `.panel`, kept only so un-swept call sites
  still render. New code uses `.panel`.
- `Spine` degrades to a proportional bar above 48 cards; below that each card is
  its own segment. Both carry the same information — check the one you mean.
