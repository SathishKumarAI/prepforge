---
qid: ing_614b30eb5c__eli5__local
question: 'Explain: Design a deduplication pipeline for a web-scale pretraining corpus.
  It has to run as a streaming process.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 282
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:10:36-05:00'
sources: []
---

Imagine you’re sorting an endless river of books that keeps flowing forever. Each book is a piece of text, and many are exact copies or very similar. Your job is to keep only one copy of each unique book while the river never stops.

**Step 1 – “Read‑and‑hash”**  
As soon as a book arrives, you quickly skim it and turn its content into a short digital fingerprint (a hash). Think of this like taking a quick snapshot of the book’s cover. The hash is tiny but unique to that exact book.

**Step 2 – “Check the shelf”**  
You look at a fast in‑memory table (the shelf) that holds fingerprints you’ve already seen. If the new fingerprint is already there, the book is a duplicate and you toss it. If not, you keep the book and add its fingerprint to the shelf.

**Step 3 – “Keep the shelf tidy”**  
Because the river never stops, the shelf would grow forever. Periodically, you purge old fingerprints that are no longer needed (e.g., after a certain time window) so memory stays bounded.

By streaming each book through this read‑hash‑check cycle, you maintain a deduplicated corpus in real time, even at web scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
