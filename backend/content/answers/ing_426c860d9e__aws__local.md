---
qid: ing_426c860d9e__aws__local
question: 'Explain: Counting Bloom Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 480
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:19-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my previous company we had a real‑time fraud detection pipeline that ingested ~5 M events/sec. A naive deduplication step stalled the stream and caused a 12 % latency spike, eroding our SLA to under 200 ms.

**Action (Dive Deep + Ownership)**  
I introduced a **Counting Bloom Filter (CBF)** as an in‑memory probabilistic cache before the heavy downstream service.  
*Requirements*:  
- False‑positive < 0.5 %  
- Memory ≤ 2 GB per node  
- Support for 100 k inserts/sec with deletions after 30 s window  

**Design & AWS Services**  
1. **Amazon ElastiCache Redis** (cluster mode) – used as the distributed CBF store; each key is a hashed bucket value, and its integer counter stores occurrence count.  
2. **AWS Lambda + Kinesis Data Streams** – transforms incoming events into hash tuples, updates Redis counters atomically (`INCRBY`).  
3. **Amazon CloudWatch Metrics** – tracks hit/miss ratios and auto‑scales the cache based on load.  

*Scalability*: Redis sharding keeps latency < 2 ms even at 10× traffic; horizontal scaling is automatic.  
*Availability*: Multi-AZ replication + backup ensures zero single point of failure.  
*Cost*: 4 GB nodes cost ~$200/month vs a legacy 20 GB RDS instance at ~$1k/month.

**Result (Deliver Results)**  
Latency dropped from 210 ms to **82 ms** (61 % improvement). The false‑positive rate stayed < 0.3 %. The solution also cut downstream processing load by ~35 %, freeing compute for other ML tasks.

**Learning & Bar‑raiser Insight**  
I iterated on hash function choice after profiling collisions; we switched from Murmur3 to CityHash, reducing counter overflows by 27 %. I documented the trade‑offs (memory vs. accuracy) and shared a post‑mortem with the team, reinforcing a culture of data‑driven ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
