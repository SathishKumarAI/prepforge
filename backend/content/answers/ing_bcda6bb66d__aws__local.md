---
qid: ing_bcda6bb66d__aws__local
question: 'Explain: Features — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 473
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:30:31-05:00'
sources: []
---

**Situation & Task**  
At a previous e‑commerce platform I led the migration from legacy search to **Apache Solr** to power a recommendation engine that fed personalized product feeds. The goal was to expose rich, searchable features (price, brand, user‑review sentiment) so our ML model could ingest structured attributes without re‑engineering pipelines.

**Action – Feature Design & Implementation**  
- **Schema Design:** Added dynamic fields for *numeric* (`*_i`, `*_f`) and *textual* (`*_t`) attributes; created copyFields to aggregate raw logs into a single `features` field.  
- **Faceting & Copying:** Leveraged Solr’s *facet* API to pre‑aggregate counts of categorical tags (e.g., brand, category) that our ML model uses as one‑hot encodings.  
- **Solr Analytics Plugin**: Implemented a custom Java plugin to compute TF‑IDF vectors on the fly for review snippets, exposing them via Solr’s *JSON Facet API* for downstream ingestion into SageMaker.  
- **Scalability:** Deployed Solr on an Auto Scaling group behind an Application Load Balancer; used SolrCloud shards (3 replicas) to ensure 99.9 % availability and horizontal scaling as query volume grew.

**Result**  
- Reduced feature‑engineering time from **4 weeks** to **1 day** per iteration.  
- Achieved a **12 % lift** in recommendation click‑through rate within two months of deployment, directly attributable to richer, real‑time features extracted by Solr.  

---

### Leadership Principles Highlighted
- **Customer Obsession:** Delivered instant, accurate features that improved user engagement.  
- **Ownership & Dive Deep:** Architected the full feature pipeline, from schema design to production scaling, and continuously tuned for performance.

> *Bar‑raiser note:* Listen for ownership of end‑to‑end solutions, depth in Solr’s feature mechanisms, quantified impact (CTR lift), and lessons learned—e.g., fallback strategies when a shard becomes unhealthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
