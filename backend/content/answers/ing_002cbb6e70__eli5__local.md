---
qid: ing_002cbb6e70__eli5__local
question: 'Explain: Anti-patterns for partition keys — Partitionkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 285
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:35:30-05:00'
sources: []
---

Think of a library where every book is put on a shelf by its *partition key*—the label that decides which shelf it lands on.  
An anti‑pattern happens when you choose a key that makes the shelves unbalanced or hard to find.

**1. Too many books on one shelf (hot partition).**  
If every new book gets the same label, all of them pile up on one shelf. The librarian can’t handle the traffic—data queries stall and storage skews.

**2. One book per shelf (over‑partitioning).**  
Using a unique ID for each book creates millions of tiny shelves that are almost empty. The library’s catalog system slows down because it has to look up many shelves for a single query.

**3. Random labels that change over time.**  
If the key changes with every read, books move between shelves constantly. The system spends more time reorganizing than answering questions.

**4. Ignoring natural data groups.**  
Choosing a key that ignores how people actually browse (e.g., by author instead of genre) makes related books scattered across shelves, hurting search speed.

A good partition key is like a shelf label that balances the load: it spreads books evenly but keeps related items together so the librarian can find them quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
