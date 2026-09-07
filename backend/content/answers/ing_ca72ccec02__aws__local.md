---
qid: ing_ca72ccec02__aws__local
question: 'Explain: Metadata Storage — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 415
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:05-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team that built an enterprise web‑crawler for real‑time analytics, we needed a *metadata store* to keep crawl status, URLs, and extraction schema at scale without bottlenecking the crawler pipeline.

**Action**  
I owned the design and drove it from requirements through deployment.  
1. **Requirements** – 10 M URLs/day, 99.9 % availability, <5 ms latency for look‑ups, cost ≤ $2k/month.  
2. **Architecture** – A two‑tier store:  
   * **Amazon DynamoDB** (partitioned by domain) for hot metadata (crawl state, timestamps).  
   * **Amazon S3 + AWS Glue** for cold archival and schema evolution.  
3. **Scalability & Availability** – Provisioned 10 WCU/RCU per shard, enabled auto‑scaling; used DynamoDB Global Tables for multi‑AZ resilience.  
4. **Cost control** – Leveraged on‑demand capacity with reserved instances for predictable traffic; archived infrequently accessed keys to S3 using lifecycle policies.  
5. **Monitoring & Ops** – CloudWatch alarms on latency, throttling; automated remediation via Lambda.

**Result**  
- Reduced metadata read latency from 120 ms to <4 ms (×30x).  
- Cut storage cost by 35% compared to a monolithic RDS solution.  
- Maintained 99.97 % uptime during a sudden traffic spike of 3× normal volume.

**Reflection**  
I applied **Ownership** and **Dive Deep**: I questioned every assumption (e.g., why not RDS?) and quantified trade‑offs. The failure point was an early mis‑estimate of write amplification; we fixed it by re‑partitioning keys, learning that data modeling is as critical as service selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
