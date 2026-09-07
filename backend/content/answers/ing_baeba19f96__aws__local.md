---
qid: ing_baeba19f96__aws__local
question: 'Explain: Data: Scalable permission-aware indexing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 436
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:14-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a feature that exposed an enterprise‑wide search index to 200 + micro‑services while respecting fine‑grained IAM permissions. The goal was to reduce query latency from **350 ms** to under **80 ms** and cut storage costs by 30 %.

**Action**  
I architected a *permission‑aware* inverted index on Amazon OpenSearch Service, backed by DynamoDB for access control metadata.  

1. **Data Ingestion** – Lambda streams document updates from Kinesis into OpenSearch, tagging each shard with an ACL bitmap stored in DynamoDB (partition key = `indexId`).  
2. **Query Path** – API Gateway + Cognito authenticates users; a custom authorizer fetches the bitmap and injects a filter query (`_source` field) directly into OpenSearch.  
3. **Scalability & Availability** – 3‑AZ OpenSearch cluster, automatic index rollover every 30 days, and DynamoDB Global Tables for cross‑region reads.  
4. **Cost Control** – Spot instances for ingestion nodes and reserved instances for search tier reduced compute spend by 22 %.  

**Result**  
Latency dropped to **72 ms** (avg) with a 99th percentile of **120 ms**, and storage costs fell from $12k/month to $8.4k/month. User satisfaction scores improved by 18 % on the internal survey.

**Reflection**  
I practiced *Ownership* by owning the entire pipeline, *Dive Deep* through profiling each component, and *Bias for Action* by iterating in two‑week sprints. The bar‑raiser will notice my quantitative impact, my use of AWS best practices, and how I learned from an initial 200 ms spike caused by stale ACL caching—leading to the bitmap strategy that eliminated it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
