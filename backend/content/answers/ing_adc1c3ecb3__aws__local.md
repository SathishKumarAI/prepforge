---
qid: ing_adc1c3ecb3__aws__local
question: 'Explain: Cache frequently accessed URLs — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 386
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:26-05:00'
sources: []
---

**Situation & Task**  
At a startup I led the migration of our URL‑shortener (TinyURL) from a monolithic PHP stack to a micro‑service architecture on AWS. The service handled ~1 M requests/day; latency spikes were hurting customer experience.

**Action**  
*Customer Obsession & Ownership*: I identified that 70 % of hits came from just 5 % of the URLs, so caching was critical.  
I designed a **two‑tier cache**:  

1. **In‑memory LRU cache** (Redis) per instance for ultra‑fast lookup (≤0.3 ms).  
2. **Global CDN layer** (Amazon CloudFront + Lambda@Edge) to serve the top 10 % of URLs with zero‑latency globally.

*Dive Deep & Bias for Action*: I instrumented metrics in CloudWatch, set up a CI pipeline that auto‑scales Redis nodes based on CPU/eviction rate, and implemented a fallback to DynamoDB if both caches miss.  

**Result**  
- Latency dropped from 120 ms (average) to **<5 ms** for cache hits.  
- Traffic served by CDN increased from 10 % to **48 %**, reducing backend load by 60 %.  
- Cost savings: Redis cluster cost <$200/month vs $1,500/month previously, while CloudFront added only ~$50/month.

**Reflection (Bar‑raiser)**  
I took full ownership of the redesign, documented trade‑offs (e.g., eventual consistency in DynamoDB), and iterated based on real user data. The success is measurable, scalable to 10× traffic, and aligns with Amazon’s *Customer Obsession* and *Deliver Results* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
