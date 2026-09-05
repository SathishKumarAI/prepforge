---
qid: ing_e71daeb04c__eli5__local
question: 'Explain: Shard Config Table — Tech-Stacks-Live-Apps/Pinterest/Readme.md
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 209
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:41:15-05:00'
sources: []
---

Imagine a giant library where each book is split into chapters that live on different shelves to keep the library from getting overcrowded.  
In Pinterest’s “Shard Config Table,” each *shard* is one of those shelves—an independent database cluster that stores only part of all the data (like user photos or pins). The table keeps a master record of where every shard lives, what its current size is, and which machines host it.  

When someone adds a new pin, Pinterest consults this table to decide on which shelf (shard) the pin should go, balancing load and storage across all shelves. If a shelf becomes too full or a server goes down, the table records that change so traffic can be rerouted smoothly.  

*Shard*: A partition of data stored separately for scaling.  
*Config Table*: The ledger that tracks every shard’s location and status.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
