---
qid: ing_fe578448fa__aws__local
question: 'Explain: Thunder Herd Problem — How Can Cache Systems Go Wrong?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 462
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:53:13-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a team that built a real‑time recommendation engine for an e‑commerce platform. Our cache layer (Redis‑based) was meant to serve the “thunder herd” of traffic spikes during flash sales, but we kept seeing cache misses and degraded latency.

**Action**  
I first **dove deep** into the cache eviction policy and hit‑ratio logs. We discovered that a single “hot key” (top product ID) was being refreshed every 2 seconds by an upstream batch job, causing all workers to evict it before they could read it – the classic thunder herd problem.

I redesigned the architecture:
- **Cache-aside** with *AWS ElastiCache* and *Amazon DynamoDB Streams* to publish key‑update events.
- A **publisher/subscriber** pattern using *SNS* so that only one worker (the “leader”) updates the cache, while others read from it.
- Added a **retry & exponential backoff** logic in workers and enabled *Redis Cluster* with partitioning for horizontal scalability.

I also set up CloudWatch metrics to monitor hit‑ratio, eviction count, and latency.

**Result**  
Post‑refactor, cache hit‑ratio jumped from 68 % to **97 %**, average request latency dropped by **42 %** (from 350 ms to 210 ms), and the cost of ElastiCache usage fell by **18 %** due to reduced node churn. The system now comfortably handles a 5× traffic surge during sales events.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Delivered faster, more reliable recommendations.
- **Ownership & Bias for Action:** Took end‑to‑end responsibility and deployed the fix in under 48 hours.

**Bar‑raiser cues I’d listen for:**  
- Quantified impact (hit‑ratio, latency, cost).  
- Depth of technical reasoning (why the pattern solves thunder herd).  
- Demonstrated learning from failure (recognizing eviction patterns).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
