---
qid: ing_909c08412d__aws__local
question: 'Explain: Least Frequently Used (LFU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 373
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:52:56-05:00'
sources: []
---

**Situation / Task**  
I was leading a feature‑engineering sprint for our recommendation engine that served 5 M users daily. The in‑memory cache (Redis) was growing beyond capacity; eviction policy decisions directly impacted latency and revenue.

**Action**  
I proposed replacing the default *Least Recently Used* (LRU) with **Least Frequently Used (LFU)** because user access patterns were skewed: a small set of items drove most traffic. I designed an LFU layer on top of Redis using `redis-lfu` module, and added a 10‑minute sliding window counter in DynamoDB to track hit counts per key. The eviction algorithm queried DynamoDB for the lowest frequency keys when space was needed.  

I ran A/B tests:  
- **Latency** dropped from 250 ms to 120 ms (48 % improvement).  
- **Cache hit ratio** rose from 68 % to 85 %.  
- **Revenue lift** was projected at $3.2 k/day based on conversion rates tied to latency.

I used CloudWatch dashboards and automated Lambda cleanup jobs, keeping costs under $200/month while scaling horizontally across three AZs for high availability.

**Result**  
The new LFU policy delivered a 30 % reduction in average response time and a 25 % increase in revenue, meeting the quarterly KPI.  

**Leadership Principles** – *Customer Obsession* (improved user experience), *Ownership* (full end‑to‑end implementation), *Dive Deep* (profiling traffic patterns), *Bias for Action* (rapid A/B testing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
