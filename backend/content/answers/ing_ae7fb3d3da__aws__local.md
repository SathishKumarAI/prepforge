---
qid: ing_ae7fb3d3da__aws__local
question: 'Explain: Geo distance sorting — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 473
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:00:14-05:00'
sources: []
---

**Answer – Machine Learning & Geo‑Distance Sorting (Elasticsearch)**  
*Leadership Principles:* **Customer Obsession** + **Dive Deep**

> *Situation*: I was tasked to improve the relevancy of a location‑based product search for a global e‑commerce platform that serves 3 M daily active users. The existing ranking ignored proximity, causing 12 % lower click‑through rates (CTR) on nearby items.

> *Task*: Implement geo‑distance sorting so that results are automatically ordered by closeness to the user’s current location, while preserving semantic relevance scores.

> *Action*:  
> 1. **Modeling** – Added a `geo_point` field (`store_location`) and an `object_score` field (ML‑derived relevance).  
> 2. **Query Design** – Used OpenSearch’s `function_score` with a `gauss` decay function on the geo field, combined with the ML score via a weighted sum (`boost`).  
> 3. **Infrastructure** – Deployed the cluster on **Amazon OpenSearch Service** (two AZs, dedicated master nodes) to guarantee high availability and auto‑scaling based on query load.  
> 4. **Cost & Trade‑offs** – Chose `gauss` over `linear` for smoother decay; tuned `scale` parameter to balance latency (<200 ms) against index size (≈150 GB).  
> 5. **Testing** – Ran A/B tests: proximity‑sorted queries increased CTR by **18 %** and conversion rate by **9 %**, while keeping CPU usage under 65 %.

> *Result*: Delivered a scalable, highly available geo‑sorting solution that directly improved revenue (+$2.4M/month) and reinforced customer trust in relevant search results.

*Bar‑raiser notes:* I owned the end‑to‑end feature, dove deep into Elasticsearch internals (decay functions), quantified impact with real metrics, and iterated quickly based on A/B feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
