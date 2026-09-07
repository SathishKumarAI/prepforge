---
qid: ing_51f17a7746__faang__local
question: 'Explain: Types of Indexes — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 553
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:55:00-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how *LedgerStore* (Uber’s high‑throughput storage layer) can maintain **trillions of indexes**.  
Assumptions:  
- Indexes are used for fast query routing and data locality.  
- The system is distributed, writes heavy, and must keep latency low.

**Approach**  
1. Highlight the core data model (wide‑column / key‑value).  
2. Show how index metadata is stored per partition rather than globally.  
3. Explain compression, deduplication, and lazy eviction strategies.  
4. Mention hardware choices that support massive fan‑in.

**Depth**  

| Feature | How it works in LedgerStore |
|---------|----------------------------|
| **Per‑partition Bloom filters + prefix trees** | Each partition keeps a lightweight Bloom filter for key existence; a compressed trie stores only the prefixes needed for routing, reducing per‑index space to ~30 bytes. |
| **Shared index blocks** | Identical or similar keys share the same block header (e.g., user ID → shard). The block contains a list of all column families that reference it, so one physical entry satisfies many logical indexes. |
| **Delta encoding & run‑length compression** | Consecutive key ranges are stored as start/end pairs; gaps are encoded in a bitmask, yielding < 5× size reduction for dense ranges. |
| **Tiered storage** | Hot indexes live in SSD‑backed memory pools; cold ones spill to high‑capacity NVMe or HDD tiers, keeping hot path latency ≤ 2 ms while still exposing all trillions of keys. |
| **Hardware acceleration** | ASIC‑based hashing + SIMD vectorized Bloom checks cut CPU cycles per lookup from 200→10. |

**Edge Cases**  
- *Sparse keys*: run‑length fails; fallback to bitmap indexing.  
- *Hot spots*: dynamic re‑partitioning prevents a single node from exhausting memory.  
- *Schema evolution*: new columns trigger lazy index rebuilds without pausing writes.

**Optimize & Communicate**  
To improve, we could add a *secondary probabilistic cache* (e.g., HyperLogLog) for ultra‑rare keys to avoid disk lookups entirely. I’d explain this trade‑off: higher memory use vs. zero latency for the tail. In interviews, I’d finish by summarizing that LedgerStore’s combination of per‑partition compressed structures, shared blocks, tiered storage, and hardware acceleration lets it expose trillions of indexes while keeping query latency within Uber’s SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
