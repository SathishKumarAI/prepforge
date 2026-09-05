---
qid: ing_a3553014ff__star__local
question: 'Explain: Amazon Heaps and Priority Queues — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 352
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:59:36-05:00'
sources: []
---

**Situation**  
During my senior internship at a fintech startup, we had to deliver real‑time fraud alerts for thousands of transactions per second. The alert engine was built in Go, but the initial design used a naïve list that caused O(n) lookups and made our latency spike from 20 ms to over 200 ms under load.

**Task**  
I needed to redesign the priority handling so that we could always fetch the highest‑risk transaction in sub‑millisecond time while still supporting dynamic updates (inserts, deletes, and key changes) without locking the whole structure.

**Action**  
I implemented a binary heap backed by a map for O(1) node lookup. Each transaction record held its risk score as the priority key. To keep inserts and deletions efficient, I used Go’s container/heap interface and added an auxiliary index map to avoid expensive search operations. When scores changed (e.g., new user behavior data arrived), I performed a “decrease‑key” by swapping nodes up the tree until heap order was restored—this kept complexity at O(log n). I also introduced a small thread pool that pre‑emptively recalculated scores during idle periods, preventing queue buildup.

**Result**  
The latency dropped from 200 ms to under 30 ms on peak traffic (≈10k tx/s), and the system could now safely scale to 50k tx/s with minimal CPU overhead. I learned that a well‑balanced heap+map combination is essential for high‑throughput priority queues in production, especially when updates are frequent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
