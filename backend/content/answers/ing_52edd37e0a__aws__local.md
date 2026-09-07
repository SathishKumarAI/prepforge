---
qid: ing_52edd37e0a__aws__local
question: 'Explain: Top 7 Most-Used Distributed System Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 742
total_tokens: 973
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:32:21-05:00'
sources: []
---

**Situation – Project & Impact**  
I led a cross‑functional team that built a real‑time recommendation engine for an online marketplace. We had to process >10 M events per day and keep latency <200 ms, while staying under $50K/month.  

**Task – Architecture Decision**  
We mapped our needs onto the *seven most‑used distributed‑system patterns* and chose AWS services that fit each pattern.

| Pattern | Typical Use | AWS Services Used | Why it Matters |
|---------|-------------|-------------------|----------------|
| **1. Event‑Driven (Publish/Subscribe)** | Decouple producers from consumers | Amazon Kinesis / SNS + Lambda | Enables horizontal scaling & fault isolation |
| **2. Command Query Responsibility Segregation (CQRS)** | Separate read/write workloads | DynamoDB Streams + Aurora Serverless | Lowers read latency, isolates write bursts |
| **3. Circuit Breaker** | Prevent cascading failures | AWS App Mesh + Envoy filters | Keeps downstream services healthy during spikes |
| **4. Bulkhead (Resource Isolation)** | Protect critical resources | ECS task placement constraints & Fargate CPU limits | Guarantees SLA for high‑priority jobs |
| **5. Retry with Exponential Backoff** | Handle transient errors | AWS SDK built‑in retry + SQS visibility timeout | Reduces duplicate work, improves throughput |
| **6. Rate Limiting / Throttling** | Prevent abuse & over‑commitment | API Gateway throttling + Lambda authorizer | Maintains service stability under load |
| **7. Cache‑Aside (Read‑Through)** | Speed up hot data | ElastiCache Redis + application cache layer | Cuts read latency by 75 % and saves DB reads |

**Action – Implementation & Scale**  
- Deployed Kinesis shards that auto‑scaled to 200 k events/sec.  
- CQRS split writes into DynamoDB (partition key = user_id) and reads into Aurora with a materialized view.  
- Circuit breakers were enabled on all inter‑service calls; failure rates dropped from 12% → 0.3%.  
- Bulkheads limited each recommendation job to 2 vCPU, preventing memory hogs.  
- Exponential backoff retries in Lambda reduced duplicate processing by 60%.  
- API Gateway throttling capped inbound traffic at 10k RPS; we never exceeded SLA.  
- Cache‑aside kept the hottest 5% of users’ recommendations served from Redis (99.9 % hit rate).

**Result – Quantified Success**  
- Latency fell from 1,200 ms to **<190 ms** (95th percentile).  
- Throughput grew from 2 M → **12 M events/day** with no outages.  
- Cost stayed below $48K/month, a **15% savings** over the baseline plan.  

**Reflection – Learning & Ownership**  
I owned end‑to‑end visibility through CloudWatch dashboards and weekly “post‑mortems” that surfaced trade‑offs (e.g., bulkhead CPU limits vs. throughput). The team adopted a *data‑driven* mindset: every pattern change was logged, monitored, and iterated on until the metrics met our goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
