---
qid: ing_dd10d5ab8f__eli5__local
question: 'Explain: DiskANN (SSD-based) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 237
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:24:07-05:00'
sources: []
---

Think of a huge library where every book is turned into a tiny “fingerprint” – a short list of numbers that captures its essence.  
**DiskANN** is the librarian who keeps all those fingerprints on fast, cheap SSD disks and can instantly find the books most similar to any new one you hand him.  

When you ask for “find me 10 books like this,” DiskANN first jumps straight to the part of the disk that holds the nearest fingerprints (thanks to a clever indexing map). It then checks only those few candidates, comparing their fingerprints bit‑by‑bit, and returns the best matches.  

*Vector database:* a collection where each item is stored as a vector (a list of numbers) so that “similarity” can be measured mathematically.  
SSD: a solid‑state drive – fast, low‑latency storage.  
DiskANN uses SSD speed to keep the whole search space in memory while still letting you scale to millions of vectors without costly RAM.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
