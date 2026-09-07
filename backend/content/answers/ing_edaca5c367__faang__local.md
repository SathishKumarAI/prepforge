---
qid: ing_edaca5c367__faang__local
question: 'Explain: Sliding Window — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 509
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:53:00-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to design a *sliding‑window* system that continuously aggregates metrics (e.g., click‑through rate) over the last T minutes for millions of users. Key assumptions:  
1. Data streams in real time, one event per user per second.  
2. We need sub‑second latency on queries and O(1) update cost.  
3. Window size T is configurable (e.g., 5 min).  

**Approach**  
1. **Time bucketing** – split the stream into fixed buckets of Δt seconds (Δt ≪ T, e.g., 10 s).  
2. **Per‑user ring buffer** – maintain a circular array of size `N = ceil(T/Δt)` for each user. Each slot holds aggregated stats for that bucket.  
3. On ingest: update the current bucket; on query: sum over the last N slots.  
4. Persist only the latest N slots to disk (e.g., via Redis or RocksDB) and evict older ones.  

**Depth**  
- **Memory**: O(U·N) where U is active users; Δt chosen so that N stays small (~30 for 5 min windows).  
- **Latency**: O(1) per event (just increment a counter); query latency O(N) which is constant.  
- **Consistency**: Use atomic increments or lightweight transactions to avoid race conditions.  
- **Fault tolerance**: Periodic snapshotting of buffers and replication across nodes.

**Edge Cases**  
- Users with bursty traffic → bucket overflow; mitigate by using larger Δt during spikes.  
- Clock skew → use monotonic timestamps from the producer.  
- Deletion of stale users → GC after inactivity > T + grace period.

**Optimize & Communicate**  
Explain that choosing Δt balances memory vs. precision; a 1‑second bucket gives fine granularity but higher memory usage, while 30‑second buckets reduce footprint at the cost of coarser aggregates. Highlight trade‑offs and how we would monitor key metrics (latency, memory) to adjust parameters in production. This structured answer demonstrates clear problem framing, design rationale, complexity analysis, edge‑case awareness, and optimization thinking—all hallmarks of a FAANG interview response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
