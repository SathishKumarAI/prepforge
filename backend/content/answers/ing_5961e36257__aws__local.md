---
qid: ing_5961e36257__aws__local
question: 'Explain: Room Type APIs (Admin) — Airbnb System Design - by Neo Kim and
  Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 479
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:59-05:00'
sources: []
---

**Situation & Task**  
When I joined the **Airbnb‑AI Ops team**, we were asked to expose a new *Room Type* API set (create, update, delete) that would let property managers auto‑populate listings from an internal AI model. The goal was to support 10 k concurrent admin users while keeping latency < 200 ms and cost under $5K/month.

**Action & Design**  
1. **API Gateway + Lambda Authorizer** – Fast request routing, per‑user throttling (rate/ burst) and IAM‑based auth.  
2. **Aurora Serverless v2 (PostgreSQL)** – ACID‑compliant room type table with `room_type_id PK`, `owner_id FK`, `features JSONB`. Auto‑scales from 1–64 ACUs, keeping cost < $3K/month for the expected traffic.  
3. **EventBridge + SQS** – Every write emits a `RoomTypeUpdated` event; downstream services (search index, recommendation engine) consume asynchronously.  
4. **DynamoDB Global Secondary Index** on `owner_id` for quick owner‑specific queries.  
5. **CloudWatch Alarms & X-Ray** – 99.9 % availability SLA and 150 ms median latency monitored.

**Result**  
- Reduced admin API response time from 350 ms to 120 ms (36 % improvement).  
- Cost dropped by 40 % vs the monolithic EC2 baseline.  
- Throughput handled 15 k concurrent users during a promotional launch without throttling.

**Learnings & Bar‑Raiser Signals**  
*Ownership*: I owned the entire stack, from API contract to cost monitoring.  
*Dive Deep*: We traced a 200 ms latency spike back to a suboptimal GSI scan; re‑indexing fixed it in minutes.  
*Quantified Impact*: Demonstrated clear ROI (latency + cost).  
*Failure*: Early prototype crashed under burst traffic—used that failure to justify the EventBridge decoupling and serverless database, turning a risk into a win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
