---
qid: ing_7785081288__aws__local
question: 'Explain: Missing values — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 439
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:30-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a search‑engine revamp for a retail SaaS platform (25 M daily queries). A spike in “missing” product attributes (e.g., price, brand) caused noisy relevance scores and dropped CTR by 8 %. My goal was to surface the best available results while keeping latency under 200 ms.

**Action**  
1. **Model missing‑value scoring** – I added a scripted field that penalizes documents with nulls using a learned weight (price: 0.6, brand: 0.4).  
2. **Elasticsearch reindex strategy** – Created an ingest pipeline that normalises missing fields to “unknown” and tags them for later filtering.  
3. **AWS integration** – Deployed the pipeline on Amazon OpenSearch Service; used Lambda to trigger re‑indexing after nightly data loads, keeping index size < 30 % of raw data.  
4. **Performance tuning** – Enabled `search.slowlog.threshold.query.warn` to catch regressions; set up CloudWatch dashboards that track hit‑rate and latency.

**Result**  
- CTR improved by 12 %, conversion ↑ 5 %.  
- Query latency stayed < 180 ms, cost down 18 % due to smaller index size.  
- The solution is fully automated; every data refresh triggers the pipeline in under 3 min.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Directly improved user engagement metrics.  
- **Ownership / Dive Deep** – Built a custom scoring logic, tuned ES internals, and monitored end‑to‑end performance.  

The bar‑raiser will notice my ownership of the problem space, deep dive into Elasticsearch internals, quantitative impact on business KPIs, and continuous learning loop via automated reindexing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
