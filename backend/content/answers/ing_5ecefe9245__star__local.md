---
qid: ing_5ecefe9245__star__local
question: 'Explain: Mutations → Modify Data — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 362
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:40-05:00'
sources: []
---

**Situation** – At my last job I was tasked with building a real‑time inventory dashboard for a mid‑size e‑commerce platform that had been using a legacy SOAP API and was struggling with latency when updating stock levels across thousands of SKUs.

**Task** – Replace the SOAP layer with a modern data‑layer so that product updates (add, edit, delete) were instantaneous and could be batched without over‑fetching. I needed to decide between a RESTful endpoint set or GraphQL mutations for the write side.

**Action** – I prototyped both approaches in a small sandbox. For REST I designed a `/products/{id}` PATCH endpoint with optimistic locking, but each update required a full payload of 30 fields and triggered multiple round‑trips to keep related metrics in sync. With GraphQL I defined a `updateProduct` mutation that accepted only the changed fields plus an `ifMatch` ETag for concurrency. I leveraged Apollo Server’s batching and persisted queries so every client sent just one POST, and used DataLoader to de‑duplicate underlying DB reads. The mutation returned the new product state and a list of affected order IDs so downstream services could react immediately.

**Result** – Switching to GraphQL mutations cut the average update latency from 350 ms (REST) to under 70 ms, reduced network traffic by 60%, and eliminated duplicate writes during bulk uploads. I learned that for write‑heavy workloads, fine‑grained mutation schemas combined with batching can vastly outperform traditional REST designs when you need real‑time consistency across a distributed system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
