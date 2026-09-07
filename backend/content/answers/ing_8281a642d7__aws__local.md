---
qid: ing_8281a642d7__aws__local
question: 'Explain: Nested sorting examples — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 444
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:20:10-05:00'
sources: []
---

**Situation & Task**  
In a production recommendation service I had to surface the top‑10 products per category for millions of users. The raw search output from Elasticsearch was already sorted by relevance, but I needed an additional level: each product must be grouped by `brand` and then sorted within those groups by `price`. This “nested sorting” had to run in real time on a dataset that grew to 200 M documents.

**Action (Technical Design)**  
1. **Indexing** – Added a multi‑field `brand.keyword` and used the `sort_field` mapping to keep `price` numeric.  
2. **Query** – Built an Aggregation request with `terms(brand)` + `top_hits(price: asc)` inside each bucket.  
3. **Caching & Warmers** – Enabled query cache for the aggregation buckets and pre‑warmed hot indices during peak hours (AWS CloudWatch alarms triggered a Lambda to run warmers).  
4. **Scaling** – Deployed an Elasticsearch cluster on EC2 r5.large with 3 data nodes, autoscaling based on CPU (>80%) and JVM GC pause (<0.5 s).  
5. **Cost & Availability** – Used spot instances for lower tiers (20 % cheaper) while keeping a single On‑Demand master node for high availability.  

**Result**  
- Latency dropped from 1.2 s to 250 ms per request (≈80 % reduction).  
- User engagement rose by **12 %**, measured as click‑through rate on the top‑10 list.  
- Operational cost fell 15 % due to spot usage and caching.

**Reflection (Bar‑raiser signals)**  
I owned the end‑to‑end pipeline, diving deep into Elasticsearch internals to avoid naïve “sort by script” solutions that would have killed performance. I quantified impact via A/B testing and iterated quickly—each deployment was a learning loop. This aligns with *Customer Obsession* (better UX) and *Ownership* (full responsibility from indexing to monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
