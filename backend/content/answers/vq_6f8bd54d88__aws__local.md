---
qid: vq_6f8bd54d88__aws__local
question: What is the significance of using -compress-codec parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 447
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:56:55-05:00'
sources: []
---

**Situation & Task**  
At a retail analytics startup we ran nightly Hive jobs on an EMR cluster that processed ~5 TB of raw click‑stream logs daily. The job’s runtime was 4 hrs and the S3 write footprint was 2 TB, inflating storage costs by ~$1k/month.

**Action**  
I introduced the `-compress-codec` option in Hive/Hadoop to switch from default “none” to **Snappy** for intermediate and final tables. I first benchmarked Snappy vs. Gzip on a sample dataset:  
- *Read/write time*: 30 % faster (2 hrs → 1.4 hrs).  
- *Disk usage*: 70 % reduction (2 TB → 0.6 TB).  
I updated the EMR bootstrap script to enable Snappy for all Hive tables, added a CloudWatch alarm on S3 storage metrics, and documented the change in our Data‑Ops playbook.

**Result**  
- **Runtime** dropped from 4 hrs to 2.8 hrs (30 % faster).  
- **S3 cost** fell by ~$750/month (~40 %).  
- The cluster could now process an additional 1 TB of data nightly without scaling the number of EC2 instances, saving $200/cluster‑day in compute costs.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Faster insights for product teams.  
- *Ownership & Dive Deep*: I owned the performance issue, measured impact, and iterated until metrics improved.

**Bar‑raiser Takeaway**  
They’ll look for: ownership of the problem, deep dive into compression trade‑offs (CPU vs. I/O), quantified savings, and a clear learning loop that can be replicated across other data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
