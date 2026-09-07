---
qid: ing_19a22b6632__aws__local
question: 'Explain: DB segment — Explaining 5 Unique ID Generators'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 628
total_tokens: 860
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:13-05:00'
sources: []
---

**Situation / Task**  
At my previous company we were launching a global e‑commerce platform that needed to generate unique identifiers for orders, products, inventory items, shipments, and user sessions—each with different semantics (e.g., order IDs must be sortable by time). The existing single‑table UUID approach caused contention and made analytics difficult.

**Action**  
I led a cross‑functional squad to design **five specialized ID generators**:

| Generator | Use‑case | Design |
|-----------|----------|--------|
| **Snowflake‑style** | Order IDs (time‑sortable) | 41 bits timestamp, 10 bit datacenter, 12 bit machine + 1 bit sequence. Implemented as a Lambda “ID‑service” behind an Application Load Balancer, backed by DynamoDB for clock‑skew detection. |
| **ULID** | Product SKUs (lexicographically sortable) | Stateless, 48 bits timestamp + 80 bits randomness. Served via API Gateway + Lambda; no state needed, so zero contention. |
| **Nano ID** | Inventory item IDs (short, URL‑safe) | 21‑char base62 string. Generated client‑side to reduce round trips; fallback Lambda for collision checks in S3‑based key store. |
| **Deterministic Hash** | Shipment tracking numbers | SHA‑256 of shipment data + salt → truncated 12 bytes. No external service, instant generation. |
| **UUIDv7** | User session tokens | Time‑ordered UUID with 48 bits timestamp; generated in Cognito user pools for security and auditability. |

I chose **AWS Lambda**, **API Gateway**, **DynamoDB (eventual consistency)**, and **S3** (for collision logs) to keep the system serverless, highly available, and cost‑effective (<$0.02 per 1 M requests). The design supports >10 k IDs/sec with <5 ms latency and 99.999% availability by leveraging multiple AZs.

**Result**  
Post‑deployment:

* Generated >50 M unique IDs in the first month without collisions.  
* Reduced order ID generation latency from 12 ms to 3 ms (70% improvement).  
* Cut infrastructure cost for ID services by 60% compared with a monolithic UUID generator.

**Reflection**  
I practiced **Customer Obsession** by ensuring identifiers were human‑readable for analysts and machine‑friendly for microservices. I exercised **Ownership**—owning the entire end‑to‑end pipeline—and **Dive Deep** when we uncovered a clock drift issue that required DynamoDB’s conditional writes to resolve. The bar‑raiser will see my quantified impact, clear trade‑offs (stateless vs stateful), and lessons learned about clock skew in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
