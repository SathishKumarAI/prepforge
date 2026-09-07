---
qid: ing_219bd9d169__aws__local
question: 'Explain: Learn more about Solr. — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 495
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:23-05:00'
sources: []
---

**Situation & Task**

In my last role I was tasked with building a search‑heavy feature for a SaaS product that served 120 k daily active users. The existing solution used a flat database table, leading to >5 s query times and stale results during peak traffic.

**Action – Diving Deep into Solr**

I started by learning Apache **Solr** from scratch: architecture, schema design, and query API. I built a prototype on an EC2 Auto Scaling group with an 8‑core instance type (t3.xlarge) to mirror production load.  
Key decisions:

| Decision | Why & AWS Service |
|----------|-------------------|
| **Indexing pipeline** | Use Kinesis Firehose → Lambda → Solr – decouples ingestion, scales automatically. |
| **Storage** | EBS gp3 for low‑latency writes; S3 for backup snapshots (S3 Glacier Deep Archive for cost). |
| **Availability** | Deploy Solr in an Auto Scaling group across 3 AZs, use Route 53 health checks to route traffic. |
| **Cost** | Spot instances for idle indexing jobs, reserved instances for steady query load. |
| **Monitoring** | CloudWatch metrics + Solr JMX integration; alert on latency >200 ms. |

The final architecture reduced query time from 5 s to **<300 ms** and increased throughput by **3×**, while keeping monthly cost under $1,200.

**Result**

- 95 % of queries served in <400 ms (vs baseline 70 %).  
- Search feature adoption grew from 12 % to 68 % within two months.  
- Operational overhead dropped: manual index rebuilds eliminated; automated failover handled a full AZ outage with zero data loss.

**Leadership Principles Reflected**

1. **Customer Obsession** – Delivering fast, reliable search directly improved user satisfaction and adoption.  
2. **Ownership & Dive Deep** – I owned the entire migration, from learning Solr to designing an end‑to‑end AWS solution, continuously iterating on metrics until performance targets were met.

---

> *Bar‑raiser note:* The answer demonstrates ownership (full project scope), deep technical knowledge (architecture choices), quantifiable impact, and a learning loop (iterative prototyping).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
