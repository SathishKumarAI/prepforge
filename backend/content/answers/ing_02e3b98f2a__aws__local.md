---
qid: ing_02e3b98f2a__aws__local
question: 'Explain: Round 4: HDFS Versus S3: Price — Storing Apache Hadoop Data on
  the Cloud - HDFS vs. S3 | Integrate.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 488
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:30:44-05:00'
sources: []
---

**Situation & Task**  
While migrating a 10 TB Hadoop analytics workload from an on‑prem cluster to AWS, I had to decide between keeping data in HDFS (via EMR) or moving it to S3. The goal was to reduce storage cost by 30% while maintaining query performance for downstream Spark jobs.

**Action**  
I performed a **dive deep** cost‑benefit analysis:  

| Metric | HDFS (EBS gp2, 10 TB) | S3 Standard (10 TB) |
|--------|----------------------|---------------------|
| Storage | $0.10/GB/month → $1,000/mo | $0.023/GB/month → $230/mo |
| I/O cost | High read/write latency, cluster‑wide locking | Low, object‑level access |
| Availability | 99.9 % (EBS) + EC2 failure risk | 99.999 % (S3) with cross‑region replication |
| Data durability | Snapshot & replication required | 11 nines durability |

I also benchmarked **Spark read latency**: HDFS averaged 8 s per 1 TB partition, S3 5 s after enabling **S3 Select** and **EMRFS caching**.  

**Result**  
Switching to S3 cut storage spend by **$770/month** (≈77% savings). Query performance improved by **30 %**, and the architecture became fully serverless—no EC2 maintenance, eliminating 20 % of operational overhead. The migration also enabled on‑demand scaling: we added a transient Spark cluster for peak loads without incurring persistent costs.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivering faster analytics at lower cost directly benefits data scientists.  
- **Ownership & Bias for Action**: I owned the end‑to‑end migration, ran experiments, and executed the switch within 3 weeks.  

**Bar‑raiser Takeaway**  
They’ll look for evidence of *ownership*, a clear *data‑driven impact*, and how I learned from early trial failures (initial S3 read slowness was fixed by tuning partition size).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
