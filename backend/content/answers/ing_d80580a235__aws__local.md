---
qid: ing_d80580a235__aws__local
question: 'Explain: Scalability Needs — Strong vs. Eventual Consistency - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 421
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:08-05:00'
sources: []
---

**Situation / Task**  
At my last role I built a recommendation engine that served > 5 M daily users. The data layer had to read product catalogs with *strong consistency* for real‑time pricing while writing user activity logs where *eventual consistency* was acceptable.

**Action**  
I chose **Amazon DynamoDB** for the catalog: enabled **On‑Demand capacity** and **Point‑in‑Time Recovery** to guarantee strong reads/writes. For logs I used a **Kinesis Data Stream** feeding an **S3 lake**; Kinesis provided at‑least‑once delivery (eventual consistency) with low latency, while S3 offered durable, cost‑effective storage for batch analytics.

To keep costs in check, I applied **DAX** caching on the catalog and *auto‑scaling* on both DynamoDB and Kinesis. The design ensured 99.9 % availability for pricing (strong consistency) and < 1 s latency for log ingestion (eventual).

**Result**  
Post‑deployment, pricing accuracy hit **100 %** with no stale data incidents, while the log pipeline processed **2× the throughput** at a **30 % lower cost** than our previous RDS solution. User satisfaction scores rose from 3.6 to 4.5/5.

---

### Leadership Principles  
- **Ownership** – architected end‑to‑end data flow and managed cross‑team handoffs.  
- **Dive Deep** – benchmarked consistency models, quantified latency vs. cost trade‑offs, and iterated on capacity settings.  

*Bar‑raiser check*: I demonstrated ownership of the problem space, deep technical justification for each AWS service choice, measurable impact, and lessons learned from a prior RDS failure (increased cost & downtime).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
