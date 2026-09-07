---
qid: ing_b7fe4dec89__aws__local
question: 'Explain: B-Tree — B-Tree vs. LSM-Tree'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 383
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:11-05:00'
sources: []
---

**Situation (S)** – While revamping our recommendation engine for the global marketplace, I had to decide between a B‑Tree index in DynamoDB and an LSM‑Tree based solution (Amazon Timestream) for high write throughput.

**Task (T)** – Deliver 1 M writes/sec with <50 ms latency while keeping costs under $200k/month.

**Action (A)** –  
- **B‑Tree**: offers O(log n) lookups but incurs heavy disk seeks on hot partitions.  
- **LSM‑Tree**: batches writes into in‑memory memtables, flushes to sorted SSTables, and merges lazily—ideal for write‑heavy workloads.  
I modeled both using CloudWatch metrics, then prototyped a 10 % shard of the data.  

**Result (R)** – The LSM‑Tree prototype achieved **1.3 M writes/sec** with **<30 ms** read latency and reduced I/O by 40 %. Cost dropped to **$165k/month**, beating the target by 17 %. B‑Tree would have required doubling storage nodes, adding ~60 % cost.

---

### Leadership Principles Anchored
- **Customer Obsession** – chose the design that kept latency low for millions of shoppers.  
- **Ownership & Dive Deep** – ran end‑to‑end experiments and quantified trade‑offs with real metrics.

> *Bar‑raiser check:* I own the full experiment lifecycle, dive deep into storage internals, quantify impact (write throughput, cost), and iterate based on failure modes—e.g., tuning compaction to avoid read amplification.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
