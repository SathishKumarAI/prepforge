---
qid: vq_75e992f799__aws__local
question: Difference between broadcast and accumulators?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 408
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:58:23-05:00'
sources: []
---

**Situation / Task**  
I was leading a data‑engineering sprint to scale our nightly fraud‑detection pipeline from 10 M rows/day to 1 B rows/day on EMR. We needed to share a lookup table (customer risk scores) and aggregate real‑time metrics without breaking the cluster’s memory budget.

**Action – Technical Design**  
- **Broadcast variable:** I used `sc.broadcast(riskTable)` so every executor loaded the read‑only map once, keeping the 200 MB dataset in off‑heap memory. This reduced shuffle traffic by ~60 % and cut job runtime from 35 min to 18 min.  
- **Accumulator:** For per‑partition error counts I defined `sc.longAccumulator("parseErrors")`. Each task incremented it, and after the job we logged the total errors—this was critical for monitoring data quality in production.

**Result**  
The combined use of broadcast + accumulator cut our nightly processing time by 48 % (from 35 min to 18 min) while keeping spot‑instance costs down. We also reduced S3 read volume by ~30 %, saving $200/month on I/O charges.

**Leadership Principles**  
- **Customer Obsession:** Delivered a faster, more reliable pipeline for the fraud team, improving their detection latency by 40 %.  
- **Ownership & Dive Deep:** Took full ownership of resource tuning and dug into Spark internals to balance memory vs. speed trade‑offs.  

**Bar‑raiser takeaways**  
- Demonstrated ownership by owning end‑to‑end performance.  
- Showed deep technical dive: chose broadcast over a join, quantified impact, and learned that keeping accumulators lightweight avoids serialization overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
