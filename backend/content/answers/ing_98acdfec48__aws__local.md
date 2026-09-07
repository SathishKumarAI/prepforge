---
qid: ing_98acdfec48__aws__local
question: 'Explain: Zero Copy — Why is Kafka Fast?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 384
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:42-05:00'
sources: []
---

**Situation / Task**  
When I joined the data‑engineering team at a fintech startup, we were bottlenecked by nightly ETL jobs that streamed millions of events from our trading platform into a Hadoop cluster via a custom TCP pipeline. The latency hit our risk dashboards (up to 15 min) and caused SLA breaches.

**Action**  
I proposed replacing the custom pipe with **Apache Kafka** and leveraged its *zero‑copy* optimization. I first mapped the data flow: producers → broker → consumers. In Kafka, records are written directly into a memory‑mapped file; when a consumer reads them, the OS copies the page reference rather than the payload (page‑cache hit).  
I configured **replication factor = 3** for durability, set `message.max.bytes` to 1 MB and enabled *segmented log compaction* to keep only the latest state. I also added an **S3 sink connector** to archive raw logs cost‑effectively.

**Result**  
- Throughput increased from ~200 kB/s to **>10 M B/s** (50×).  
- Latency dropped from 15 min to <30 s, meeting all SLAs.  
- Cost per GB ingested fell by 40% due to reduced CPU cycles and storage write amplification.

**Reflection**  
I learned that *zero‑copy* hinges on the OS page cache; misconfiguring `flush.messages` or `segment.bytes` can negate gains. I documented these trade‑offs for future infra changes, embodying **Ownership**, **Dive Deep**, and **Deliver Results**—key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
