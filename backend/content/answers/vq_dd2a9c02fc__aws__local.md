---
qid: vq_dd2a9c02fc__aws__local
question: HOW DOES A CLUSTERED INDEX DIFFER FROM A NON-CLUSTERED INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 425
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:18:24-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership* – I take full responsibility for database performance; *Dive Deep* – I analyze the physical layout and query plan impact.

**Situation & Task**  
In my last role, our analytics platform served 10 M daily users. A spike in reporting latency (up to 15 s) was traced to inefficient index usage on a 500 GB fact table.

**Action**  
I compared **clustered** vs. **non‑clustered** indexes:  

| Feature | Clustered Index | Non‑Clustered Index |
|---------|-----------------|---------------------|
| Row order | Data pages sorted by key, eliminating extra lookups | Separate B‑Tree pointing to data pages |
| Storage | 1 x table size (plus leaf nodes) | Table + index pages (≈ 30 % overhead) |
| Retrieval | Range scans fast; point lookups need only one I/O | Point lookups need two I/Os (index + data page) |

I rewrote the fact table as an **Amazon Aurora** table with a clustered index on `(date, product_id)` and added non‑clustered covering indexes for the most common filters. The new schema reduced average query latency from 15 s to **0.8 s** (95th percentile), cutting EC2 CPU usage by 40 % and RDS storage costs by 20 %.

**Result**  
The platform now supports real‑time dashboards for 10 M users with 99.9 % availability, meeting SLAs while staying within the $5k/month budget.

**Bar‑raiser cues I met:** ownership of performance, deep dive into physical data layout, quantifiable latency & cost savings, and iterative learning—switching to a clustered index was validated by A/B testing before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
