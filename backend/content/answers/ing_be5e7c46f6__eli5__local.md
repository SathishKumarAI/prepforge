---
qid: ing_be5e7c46f6__eli5__local
question: 'Explain: How the tool works — Blockdiff: How we built our own file format
  for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 225
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:38:56-05:00'
sources: []
---

Imagine a big, heavy book that you can’t read all at once. Instead of copying the whole book every time you make a new copy, you only note the pages that have changed since the last edition. **Blockdiff** does exactly this for virtual‑machine (VM) disk snapshots: it creates its own “book format” where each page is a *block* of disk data.

When a snapshot is taken, Blockdiff records:
1. **The size and position of every block** – like marking the page number.
2. **A checksum** – a quick fingerprint that tells whether the block has changed.
3. **Only the changed blocks’ contents** – just the new pages, not the whole book.

Later, to rebuild the full disk, Blockdiff stitches together the unchanged old blocks with the new ones it stored. This keeps snapshots small and fast, much like writing a summary of only what’s different instead of copying everything again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
