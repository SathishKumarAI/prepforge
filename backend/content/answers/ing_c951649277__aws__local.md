---
qid: ing_c951649277__aws__local
question: 'Explain: Metadata Filtering — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 515
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:53-05:00'
sources: []
---

**Context & Challenge (S)**  
At my previous role I led a product that let users search millions of research papers using AI embeddings. Our customers complained that irrelevant “metadata‑heavy” results flooded their feeds, hurting engagement by 18 %. The goal was to filter vectors on metadata before the similarity query without adding latency.

**Action (T&A)**  
I **owned** the feature and formed a cross‑functional squad. I scoped requirements: filter by author, year, journal, and open‑access flag; keep end‑to‑end latency < 200 ms; support 10M vectors with >99 % uptime.  

1. **Design** – We built a two‑stage pipeline on AWS:  
   * **Metadata index** in DynamoDB (partitioned by author+year) for O(1) lookups.  
   * **Vector store** in Amazon Kendra’s vector search layer, backed by an ElasticSearch cluster with fine‑tuned shard allocation.  

2. **Implementation** – A Lambda function pre‑filters candidate IDs from DynamoDB and streams them to the vector query via SQS, keeping the latency budget. We added CloudWatch metrics for hit ratios and query times.

3. **Testing & Rollout** – Performed a canary on 5 % of traffic; observed a 35 % drop in irrelevant results and a 12 % lift in click‑through rate.

**Result (R)**  
Within two weeks post‑rollout, overall search relevance improved by **27 %**, leading to a 9 % increase in user retention. Cost remained below $200/month due to DynamoDB’s on‑demand pricing and the reduced number of vector queries.

---

### Leadership Principles Highlighted
- **Customer Obsession** – directly addressed user pain points with measurable uplift.  
- **Ownership & Bias for Action** – drove end‑to‑end solution, from design through deployment.  

### Bar‑raiser Signals
- Demonstrated *deep dive* into system trade‑offs (latency vs. cost).  
- Quantified impact with real metrics (click‑through, retention).  
- Reflected on failure: initial single‑stage approach caused 300 ms latency; pivoted to two‑stage pipeline after A/B testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
