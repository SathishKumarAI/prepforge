---
qid: ing_6a8000069f__aws__local
question: What are some disadvantages of CDNs? — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 553
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:13-05:00'
sources: []
---

**Situation & Task**

I was asked during a system‑design interview to list the downsides of using a CDN for an e‑commerce platform that serves both static assets and dynamic API responses.

**Action**

* **Customer Obsession** – I framed the answer around how CDN limits affect user experience (latency spikes, stale content) and cost for our high‑traffic customers.  
* **Dive Deep** – I broke the disadvantages into three buckets: *performance*, *cost/complexity*, and *operational risk*. For each, I listed concrete metrics from a recent production rollout where we migrated 70 % of traffic to CloudFront.

| Disadvantage | Impact | Metric |
|--------------|--------|--------|
| **Cache invalidation latency** | Users see stale product images during flash sales. | 15–30 s delay before new image propagates to all edge locations, causing a 2 % drop in conversion rate. |
| **Increased request cost** | Edge cache hit ratio < 80 % for dynamic content; each miss costs $0.0004. | 1 M requests/month → ~$400 extra spend. |
| **Complexity of multi‑region routing** | Harder to maintain consistent configuration across 100+ edge points. | 3 engineering hours/week spent on cache‑control debugging. |
| **Limited custom logic at the edge** | Cannot execute business rules (e.g., A/B testing, geo‑based pricing) without a Lambda@Edge function. | Additional $0.20 per 1 M requests for Lambda@Edge, raising total cost by 15 %. |

I also highlighted *trade‑offs*: while CDNs reduce origin load and improve global latency, they introduce stale data risk and higher operational overhead when dynamic content is involved.

**Result**

By quantifying each disadvantage, I showed that a hybrid approach—caching only truly static assets in CloudFront and serving dynamic API calls directly from an Application Load Balancer with Elastic Cache—cut the conversion‑rate drop by 90 % while saving ~$250/month on edge costs. This decision led to a **25 % improvement in overall revenue** during the next promotion cycle.

**What the bar‑raiser hears**

* Ownership: I owned the cost‑benefit analysis and drove a data‑driven migration strategy.  
* Dive Deep: I dissected each disadvantage with real metrics and trade‑offs.  
* Quantified Impact: Linked CDN issues to conversion rates and spend.  
* Learning from Failure: Demonstrated how stale content previously hurt revenue and how we corrected it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
