---
qid: ing_a40ae7ecbf__aws__local
question: 'Explain: Body — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 457
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:22-05:00'
sources: []
---

**Situation / Task**  
While leading the *Real‑Time Analytics* team at a fintech startup, we needed to expose our fraud‑detection model’s predictions to downstream services. The data lake stored raw logs in S3, but consumers required low‑latency search on user‑activity metadata. I owned the migration from a legacy MySQL store to **Elasticsearch**.

**Action (Technical)**  
1. **Requirements**: 10 M documents/day, 99.9 % uptime, <5 ms query latency for top‑k lookups.  
2. Designed a *sharded* index with **7 primary shards** + **3 replicas** on an **m6i.large.elasticsearch** cluster (10 GB SSD).  
3. Implemented the Create Index API (`PUT /fraud-activity`) via Terraform, embedding:
   - Custom analyzer for tokenizing user IDs.
   - Dynamic templates to auto‑detect new fields.
4. Scripting with Python `elasticsearch-py` to bulk index daily batches; monitored cluster health with CloudWatch alarms (CPU > 70 % → auto‑scale).  
5. Added **index lifecycle management**: rollover every 500 GB, delete after 90 days.

**Result**  
- Query latency dropped from 200 ms to **<4 ms** (45× improvement).  
- Search accuracy improved by 12 % due to better field mapping.  
- Operational cost reduced by 30 % vs. the previous MySQL + Redis stack.  

**Reflection (Bar‑raiser focus)**  
I took full ownership, diving deep into shard allocation and replica sizing. The trade‑off of a larger cluster was justified by measurable latency gains. After an initial outage caused by mis‑configured replicas, I instituted automated health checks—learning that proactive monitoring beats reactive fixes. This experience reinforced my commitment to *Customer Obsession* (delivering instant insights for fraud analysts) and *Dive Deep* (rigorous performance tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
