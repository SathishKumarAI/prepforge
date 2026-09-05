---
qid: ing_edda4cda41__star__local
question: 'Explain: CP - consistency and partition tolerance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 297
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:24:23-05:00'
sources: []
---

**Situation:**  
While leading a fraud‑detection project at my previous employer, we had to ingest transaction data from dozens of banking partners in real time. The system needed to flag suspicious activity within milliseconds while also maintaining a global view of user behavior.

**Task:**  
I was tasked with designing the data layer so that our machine‑learning models could train on fresh data without sacrificing reliability during network outages, all under strict SLA constraints.

**Action:**  
We chose a hybrid architecture: a primary PostgreSQL cluster for strong consistency and a replicated Kafka stream for partition tolerance. During normal operation, writes went to PostgreSQL; any latency spikes were buffered in Kafka and replayed once the cluster recovered. For training, we built an offline pipeline that consumed the Kafka log to create immutable snapshots, guaranteeing that model updates saw a consistent dataset while still tolerating network partitions.

**Result:**  
The system handled 1 M transactions per minute with <50 ms latency during peak hours, and no data loss occurred during a 2‑hour network partition. Model accuracy improved by 12% after the new pipeline was deployed. I learned that balancing consistency and partition tolerance requires clear separation of read/write workloads and an understanding of where strict ACID guarantees are truly necessary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
