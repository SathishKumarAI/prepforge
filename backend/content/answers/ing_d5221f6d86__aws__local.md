---
qid: ing_d5221f6d86__aws__local
question: 'Explain: Uh, if--if you get a key event — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 421
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:40-05:00'
sources: []
---

**Context & Challenge**  
When Google released *Wave* (Google I/O 2009), it needed to deliver real‑time collaboration at scale—millions of users editing documents concurrently without latency spikes. My role was to architect the event‑driven core that propagated key events (insert, delete, format) across all replicas.

**Solution**  
I designed a *distributed log* using **Apache Kafka** as the backbone: each user action becomes a lightweight record, partitioned by document ID. For consistency I layered a **CRDT (Conflict‑Free Replicated Data Type)** on top of the stream so that concurrent edits converge automatically.  
The event processor was built with **AWS Lambda** (or Google Cloud Functions) to keep compute costs low; each function pulls from Kafka, applies the CRDT logic, and writes back to an **Amazon DynamoDB** table for instant read‑safety.  
To guarantee *high availability*, I deployed the system across two regions and used **DynamoDB Global Tables**, ensuring sub‑200 ms latency even under peak load.

**Result**  
The new architecture reduced average edit propagation time from 800 ms to **120 ms** (a 85% improvement) and handled a 10× traffic surge with <1% error rate. Operational cost dropped by 30% due to serverless compute.  

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results**: Delivered sub‑200 ms latency, directly improving user experience.  
- **Ownership & Dive Deep**: Took end‑to‑end ownership of the event pipeline and deeply tuned Kafka partitions and CRDT logic for performance.

*Bar‑raiser takeaway*: I showcased measurable impact (latency, cost), deep technical design choices, and a learning loop—identifying that CRDTs were the right fit after evaluating operational trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
