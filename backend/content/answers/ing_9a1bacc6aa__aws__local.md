---
qid: ing_9a1bacc6aa__aws__local
question: 'Explain: Size-based Eviction — CachesExplained \u00b7 google/guava Wiki
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 399
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:14-05:00'
sources: []
---

**Situation & Task**  
I was leading a micro‑service that served personalized product feeds to ~3 M daily users. The in‑memory cache (Guava) grew beyond 1 GB and started evicting hot items unpredictably, causing a 12% spike in DB read latency.

**Action**  
- **Dive Deep:** I profiled the eviction logs; the default *size‑based* policy removed entries with the lowest “weight” (bytes), not considering recency.  
- **Ownership & Bias for Action:** I re‑engineered the cache to use a *Least‑Recently‑Used (LRU)* strategy with a max weight of 800 MB, and added an *eviction listener* that logged evicted keys to CloudWatch.  
- **AWS Design:** I replaced Guava with **Amazon ElastiCache Redis** using the `volatile-lru` eviction policy, set `maxmemory-policy=allkeys-lru`, and enabled `auto_aof_rewrite_percentage=100`. This gave us automatic persistence and sharding across 3 AZs.  
- **Cost/Availability:** The new cache cost $0.20/h (vs $1.50 for the old setup) while maintaining 99.99% availability.

**Result**  
Cache hit rate jumped from 68 % to 92 %, DB read latency fell by 27 %, and overall response time improved by 18 %. I documented lessons in a post‑mortem, highlighting that “size‑based” eviction can be misleading when weights vary widely. This experience reinforced my focus on **Customer Obsession** (better UX) and **Ownership** (owning the entire caching layer).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
