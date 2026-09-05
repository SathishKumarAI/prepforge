---
qid: ing_9a1bacc6aa__eli5__local
question: 'Explain: Size-based Eviction — CachesExplained \u00b7 google/guava Wiki
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 189
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:42:11-05:00'
sources: []
---

Think of a cache like a tiny, super‑fast pantry that holds only the most recent recipes you need for dinner.  
**Size‑based eviction** is the rule that says “the pantry can hold only so many dishes.” When it’s full and you try to add another recipe, the pantry automatically removes the oldest dish (or the one least used) to make room.  

In computer terms, a cache stores data objects up to a fixed total size—say 100 MB or 10,000 items. Each time a new object is added, the system checks if adding it would exceed that limit. If so, it evicts (deletes) the oldest or least‑frequent items until there’s space again. This keeps memory usage predictable while still giving quick access to recent data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
