---
qid: ing_647b12c735__aws__local
question: 'Explain: Estimation — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 506
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:12:00-05:00'
sources: []
---

**Situation / Task**  
I was asked to estimate the capacity and cost of building a global URL‑shortening service (TinyURL) that could handle 5 billion click requests per day while keeping latency < 50 ms and providing 99.999% availability.

**Action**  
1. **Requirements & Assumptions** – One write per new short URL, 10 × reads for redirects, 1 µs DNS‑level resolution, 2 % traffic spike tolerance.  
2. **Design** –  
   * **API Layer:** Amazon API Gateway + Lambda (or ECS Fargate) for request parsing and key generation.  
   * **Storage:** DynamoDB with a global table (multi‑AZ) for URL mappings; provisioned capacity 30 k RCU/WCU per shard, auto‑scaling.  
   * **Caching:** Amazon CloudFront + Lambda@Edge to cache redirects at edge locations.  
   * **Analytics:** Kinesis Data Streams → Athena/Redshift for usage metrics.  
3. **Scalability** – Partition keys on hash of short code; 10 TB total storage, 1 T read/write per day ≈ 50 k RCU/WCU.  
4. **Availability & Cost** – Multi‑AZ DynamoDB (99.999%) + CloudFront global edge; estimated monthly cost: $12k for DynamoDB, $3k for API Gateway/Lambda, $5k for CloudFront, $2k for analytics → ~$22k.

**Result**  
The model predicted 95 % of traffic would stay within provisioned limits with a 10× safety margin. After deployment, actual metrics: 4.8 billion clicks/day, < 45 ms latency, 99.9997% uptime, and total cost $21k/month—below budget by 5%.  

**Learning**  
I iterated on the partition strategy after observing hot‑key spikes, shifting to a time‑based sharding scheme that reduced read amplification by 30 %. This reinforced *Ownership* (owning post‑launch ops) and *Dive Deep* (profiling hotspots).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
