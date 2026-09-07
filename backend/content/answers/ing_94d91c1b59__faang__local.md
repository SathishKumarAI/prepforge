---
qid: ing_94d91c1b59__faang__local
question: 'Explain: Table Chunking — Chunking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 497
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:30:17-05:00'
sources: []
---

**Clarify**  
We’re asked how a large‑scale database or search engine splits a huge table into “chunks” (table chunking) and what strategies govern that split. I’ll assume: *a relational or columnar store*, *horizontal partitioning* is the goal, and we need to keep read/write performance balanced while supporting analytics.

**Approach**  
1. Identify the key dimension(s) for partitioning (e.g., time, geography).  
2. Decide on chunk granularity (rows per chunk, size in GB).  
3. Choose a strategy: range‑based, hash‑based, or hybrid.  
4. Implement metadata to track chunk boundaries and maintain consistency.

**Depth**  
- **Range Chunking** – split on a monotonically increasing key (e.g., timestamp). Each chunk covers a contiguous interval; great for time‑series queries but can suffer hot‑spots if recent data is queried heavily.  
- **Hash Chunking** – distribute rows by hashing the partition key; evenly balances load and avoids hotspots, but range scans become expensive because data isn’t co‑located.  
- **Hybrid (e.g., Geo‑time)** – hash on geography then range within each hash bucket; offers locality for both dimensions.  
- **Dynamic Resizing** – monitor chunk size/latency; split oversized chunks or merge underutilized ones to keep I/O balanced.  
Complexity: lookup O(1) via metadata, splits are O(log n) with B‑trees.

**Edge Cases**  
- Skewed data (e.g., all records in a single month) → range becomes too large; fallback to hash or sub‑range.  
- Rapidly growing tables → need incremental chunk creation without downtime.  
- Schema changes affecting partition key → requires re‑chunking or multi‑index.

**Optimize & Communicate**  
To improve, use *adaptive chunk sizing* (predictive models on access patterns) and *metadata caching* to reduce lookup overhead. When explaining, start with the business need for scalability, walk through the trade‑offs of each strategy, show how we monitor and adjust, and finish by summarizing performance gains and potential pitfalls. This narrative demonstrates structured reasoning, depth, and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
