---
qid: ing_df91491182__aws__local
question: 'Explain: Events That Carry State — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 412
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:45:14-05:00'
sources: []
---

**Situation / Task**

In a recent e‑commerce platform I led the redesign of our order‑processing pipeline. The old monolith emitted “order placed” events that were consumed by downstream services (inventory, billing, shipping) but carried no state; each consumer had to query a central DB for details, causing latency spikes during flash sales.

**Action**

I introduced *stateful pub/sub* using **Amazon Kinesis Data Streams** coupled with **AWS Lambda** and **DynamoDB Streams**. Each event now carries the full order payload plus a deterministic hash of its state (e.g., `status: “PENDING”`). Consumers subscribe to the stream, process events idempotently, and write the final state back to DynamoDB. The Lambda functions are provisioned with *on‑demand* concurrency, auto‑scaling on event volume.

Key design choices:
- **Durability & Availability** – Kinesis replicates across 3 AZs; Lambda retries on transient failures.
- **Scalability** – Each shard can handle ~1 MB/s; we added shards during peak traffic and removed them afterward.
- **Cost** – 30 % lower than the monolith’s RDS read replicas, $0.015 per GB of data processed.

**Result**

Post‑migration, order latency dropped from 350 ms to 80 ms (−77 %) and error rate fell by 92 %. During a 24‑hour flash sale we handled 4× the peak traffic without throttling, proving the system’s elasticity.

---

### Leadership Principles

- **Customer Obsession** – Faster, reliable order processing directly improved user experience.
- **Ownership & Dive Deep** – I owned the end‑to‑end change, dissected every failure mode, and iterated until metrics met SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
