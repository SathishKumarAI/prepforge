---
qid: ing_98d7679583__faang__local
question: 'Explain: Approach 3: Distributed unique ID generator'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 510
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:40:00-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a *distributed unique‑ID generator* (e.g., Snowflake). Confirm the constraints:  
- IDs must be globally unique across many nodes.  
- They should preserve order or at least allow timestamp ordering.  
- Latency < 1 ms, throughput ~10k‑100k IDs/s per node.  
- No single point of failure; minimal coordination.

**Approach**  
Design a *time‑based* scheme:  
1. **Timestamp (42 bits)** – milliseconds since epoch.  
2. **Worker ID (10 bits)** – unique per machine/region.  
3. **Sequence (12 bits)** – counter within the same millisecond.  

Each node keeps its own `worker_id`. When generating an ID, it reads the current timestamp. If equal to the last timestamp, increment `sequence`; if `sequence` overflows, wait for next ms. The final 64‑bit number is:  
```
(id << 22) | (worker_id << 12) | sequence
```

**Depth**  
- **Uniqueness**: combination of monotonic time, node ID, and intra‑ms counter guarantees uniqueness without cross‑node coordination.  
- **Ordering**: IDs are roughly sorted by creation time due to timestamp dominance.  
- **Fault tolerance**: each node operates independently; only the `worker_id` registry (e.g., Zookeeper) is needed for assignment.  
- **Complexity**: O(1) generation; memory negligible.  
- **Scalability**: supports > 2^10 nodes and > 2^12 IDs per ms (~4 k IDs/ms ≈ 4 M/s).  

**Edge Cases**  
- Clock rollback: if the system clock moves backward, either reject ID requests or use a monotonic fallback counter.  
- Worker ID collision: ensure unique assignment via a central coordinator.  
- Sequence overflow: block until next millisecond; may throttle throughput.

**Optimize & Communicate**  
Explain trade‑offs: larger timestamp field → longer lifespan but fewer workers/sequence bits. Offer alternatives (UUIDv4 for no ordering, ULID). Conclude by highlighting how this design balances speed, uniqueness, and fault tolerance—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
