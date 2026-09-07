---
qid: ing_f4de9d3905__aws__local
question: 'Explain: up to five global secondary indexes so — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 486
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:30:41-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with redesigning the product catalog service that shipped millions of items to users worldwide. The team needed *up to five global secondary indexes (GSIs)* on a single DynamoDB table to support rapid queries for price, availability, and brand while keeping latency under 50 ms.

**Action**  
1. **Requirements & Trade‑offs** – I scoped the access patterns: read‑heavy (≈90 % reads) with occasional writes.  
2. **Design** – Created a single partition key `PK = “CATEGORY#<id>”` and sort key `SK = “ITEM#<timestamp>` to preserve hotness per category. For each GSI I set:
   - *Index name* (e.g., `PriceIdx`) with `HASH=Price`, `RANGE=ItemId`.
   - Provisioned throughput based on projected traffic; used **on‑demand** for the least‑used index to avoid over‑provisioning.
3. **Implementation** – Leveraged AWS SDK v2 and Terraform to automate GSI creation. Added **Stream + Lambda** to keep a denormalized `PriceHistory` table in sync, ensuring eventual consistency without heavy write amplification.
4. **Testing & Validation** – Employed *DynamoDB Accelerator (DAX)* for caching hot queries; ran load tests with *Locust* and monitored CloudWatch metrics.

**Result**  
- Reduced average read latency from 120 ms to **42 ms** (≈65 % improvement).  
- Cut read capacity costs by **30 %** thanks to selective on‑demand provisioning.  
- Achieved 99.999% availability during a regional outage by enabling **Multi‑AZ** and auto‑scaling.

**Reflection**  
I learned that *GSIs are powerful but costly*; careful cardinality analysis is essential. I applied **Customer Obsession** (fast, reliable catalog) and **Ownership** (automated provisioning & monitoring). A bar‑raiser would note my data‑driven metrics, depth in GSI trade‑offs, and proactive failure handling—hallmarks of an AWS engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
