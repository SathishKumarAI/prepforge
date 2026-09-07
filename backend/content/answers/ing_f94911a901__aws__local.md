---
qid: ing_f94911a901__aws__local
question: 'Explain: It Reduces Fault Tolerance — Bonsai Blog | Fully Managed Elasticsearch
  & OpenSearch \u2022 Why Elasticsearch should not be your Primary Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 395
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:51-05:00'
sources: []
---

**Situation (S)** – While leading the migration of our event‑logging platform from a legacy SQL store to a fully managed OpenSearch cluster, I discovered that treating OpenSearch as the *primary* data store caused frequent consistency gaps during node failures.

**Task (T)** – My goal was to design a fault‑tolerant architecture that preserved query speed while guaranteeing durability and recoverability of critical telemetry data.

**Action (A)**  
1. **Separation of concerns**: I split writes into two pipelines—(a) an append‑only Kafka stream that feeds a durable PostgreSQL table, and (b) a near‑real‑time OpenSearch index for analytics.  
2. **AWS services**:  
   - *Amazon MSK* for the fault‑tolerant log stream.  
   - *Amazon RDS Aurora* as the primary transactional store (high availability + point‑in‑time recovery).  
   - *Amazon OpenSearch Service* for ad‑hoc queries, backed by an 3‑AZ cluster with auto‑scaling and snapshot lifecycle policies.  
3. **Monitoring & Recovery**: Integrated CloudWatch metrics to trigger automatic failover of the OpenSearch domain; used S3 snapshots to restore in <5 min.

**Result (R)** – After deployment, query latency dropped from 350 ms to 80 ms for analytical workloads while write durability increased by **99.999%**. The system survived a full AZ outage with zero data loss and no manual intervention.  

**Leadership Principles**  
- *Ownership*: I owned the end‑to‑end reliability of both systems.  
- *Dive Deep & Deliver Results*: By dissecting fault‑tolerance trade‑offs, we achieved measurable performance gains without compromising consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
