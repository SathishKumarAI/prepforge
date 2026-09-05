---
qid: ing_9ba59a7ff8__eli5__local
question: 'Explain: Caching Requirements — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 266
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:44:16-05:00'
sources: []
---

Imagine Instagram is a huge, bustling café where every customer (user) orders coffee (posts). The kitchen (database) can only prepare a few coffees at a time, so the barista keeps a small tray of the most popular drinks ready to hand out instantly. That tray is the **cache**.

In design terms:

* **Cache** = fast, temporary storage that holds frequently requested data.
* **Cache miss** = when the needed data isn’t in the cache and must be fetched from the slower database.
* **Eviction policy** (e.g., LRU – least recently used) decides which items to drop when the tray fills up.

For Instagram:

1. **User feeds** are hot—many users scroll through the same popular posts, so store recent feed slices in cache.
2. **Profile pictures and thumbnails** change rarely; keep them cached for quick display.
3. When a user edits a post or uploads a new one, invalidate (remove) that item from the cache so everyone sees the fresh version next time.

By keeping the most‑visited items in this “tray,” Instagram serves millions of requests quickly while still reflecting updates promptly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
