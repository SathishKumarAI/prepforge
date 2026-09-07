---
qid: ing_57109faba2__aws__local
question: 'Explain: Script based sorting — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 411
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:58-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When we launched the marketplace search in Q2 2023, customers complained that product listings for “wireless earbuds” were sorted by relevance but often buried behind irrelevant brands. I owned the feature to re‑rank results using a **scripted sort** in Elasticsearch so that high‑margin SKUs surfaced first without compromising accuracy.

**Action (Dive Deep & Ownership)**  
1. Analyzed 12M query logs → identified 3 key metrics: *click‑through rate (CTR)*, *time‑to‑purchase*, and *search abandonment*.  
2. Built a **Painless script** that added a weighted score: `score + (brand_popularity * 0.6) + (stock_level * 0.4)`.  
3. Implemented the script via an Elasticsearch ingest pipeline, deploying it in a blue‑green fashion on **Amazon OpenSearch Service** to avoid downtime.  
4. Monitored impact with real‑time dashboards (CloudWatch + Grafana).  

**Result (Deliver Results)**  
- CTR increased from 12% → 18% (+50%) for the target category.  
- Time‑to‑purchase dropped by 1.2 s, translating to a projected $3.5M lift in quarterly revenue.  
- CPU usage grew only 8%, remaining well below the reserved capacity threshold; cost impact was < $200/month.

**Bar‑raiser notes**  
I demonstrated **ownership** by driving the end‑to‑end pipeline, used **dive deep** to tune the script weights, quantified impact with concrete metrics, and iterated on failures (initial over‑scoring of low‑margin SKUs) to refine the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
