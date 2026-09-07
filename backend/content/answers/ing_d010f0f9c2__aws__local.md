---
qid: ing_d010f0f9c2__aws__local
question: 'Explain: Apache Casandra — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 449
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:25-05:00'
sources: []
---

**Situation / Task**  
I was tasked to migrate our real‑time click‑stream analytics from a legacy MySQL cluster to a horizontally scalable store that could handle 10 M events/s while keeping latency under 200 ms.  

**Action (Design)**  
- Chose **Apache Cassandra** because its *wide‑row* model and tunable consistency fit the write‑heavy, time‑series workload.  
- Deployed it on **Amazon EC2** with **EBS GP3** for fast SSD I/O, using **Auto Scaling Groups** to spin up nodes when request rates spiked (observed via CloudWatch).  
- Implemented *partition key = user_id + event_type* and *clustering key = timestamp*, enabling efficient range queries.  
- Enabled **read repair & hinted handoff** for durability; set consistency level to *QUORUM* during analytics jobs, *ONE* for real‑time dashboards.  
- Integrated with **AWS Glue** for schema evolution and **Amazon Kinesis Data Firehose** to stream raw events into Cassandra via a Lambda writer.

**Result**  
- Achieved 98 % uptime (SLA) over 12 months.  
- Reduced query latency from 1,200 ms (MySQL) to <180 ms at peak load.  
- Cut infrastructure cost by 35 % versus the old cluster by leveraging spot instances and right‑sizing node counts.

**Learning / Ownership**  
I continuously profiled write amplification; discovered that a mis‑tuned compaction strategy inflated disk usage by 40 %. I switched to *SizeTiered* with *compaction_threshold=4*, cutting storage costs by another 20 % and improving read performance.  

---

> **Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered sub‑200 ms latency for end users.  
- **Ownership & Dive Deep:** Diagnosed and fixed compaction inefficiencies, driving cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
