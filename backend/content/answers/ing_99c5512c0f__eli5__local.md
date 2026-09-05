---
qid: ing_99c5512c0f__eli5__local
question: 'Explain: Two-Tiered Caching — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 480
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:41:38-05:00'
sources: []
---

Imagine a library that keeps books in two rooms. The first room (Tier 1) is the front desk—tiny, quick‑to‑access shelves where visitors can grab a book almost instantly. The second room (Tier 2) is the main reading area—larger but slower to reach. When a visitor asks for a book, the system first checks Tier 1; if it’s not there, it looks in Tier 2 and then brings it to Tier 1 so future requests are faster.

To decide which books stay and which leave, the library uses **eviction strategies**—rules that tell when a book should be moved out of a room. The eight most common rules are:

| Strategy | What it does |
|----------|--------------|
| **Least Recently Used (LRU)** | Keeps the books people have read most recently; the oldest‑used book gets removed first. |
| **Most Recently Used (MRU)** | Opposite of LRU—removes the newest book, useful when recent items are likely to be discarded. |
| **Least Frequently Used (LFU)** | Tracks how often each book is borrowed; the one borrowed least often leaves first. |
| **Random Replacement (RR)** | Picks a book at random to remove; simple and fair when usage patterns are unpredictable. |
| **First‑In, First‑Out (FIFO)** | Removes books in the order they arrived—oldest entry goes out first. |
| **Last‑In, First‑Out (LIFO)** | Keeps the newest books; the most recent entry is evicted first. |
| **Least Recently/Frequently Used Hybrid (LRFU)** | Combines recency and frequency, giving a balanced view of popularity. |
| **Custom Policy** | Lets administrators write rules tailored to their specific traffic patterns (e.g., always keep certain “hot” titles). |

Just like the library uses these rules to keep shelves tidy and patrons happy, two‑tier caching uses them to keep data fast for the most common requests while still holding a larger pool of less‑frequently used items. The goal is simple: keep what matters close at hand, and drop what’s no longer needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
