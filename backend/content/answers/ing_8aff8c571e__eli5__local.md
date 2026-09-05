---
qid: ing_8aff8c571e__eli5__local
question: An agentic research query returns a memo citing a case that was overruled.
  Where does that get caught?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 310
total_tokens: 480
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:16:42-05:00'
sources: []
---

Think of a legal research database like a giant library. Each case is a book on a shelf, and every time a court decides a new ruling, the librarian updates the shelves.

When an AI‑driven agent writes a memo that cites a book whose “author” (the court) has since written a newer edition that says the old advice was wrong, the system notices. The “overruled” flag is like a red sticker on the book’s spine: it tells the librarian and anyone reading the memo that the information is no longer trustworthy.

So, the memo gets caught in two places:

1. **The database layer** – the case’s status changes from *binding* to *overruled*, and the AI sees this change before it can use the old version.
2. **The output review layer** – when the memo is generated, the system tags or removes any references that point to a red‑stickered book.

In short, the “overruled” case gets flagged by the knowledge‑base update mechanism and then excluded or warned about in the final memo, just like a librarian would pull out an outdated book before someone borrows it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
