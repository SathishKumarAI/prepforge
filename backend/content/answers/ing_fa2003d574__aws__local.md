---
qid: ing_fa2003d574__aws__local
question: 'Explain: Google Docs — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 531
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:43:46-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation:* My team was asked to redesign the real‑time collaboration layer of a document editor that currently handles ~10 M active users and ~50 TB/month of change logs.  
> *Task:* Build a scalable, highly available architecture on AWS that guarantees 99.999% uptime, sub‑200 ms latency for collaborative edits, and cost‑efficiency.

**Design Overview**

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| **Client → Edge** | Amazon CloudFront + WebSocket (API Gateway) | Low‑latency global entry; WebSockets keep a persistent channel for real‑time ops. |
| **Change Propagation** | Amazon Kinesis Data Streams + Lambda | Each edit is an event; Lambda processes and writes to the *Operational Store* while preserving order. |
| **Operational Store** | DynamoDB (Global Tables) | Low‑latency, multi‑region replication for document state with eventual consistency that’s acceptable for collaborative editing. |
| **Audit Trail / Rollback** | S3 Glacier Deep Archive + Athena | Immutable change logs for compliance and historical retrieval; Athena gives ad‑hoc query capability without moving data. |
| **Conflict Resolution** | Custom Lambda (CRDT engine) | Implements Conflict‑Free Replicated Data Types, ensuring linearizability across clients. |
| **Monitoring & Autoscaling** | CloudWatch + Application Auto Scaling | Metrics on edit throughput trigger scaling of Lambdas and DynamoDB read/write units; alarms for latency spikes. |

**Dive Deep – Quantified Impact**

*After deployment:*  
- Latency dropped from 350 ms to 170 ms (45% improvement).  
- Operational costs fell by 38% due to serverless compute and on‑demand storage.  
- Incident rate per month reduced from 4 to <0.5.

**Learning & Bar‑Raiser Takeaway**

I owned the full stack, iterated on CRDT logic after a “merge storm” failure (loss of edits), and documented the trade‑off between eventual consistency vs strict ordering. The bar‑raiser looked for clear ownership, depth in the conflict‑resolution design, measurable ROI, and evidence that we turned a hard failure into a learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
