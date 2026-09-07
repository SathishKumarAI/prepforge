---
qid: ing_244fd6be85__aws__local
question: 'Explain: Hotel APIs (Admin) — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 433
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:02-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a high‑throughput “Hotel Admin” API layer for an Airbnb‑style marketplace that would let property owners list, edit and delete rooms while keeping the public catalog in sync. The goal: 100 k concurrent admin requests per day with <200 ms latency, 99.9 % availability, and cost under $50K/month.

**Action**  
1. **Micro‑service decomposition** – separate *Admin* (write) from *Catalog* (read).  
2. **Event‑driven sync** – on any write, publish a `HotelUpdated` event to Amazon SNS; downstream catalog services consume via SQS and update DynamoDB & ElasticSearch indexes.  
3. **Schema design** – use a single DynamoDB table with partition key `hotel_id`, sort key `timestamp`; TTL for stale records.  
4. **Scaling strategy** – autoscale API Gateway + Lambda (Provisioned Concurrency 200) backed by Aurora Serverless for relational constraints.  
5. **Observability** – CloudWatch metrics, X-Ray traces; set up a *Service Level Indicator* of 99.9 % and alert on >10 ms latency spikes.

**Result**  
- Deployed to production in 3 weeks (vs. 6 expected).  
- Handled 120 k admin ops/day with <180 ms avg latency, 99.95 % availability.  
- Cost reduced by 35 % compared to a monolithic approach.  

**Reflection**  
*Ownership*: I led the end‑to‑end design and drove cross‑team buy‑in.  
*Dive Deep*: Chose DynamoDB for its single‑partition throughput; evaluated Aurora vs. RDS for relational needs.  
*Learned from failure*: Early mock tests revealed a race condition in SQS visibility timeout; added idempotent processing to eliminate duplicate updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
