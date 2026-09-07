---
qid: ing_5a93f1f19e__aws__local
question: 'Explain: Most Recently Used (MRU) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 631
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:50:30-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science team at my previous startup, we built a real‑time recommendation engine that served millions of users daily. The latency budget was 10 ms, yet the in‑memory feature cache hit rate dropped from **92 % to 68 %** during peak traffic. I had to design an eviction strategy that would keep hot features while staying within our 8 GB RAM limit.

**Action (Design)**  
I evaluated seven MRU‑based eviction policies and selected a hybrid approach:

| Strategy | AWS Service | Reasoning |
|----------|-------------|-----------|
| **Least Recently Used (LRU)** | Amazon ElastiCache Redis – `volatile-lru` | Proven for generic cache workloads. |
| **Time‑to‑Live (TTL) + LRU** | ElastiCache Redis – `maxmemory-policy volatile-ttl` | Keeps items that expire quickly out of the pool. |
| **Frequency‑Based MRU** | Amazon DynamoDB Streams + Lambda | Tracks access counts; evicts least frequently used. |
| **Segmented LRU (SLRU)** | Custom Go microservice on ECS | Separates hot vs cold segments for 2× hit rate improvement. |
| **Priority‑Aware Eviction** | AWS Step Functions + SQS | Assigns priority to business‑critical keys; evicts low‑priority ones first. |
| **Adaptive MRU** | Amazon SageMaker – reinforcement learning model | Learns eviction policy from live traffic patterns. |
| **Hybrid LRU+TTL+Priority** | Combined Redis policies with Lambda triggers | Gives us the best of all worlds, achieving a 94 % hit rate. |

I deployed this on an **ECS cluster** behind a **Application Load Balancer**, using **Auto Scaling** to add cache nodes during traffic spikes. The cost per request fell from **$0.004** to **$0.0015** while latency stayed under 8 ms.

**Result**  
The new eviction strategy lifted the hit rate to **94 %**, reduced average latency from **18 ms to 6 ms**, and cut infrastructure spend by **35 %** over six months—meeting our quarterly KPI of 20 % performance improvement.  

**Reflection (Bar‑raiser cues)**  
*Ownership*: I took end‑to‑end responsibility for the cache layer.  
*Dive Deep*: I quantified hit rates, latency, and cost per request before and after changes.  
*Learning from Failure*: Initial attempts with pure LRU caused “hot‑spot” memory churn; the hybrid model fixed that by adding priority awareness.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Faster recommendations directly improved user satisfaction.  
- **Ownership & Dive Deep**: I owned the cache performance, deeply analyzed metrics, and iterated until we hit the target.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
