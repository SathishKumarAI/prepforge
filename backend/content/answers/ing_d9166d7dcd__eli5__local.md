---
qid: ing_d9166d7dcd__eli5__local
question: 'Explain: Your agent''s prompt cache hit rate is 20% when you expected 90%.
  Walk me through the debugging.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 415
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:18:35-05:00'
sources: []
---

Imagine your AI is a librarian who keeps popular books (prompt data) on the front shelf so patrons can grab them quickly. You expect that 90 % of visits will find the book right there (a *cache hit*). Instead only 20 % do—most people walk away because the book is missing and you have to fetch it from the back, which takes time.

**Debugging steps**

1. **Check the shelf size** – Is the front shelf too small? In cache terms, maybe the configured memory limit is lower than needed, so items are evicted too early.

2. **Inspect the book labels (keys)** – If patrons look for “Book A” but you stored it as “book‑a” or with an extra space, the librarian can’t match them. Verify that keys used when storing and retrieving are exactly identical.

3. **Look at how books are returned** – Does every time a book is read it get moved back to the front shelf (LRU policy)? If your code accidentally discards the reference after reading, the next patron will find nothing.

4. **Watch for accidental “book theft” (eviction)** – Maybe another part of the system clears the shelf too often. Check if any background job or low‑priority request is purging entries.

5. **Confirm the request patterns** – Are patrons asking for a wide variety of books, many of which you never cached? If so, your expectation of 90 % hits was unrealistic; you need to cache more frequently requested prompts.

By walking through these “shelf” checks—size, labeling, movement, eviction, and usage—you’ll spot why only 20 % of requests hit the cache and how to raise that rate toward the expected 90 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
