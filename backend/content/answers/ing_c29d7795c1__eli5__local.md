---
qid: ing_c29d7795c1__eli5__local
question: 'Explain: The Contiguous Memory Problem — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 224
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:44:32-05:00'
sources: []
---

Imagine you’re reading a long book that’s been split into many small, separate folders (pages). Each folder contains a few consecutive chapters, but the whole story isn’t kept in one continuous scroll; instead it jumps from one folder to another. When your brain tries to focus on a particular sentence, it has to open the right folder first and then scan only that part. This is like **paged attention**: the computer keeps large chunks of data (pages) in memory but can look at only a small portion at a time.

The **contiguous memory problem** arises because the brain’s “attention” must stay within one folder; it can’t seamlessly read across two folders without first switching context. Likewise, when an AI model processes text that spills over page boundaries, it loses continuity—like trying to follow a sentence split between two separate folders. This makes long‑range understanding harder, just as you’d struggle to keep track of a story that keeps jumping between bookshelves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
