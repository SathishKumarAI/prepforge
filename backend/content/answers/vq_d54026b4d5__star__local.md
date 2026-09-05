---
qid: vq_d54026b4d5__star__local
question: Who do various access methods compare ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 348
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:36-05:00'
sources: []
---

**Situation** – In my senior capstone we were tasked to build a real‑time leaderboard for an online gaming platform that had to support millions of concurrent users and update scores every second. Our initial prototype used a plain array indexed by user ID, but read latency was 120 ms on average, far above the 30 ms SLA.

**Task** – I needed to redesign the data structure so that lookups, inserts, and score updates all stayed under 20 ms while keeping memory usage below 8 GB.

**Action** – I evaluated three access methods: a contiguous array, a doubly linked list with a hash map for O(1) position lookup, and a radix‑sorted B‑tree. The array was fast for indexed reads but poor for inserts. The linked list plus hash offered O(1) updates but suffered cache misses. The B‑tree provided balanced O(log n) access with good locality. I implemented a lock‑free skip list backed by a concurrent hash map to combine the strengths: O(log n) traversal, O(1) key lookup, and minimal locking. I also added lazy rebalancing to keep depth low.

**Result** – After deployment we achieved an average read latency of 12 ms and write throughput of 2 million updates per minute, a 60 % reduction in latency and a 40 % increase in scalability. I learned that choosing the right access method requires balancing theoretical complexity with real‑world memory layout and concurrency patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
