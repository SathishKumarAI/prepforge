---
qid: ing_af98a58ba4__aws__local
question: 'Explain: Storage — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 437
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:18-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a data‑science team that had to store millions of raw event logs for downstream ML pipelines while keeping cost under $200k/yr and latency < 5 ms for read‑through analytics.

**Action**  
I applied *Customer Obsession* by mapping the “customer” to our internal ML users: they needed quick, repeatable access to both hot (recent) and cold (historical) data. I chose a **two‑tier architecture**:

| Tier | AWS Service | Rationale |
|------|-------------|-----------|
| Hot | Amazon S3 Intelligent‑Tiering + Athena | 99.9 % availability, serverless query, low cost for frequent access |
| Cold | Glacier Deep Archive + S3 Select | Cost‑effective storage for >90 % of data; S3 Select reduces egress by filtering at the object level |

I added **AWS Glue** to catalog and partition data nightly, ensuring *Dive Deep* into metadata. For durability I enabled **S3 versioning** (redundancy across AZs) and used **S3 Object Lock** for regulatory compliance.

**Result**  
The design cut storage spend by 60 % (from $320k to $128k/yr), maintained 99.98 % read availability, and reduced query times from 12 s to < 5 ms for the hot tier. The solution also allowed us to scale from 10M to 200M events per month without re‑architecting.

**Bar‑raiser takeaways**  
- **Ownership**: I drove end‑to‑end design and cost monitoring.  
- **Dive Deep**: I quantified partition sizes, query latency, and cost per GB.  
- **Learned from failure**: An earlier monolithic S3 bucket hit 1 TB limits; the tiered approach avoided that bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
