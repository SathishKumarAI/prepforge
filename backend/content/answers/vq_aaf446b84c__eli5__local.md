---
qid: vq_aaf446b84c__eli5__local
question: WHAT IS AN INDEX SCAN VERSUS AN INDEX SEEK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 187
total_tokens: 348
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:45-05:00'
sources: []
---

Think of a database as a huge library where each book has an “index card” that tells you exactly which shelf the book is on.  

**Index seek** is like pulling out the index card and reading just one line: it tells you *exactly* the shelf number for the book you want, so you go straight there and open the book immediately. It’s a quick jump.

**Index scan** is like opening the entire index file and flipping through every page until you find the right shelf number. You’re still using the index, but instead of stopping at one line, you read many lines in order. This takes more time because you look at all those extra cards.

So, a seek is a single‑step lookup; a scan walks through many steps even though it uses the same index structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
