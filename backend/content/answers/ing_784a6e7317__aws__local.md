---
qid: ing_784a6e7317__aws__local
question: 'Explain: Key Metrics — Things to Consider When Using Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 388
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:57:24-05:00'
sources: []
---

**Situation / Task**  
At a streaming startup I led the migration of our recommendation engine from a monolithic cache layer to a distributed Redis cluster. The goal was to reduce latency for “next‑up” requests while keeping cost under $50k/month.

**Action**  
I first **dive deep** into usage patterns: hit rate, key size, eviction policy, and TTL distribution. Using CloudWatch metrics I identified that 80 % of traffic hit a single key (“top 5 genres”), yet those keys grew to 2 GB each.  

I designed a two‑tier cache:  
1. **Local in‑process LRU** (guaranteed <5 ms) for the top 5 keys.  
2. **Amazon ElastiCache Redis** with read replicas, partitioning by user segment, and `volatile-lru` eviction.

Key metrics I tracked were:  
- **Hit ratio** (↑ from 65 % to 92 %)  
- **Average latency** (<10 ms target met 99.5 % of requests)  
- **Cost per request** ($0.0004, down 35 %).  

I set up automated alerts on `Evictions` and `CacheHits`. When a sudden spike in evictions hit >2 %, the system auto‑scales to an additional replica, keeping SLA intact.

**Result**  
Latency dropped by **40 %**, cost fell by **$18k/month**, and customer satisfaction (NPS) rose from 55 to 68. The project was delivered on schedule, demonstrating **Ownership** and **Bias for Action** while maintaining high availability with a fault‑tolerant Redis architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
