---
qid: ing_fb3655151f__eli5__local
question: 'Explain: Inverted Index — Invertedindex'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 202
total_tokens: 359
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:12:51-05:00'
sources: []
---

Think of a library where every book has its own shelf and the books are sorted alphabetically by title. An **inverted index** is like a giant, shared “book‑by‑word” card catalog that tells you exactly which shelves (books) contain any given word.

When someone asks for all books containing the word *“quantum”*, the system looks up *quantum* in the inverted index and instantly finds a list of shelf numbers. No need to scan every book; it jumps straight to the relevant ones.  

In practice, each unique word is a key in the index, and its value is a list (or “posting list”) of document IDs where that word appears. This structure makes searching fast, especially for large collections—just as a card catalog lets you find books without flipping through every volume.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
