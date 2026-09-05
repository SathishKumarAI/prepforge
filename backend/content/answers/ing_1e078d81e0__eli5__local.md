---
qid: ing_1e078d81e0__eli5__local
question: 'Explain: Stale facts — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 228
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:24:08-05:00'
sources: []
---

Imagine a robot librarian who keeps a notebook of book locations. **Stale facts** are like old entries that say a book is on the second shelf when it’s actually moved to the first; the information is outdated. The librarian’s **memory** is the notebook itself—everything she has ever written down, whether still true or not. **State** is what the librarian knows *right now* while she’s looking at a request: which shelves are open, how many books she can carry, and where each book actually sits at this moment.

When the librarian gets a new request, she checks her notebook (memory) but first verifies with the current library layout (state). If the notebook says “book X is on shelf 2” but the state shows it’s now on shelf 1, she updates the entry. Thus, stale facts are old memory entries that conflict with the present state, and keeping them fresh ensures accurate decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
