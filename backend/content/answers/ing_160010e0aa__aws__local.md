---
qid: ing_160010e0aa__aws__local
question: 'Explain: CDC (Change Data Capture) — How do we incorporate Event Sourcing
  into systems?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 452
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:15:03-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑platform migration for a fintech client, the legacy monolith logged every transaction in a single table. The new architecture required real‑time analytics and auditability without locking the OLTP system. I was tasked with building a CDC pipeline that also served as an event source for downstream services.

**Action & Design**  
1. **Capture** – Enabled MySQL binlog replication to Kinesis Data Streams (AWS DMS → Kinesis). This gave millisecond‑level change events without impacting the source database.  
2. **Transform & Persist** – A Lambda function processed each record, applied schema versioning and stored a canonical event in DynamoDB with a composite key (`PK=entityId`, `SK=timestamp`). This table became the *source of truth* for any downstream service (search, fraud detection).  
3. **Event Bus** – The same Lambda published the event to Amazon EventBridge, enabling micro‑services to subscribe on-demand.  
4. **Replay & Audit** – A Glue job could re‑read Kinesis shards or DynamoDB Streams to rebuild projections, satisfying regulatory audit requirements.

**Result**  
- Reduced OLTP latency by 35 % (no blocking writes).  
- Enabled real‑time dashboards with <200 ms lag, driving a 12 % increase in user engagement.  
- Cut storage costs by 40 % by eliminating redundant snapshots; only incremental events were stored.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered instant insights for compliance and UX.  
- **Ownership & Dive Deep** – Took full responsibility for end‑to‑end data flow, iterated on schema evolution after a failed replay test that revealed missing timestamps.  

**Bar‑raiser cues**  
- Demonstrated *ownership* by handling failure modes (e.g., binlog replication lag).  
- Showed *depth* through choice of services (DMS → Kinesis → Lambda) and trade‑off analysis (latency vs cost).  
- Quantified impact with clear metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
