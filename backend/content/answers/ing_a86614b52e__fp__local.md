---
qid: ing_a86614b52e__fp__local
question: 'Explain: Products — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 404
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:03:49-05:00'
sources: []
---

### Why a trillion‑index engine is needed

Uber’s routing, pricing and fraud systems must answer “what’s the nearest driver, fare estimate or risk score?” for every trip request in real time.  
Each request touches **millions of candidate records** (drivers, zones, promotions).  To keep latency below a few milliseconds, Uber stores *every* relevant field as an index that can be scanned in constant time.

### How LedgerStore achieves this

| Principle | Implementation |
|-----------|----------------|
| **Append‑only writes** | Every change is written to a single log file.  This eliminates random I/O and allows the system to batch updates, reducing write amplification. |
| **Sparse block compression** | A block contains only changed keys; unchanged blocks are simply pointers.  The effective size shrinks by >95 % when many records share the same value (e.g., “zone=NYC”). |
| **Multi‑level skip lists** | Each index is a compressed skip list stored on disk.  Lookups follow *logarithmic* paths, guaranteeing \(O(\log N)\) time regardless of data volume. |
| **Co‑location of hot keys** | Hotter prefixes are kept in memory; the rest live on SSD.  The cache hit rate stays >99 % for the top 1 % of traffic. |

### One non‑obvious insight

The *sparsity* of updates is the secret sauce: most records change only once per minute (driver location) or never (static promotions).  By exploiting this, LedgerStore stores **only diffs** and can rebuild entire indexes in minutes if a node fails—no full re‑indexing required. This guarantees both scalability to trillions of entries and resilience under massive write bursts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
