---
qid: ing_120e2b19a7__faang__local
question: 'Explain: Limitations — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 520
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:25:42-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to discuss the *limitations* of Bloom filters in a system‑design context and how they influence design decisions.  
Assumptions: we’re building a large‑scale cache/lookup service (e.g., URL shortener, CDN edge), we need fast membership tests, and false positives are acceptable but false negatives are not.

**Approach**  
1. Enumerate key drawbacks (false positives, no deletions, fixed size).  
2. Explain impact on system design choices (size tuning, auxiliary data structures, refresh strategy).  
3. Suggest mitigations or alternatives when constraints tighten.

**Depth**  

| Limitation | Why it matters | Design implications |
|------------|----------------|---------------------|
| **False positives** | A query may incorrectly claim an item exists → wasted I/O or incorrect routing. | Need a second‑stage lookup (hash table, database) for items flagged by Bloom filter; cache hit rate drops if filter too permissive. |
| **No deletions** | Once bits are set they can’t be cleared without rebuilding the whole filter. | For eviction‑heavy workloads you must rebuild periodically or use *scalable* / *counting* Bloom filters (extra memory). |
| **Fixed size & hash count** | Mis‑tuned parameters lead to high FP rate or wasted space. | Must calculate optimal `m` and `k` given expected cardinality; resize requires data migration. |
| **Non‑adaptive** | The filter can’t shrink when the dataset shrinks. | Requires background jobs that rebuild smaller filters, adding operational overhead. |

**Edge cases**  
- Sudden spike in item count → FP rate explodes.  
- Deleting hot keys in a counting Bloom leads to “false negatives” if counters underflow.  
- Distributed systems: synchronizing filter state across nodes can cause stale reads.

**Optimize & communicate**  
To reduce false positives, use *cuckoo filters* (support deletions) or *sparse Bloom* for low‑density data. If strict accuracy is required, pair Bloom with a lightweight cache of recently evicted keys. Communicate trade‑offs: “We accept a 0.1 % FP to keep memory < 2 GB; we rebuild nightly to handle deletions.” This shows you weigh cost vs correctness and can articulate the operational plan—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
