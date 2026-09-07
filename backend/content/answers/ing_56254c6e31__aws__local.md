---
qid: ing_56254c6e31__aws__local
question: When should you use synchronous vs. asynchronous replication?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 454
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:40:45-05:00'
sources: []
---

**Situation / Task**  
I was leading the redesign of our global e‑commerce catalog for a new launch. The catalog needed near‑real‑time consistency across 12 regions while keeping latency under 50 ms for end users.

**Action**  
I evaluated **synchronous vs. asynchronous replication** using AWS services:

| Replication type | Pros | Cons | Use case |
|------------------|------|------|----------|
| Synchronous (e.g., Aurora Global DB, DynamoDB Global Tables with `Transaction` API) | Strong consistency; immediate read‑after‑write | Higher write latency; cross‑region failure can block writes | Critical inventory updates where a stale record could trigger oversell |
| Asynchronous (e.g., EventBridge + Lambda, SQS DLQ, Kinesis Data Streams) | Low write latency; high throughput; decouples services | Eventual consistency; possible data lag | Catalog price changes that tolerate 1‑2 s staleness |

I chose **mixed strategy**:  
* **Inventory** – synchronous writes to Aurora Global DB (write latency ≈ 120 ms, but < 5 % of traffic).  
* **Pricing & metadata** – asynchronous replication via EventBridge → Lambda → DynamoDB Streams.  

This split kept the overall write path ≤ 80 ms and reduced cross‑region failure impact from 15 % to < 2 %. We achieved a 30 % reduction in cart abandonment compared to the legacy single‑region setup.

**Result**  
- **Availability:** 99.99 % SLA maintained during region outages.  
- **Cost:** $0.02/GB/month saved on Aurora by offloading non‑critical writes.  

**Reflection**  
I learned that a *hybrid* approach, driven by business impact and consistency requirements, delivers the best trade‑off—an insight I’ll apply to future multi‑region designs.

> **Leadership Principles:** Ownership (owning both performance & reliability), Dive Deep (profiling latency per operation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
