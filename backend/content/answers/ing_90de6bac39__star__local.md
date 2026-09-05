---
qid: ing_90de6bac39__star__local
question: 'Explain: Scalable Bloom Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 391
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:32-05:00'
sources: []
---

**Situation:**  
In a cloud‑storage startup we were handling over 10 million user uploads per day. The deduplication service had to check if a file hash already existed in our catalog. A single static Bloom filter was too small—its false‑positive rate ballooned past 5% once the dataset grew, causing unnecessary duplicate storage and extra latency.

**Task:**  
Design an on‑demand filtering layer that could keep the false‑positive probability under 1% while scaling with data volume, without incurring prohibitive memory or CPU costs.

**Action:**  
I implemented a Scalable Bloom Filter (SBF) as described by Almeida et al. I started with a base filter sized for 10⁶ items at 0.5% error and set the expansion factor to 1.5. Whenever an insertion exceeded the current capacity, I instantiated a new, larger sub‑filter and linked it in a chain. For lookups I queried all active sub‑filters in parallel using async I/O; the first “positive” result short‑circuits the rest. To keep memory usage low, each sub‑filter was stored on SSD with mmap and we evicted the oldest filter once its load factor dropped below 0.3. I also added a small LRU cache of recent queries to reduce Bloom traffic.

**Result:**  
After deployment, the overall false‑positive rate dropped to 0.8% even as the catalog grew to 120 million items. Query latency stayed under 5 ms average, and memory usage increased by only ~15 MB per million new items. I learned that a carefully tuned SBF can provide near‑real‑time scalability while keeping resource budgets predictable, which was crucial for our growth plans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
