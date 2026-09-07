---
qid: ing_21447b76b3__aws__local
question: 'Explain: Caching — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 512
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:27-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI Ops team at a SaaS company, our ML‑driven anomaly detector was hitting a 3 s latency threshold on production traffic, causing SLA breaches for high‑value clients. The challenge: cache feature vectors and model inference results without compromising freshness or correctness.

**Action – Design & Implementation**  
1. **Requirements**:  
   * Latency < 800 ms per request.  
   * Cache invalidation every 5 min (feature drift).  
   * 99.9% availability across two AZs.  

2. **Architecture**  
   * **Amazon ElastiCache‑Redis** as a read‑through cache for feature vectors, leveraging its in‑memory speed and automatic partitioning.  
   * **AWS Lambda** with **SQS FIFO** to pre‑warm model predictions on a schedule (5 min TTL).  
   * **API Gateway + Lambda@Edge** to route requests; if miss → compute locally, store result back to Redis.  

3. **Scalability & Cost**  
   * 2‑node Redis cluster with auto‑scaling; peak memory 200 GB → $0.30/hr per node.  
   * Lambda cost negligible (~$0.0000167 per 1M invocations).  
   * Reduced backend compute by 70%, cutting EC2 spend from $4k/month to $1.3k.

**Result**  
- Latency dropped from 3 s to **650 ms (78% improvement)**.  
- SLA compliance rose from 92% to **99.8%**.  
- Monthly cost saved: **$2.7k**, freeing budget for model research.

**Reflection – Bar‑raiser Lens**  
I owned the end‑to‑end pipeline, dove deep into Redis eviction policies, and iterated on TTLs based on real drift metrics. The biggest learning was that “cache invalidation is as critical as cache hits”; an early failure with a 1 h TTL caused stale predictions, so I instituted continuous monitoring (CloudWatch alarms) to trigger immediate refreshes when drift exceeded 5%. This cycle of hypothesis → measurement → adjustment exemplifies **Ownership** and **Dive Deep**—the very principles Amazon prizes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
