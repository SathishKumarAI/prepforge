---
qid: ing_2c8d507ddc__aws__local
question: 'Explain: Keep Membership Consistent Enough — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 438
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:37-05:00'
sources: []
---

**Situation (S)**  
In my last role I built a high‑availability recommendation engine for an e‑commerce platform that served 3 M daily users. The backend used sharded user profiles stored in DynamoDB and Redis. We hit a *membership drift* problem: as nodes were added or removed, many user sessions pointed to stale shards, causing cache misses and doubling latency.

**Task (T)**  
My goal was to keep membership consistent while scaling horizontally—without a costly full re‑hash of all keys—and to do it in a way that Amazon would accept for an 18‑hour rollout.

**Action (A)**  
I introduced **Consistent Hashing** over a virtual ring with 1024 tokens per physical node, using **Amazon ElastiCache Redis Cluster** for token metadata and **AWS Lambda** as the lookup service. Each request first queried Lambda to resolve the user ID to a token, then routed to the corresponding Redis shard via its endpoint. This added only ~5 ms latency but eliminated 97 % of stale‑cache hits.  
I also set up CloudWatch alerts on *hash churn* and used **AWS Auto Scaling** to add/remove shards based on CPU thresholds, ensuring **99.9 % availability**.

**Result (R)**  
After deployment the cache hit rate jumped from 68 % to 95 %, reducing average request latency from 210 ms to 45 ms—a 78 % improvement—and cutting DynamoDB reads by 62 %. The rollout was completed in 12 hours with zero downtime, and we saved ~30 % on compute costs over the next quarter.

**Leadership Principles Reflected**  
- **Customer Obsession:** Delivered a smoother user experience.  
- **Ownership & Dive Deep:** Designed a fault‑tolerant system that balances scalability, cost, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
