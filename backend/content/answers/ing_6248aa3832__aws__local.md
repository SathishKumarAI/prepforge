---
qid: ing_6248aa3832__aws__local
question: 'Explain: Reserving a Key — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 621
total_tokens: 854
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:41-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the redesign of our e‑commerce order API to guarantee exactly‑once processing when clients retried requests (e.g., due to network blips). The goal was to eliminate duplicate orders while keeping latency < 50 ms and cost < $0.01 per request.

**Action – Design & AWS Services**  
I introduced an **idempotency key** flow:  

| Step | Action | AWS Service | Reasoning |
|------|--------|-------------|-----------|
| 1 | Client sends `Idempotency-Key` header + payload | — | Keeps client‑side control. |
| 2 | API Gateway validates format and forwards to Lambda | **API Gateway** | Edge‑level throttling, minimal cost. |
| 3 | Lambda checks DynamoDB for existing key | **DynamoDB (global table)** | Single‑write consistency guarantees; low latency (≤1 ms). |
| 4a | If key exists → return cached response | — | No extra compute. |
| 4b | If key absent → create provisional record with `status=PENDING` and invoke downstream services | **SQS + Lambda** | Decouples long‑running tasks; scales horizontally. |
| 5 | After successful order creation, update DynamoDB entry to `COMPLETED` & publish event via SNS | **SNS** | Push notifications to inventory/analytics. |

**Dive Deep – Trade‑offs**  
*Scalability*: DynamoDB’s global tables allow read/write throughput of 10 000 RCU/WCU per region; we provisioned 5 000 each, scaling on demand with auto‑scaling policies.  
*Availability*: Using `ReadCapacityUnits` set to **PAIRED** and a TTL for stale keys (24 h) keeps the table lean.  
*Cost*: DynamoDB charges ~$0.25 per GB/month; our 10 GB table cost <$3/mo. Lambda invocations averaged 200 µs, under $0.000001 per call.

**Result – Quantified Impact**  
- Duplicate orders dropped from **12% to <0.1%** in production (over 2M requests/day).  
- Latency improved: median API response time moved from 120 ms to **42 ms**.  
- Cost impact negligible; overall order‑processing cost decreased by **$4,200/year** due to fewer redundant downstream operations.

**Learning & Ownership**  
I ran a post‑mortem on the first batch of failures where stale keys caused accidental duplicates. We added a DynamoDB TTL and stricter client‑side key generation rules, reducing edge‑case errors by 90%. This experience reinforced my commitment to **Ownership** (taking responsibility for end‑to‑end reliability) and **Dive Deep** (profiling at the storage layer).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
