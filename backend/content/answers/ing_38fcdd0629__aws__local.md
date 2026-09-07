---
qid: ing_38fcdd0629__aws__local
question: 'Explain: Functional Requirements — Distributed Counter System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 510
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:33:56-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a **distributed counter system** for an ad‑tech platform that needed to track click counts in real time while supporting millions of concurrent users and ensuring eventual consistency across global regions.

**Action – Design**  
1. **Event ingestion** – Each click event is published to **Amazon Kinesis Data Streams** (shards tuned for 10 000 records/s).  
2. **Processing & aggregation** – A fleet of **AWS Lambda** functions, triggered by the stream, performs *in‑memory* partial sums per shard and writes them to **DynamoDB Global Tables** (partition key = `counter_id`, sort key = `shard_id`).  
3. **Global consistency** – DynamoDB Global Tables provide multi‑region replication with < 200 ms latency; we use a *read‑through cache* in **Amazon ElastiCache for Redis** to serve hot counters with sub‑millisecond response times.  
4. **Monitoring & alerting** – CloudWatch metrics (write throughput, throttles) trigger auto‑scaling of Lambda concurrency and shard count adjustments.  

**Result**  
- Achieved **99.999% availability** during a 3‑month load test that simulated 50 M clicks/day.  
- Reduced average counter read latency from 150 ms to **< 5 ms** for the top 1,000 counters.  
- Cost savings of **18 %** over a monolithic implementation by leveraging serverless compute and managed services.

**Leadership Principles**  
*Customer Obsession* – delivered sub‑millisecond reads so that real‑time dashboards stayed responsive.  
*Ownership* – I led end‑to‑end design, coordinated cross‑team testing, and iterated the architecture based on production telemetry.

**Bar‑raiser takeaways**  
- Demonstrated *dive deep* by quantifying latency trade‑offs between DynamoDB vs. Redis.  
- Showed *bias for action* with a quick Kinesis‑Lambda prototype that validated throughput assumptions before committing to full rollout.  
- Learned from an initial throttling issue; adjusted shard count and Lambda concurrency, documenting the root cause and preventive guardrails.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
