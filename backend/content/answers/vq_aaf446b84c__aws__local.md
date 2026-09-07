---
qid: vq_aaf446b84c__aws__local
question: WHAT IS AN INDEX SCAN VERSUS AN INDEX SEEK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 482
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:08:27-05:00'
sources: []
---

**Situation (Customer Obsession & Ownership)**  
When I was architecting a high‑throughput analytics pipeline for a retail client, the data warehouse team ran into latency spikes while querying large fact tables. The engineers blamed “index scans” and asked what exactly that meant compared to an “index seek.”  

**Task (Dive Deep & Deliver Results)**  
I needed to clarify the concepts, show their impact on query performance, and propose a fix that kept costs low.

**Action (Bias for Action & Invent & Simplify)**  
*Clarified*:  
- **Index Seek** – the engine jumps directly to matching rows via the B‑Tree index.  
- **Index Scan** – the engine reads every leaf node of the index, then filters on‐disk, used when predicates are too broad or statistics mislead the optimizer.

I ran a benchmark: a 1 TB sales table with a composite index on `(StoreID, Date)`. A seek on `WHERE StoreID=5 AND Date='2024‑01‑01'` returned in **12 ms** (≈2 % of rows). The same query forced an index scan and took **890 ms**.  

I added a covering index (`SalesIdxCover`) to include all selected columns, re‑estimated statistics, and updated the optimizer hints. Post‑fix, the average latency dropped from 890 ms to **14 ms**, saving ~3 hrs of compute per day on an on‑demand Redshift cluster (≈$0.50/day).  

**Result (Ownership & Deliver Results)**  
The client saw a 90 % reduction in query time and a $180/month cost savings, while our monitoring dashboards reflected stable performance under peak load.

---

### What a bar‑raiser hears

- **Ownership**: I took full responsibility for diagnosing and fixing the issue.  
- **Dive Deep**: Detailed explanation of seek vs. scan with concrete numbers.  
- **Quantified Impact**: 90 % latency reduction, $180/month saved.  
- **Learning from Failure**: Recognized optimizer mis‑estimation and addressed it proactively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
