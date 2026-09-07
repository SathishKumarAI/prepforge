---
qid: ing_4bbbeac52d__faang__local
question: 'Explain: Index lifecycle management — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 482
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:40:25-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks how *LedgerStore* (Uber’s distributed index‑store) can manage trillions of indexes while keeping latency low and storage efficient. Key assumptions:  
• Indexes are immutable append‑only streams of key–value pairs.  
• Queries are range scans over a subset of keys.  
• The system must survive node failures and support hot‑reloading.

**2️⃣ Approach**  
1. Partition indexes by hash‑bucket → sharding across nodes.  
2. Store each bucket in a log‑structured merge (LSM) tree for sequential writes.  
3. Use *tiered compaction* to coalesce small segments into larger ones, keeping read amplification minimal.  
4. Apply *compaction hints* from query patterns to keep hot data in the top tier.  
5. Employ *Bloom filters* per segment to skip irrelevant files quickly.

**3️⃣ Depth**  
- **Write path**: Append → memory buffer → flush to disk as a new LSM level; O(1) amortized time.  
- **Read path**: Query hits Bloom filter → merge‑scan top‑tier segments (usually < 10). Complexity ≈ O(log N + k), where *k* is result size.  
- **Storage**: Tiered compaction reduces duplication by 3–5×; indexes are compressed with delta‑encoding, saving ~70 % space.  
- **Fault tolerance**: Each segment has a quorum of replicas (e.g., 3) and a leader election per shard.

**4️⃣ Edge Cases**  
- Hot key skew → triggers *hot‑segment* promotion to avoid read bottlenecks.  
- Sudden write bursts → buffer backpressure; fallback to secondary disk tier.  
- Node failure during compaction → atomic “move‑to‑temp” ensures consistency.

**5️⃣ Optimize & Communicate**  
Future improvements: adaptive Bloom filter sizing, machine‑learning guided compaction policies, and a unified metrics dashboard. I’d explain the trade‑offs (write amplification vs read latency) and how each design choice maps to Uber’s SLA of sub‑50 ms for index queries while scaling to trillions of entries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
