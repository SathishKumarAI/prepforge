---
qid: vq_a27d5a80d6__aws__local
question: WHAT ARE SOME DOWNSIDES OF USING INDEXES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 407
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:06:54-05:00'
sources: []
---

**Leadership Principles:**  
- **Ownership** – I own the trade‑offs of our data model.  
- **Dive Deep** – I quantify how indexes affect query plans and cluster health.

**Situation / Task**  
While refactoring a high‑traffic analytics service, we added a new composite index on `(user_id, event_ts)` to speed up daily aggregations.

**Action**  
I ran `EXPLAIN ANALYZE` before and after the change, measured write latency, disk I/O, and cache hit ratios. The index increased read throughput by **30 %** but caused:

| Metric | Before | After |
|--------|--------|-------|
| Write latency (ms) | 12 | 27 |
| Disk‑write ops / sec | 2,400 | 3,600 |
| Cache miss rate | 18 % | 32 % |

I also simulated a 10× traffic spike; the index turned a **1 s** aggregation into **4.5 s**, exceeding SLA.

**Result**  
I removed the index, re‑optimized queries with predicate pushdown, and restored write latency to 13 ms while keeping read performance within 12 % of the original. The service now meets SLAs under peak load, and we saved ~15 % in I/O costs per month.

**Takeaway (Bar‑raiser)**  
- **Ownership:** I evaluated the impact myself before pushing changes.  
- **Dive Deep:** I used real query plans and metrics, not intuition.  
- **Quantified Impact:** 30 % read gain vs. 125 % write cost increase led to a net negative.  
- **Learning from Failure:** Recognized that indexes help reads but can cripple writes; future changes will include staged rollouts and automated monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
