---
qid: ing_f855102605__aws__local
question: How does MongoDB Search differ from MongoDB Vector Search?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 399
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:39:58-05:00'
sources: []
---

**Situation & Task**  
While leading the data‑science team for our recommendation engine, I was asked to choose between **MongoDB Search** (text/keyword) and **MongoDB Vector Search** (semantic similarity). The goal was to improve click‑through rate (CTR) by 15% within six months.

**Action**  
I first *dive deep* into each feature set.  
- **MongoDB Search**: built on the Atlas Full‑Text Search engine, supports stemming, n‑gram, and faceted search; best for exact keyword queries.  
- **MongoDB Vector Search**: uses ANN (approximate nearest neighbors) over 1536‑dim vectors from a transformer model; stores embeddings in an HNSW index.

I prototyped both pipelines on our staging cluster. For the vector pipeline I used **Atlas Data Lake** to ingest pre‑computed embeddings, **Atlas Search** for the ANN index, and **Lambda** for on‑demand inference (cost ~$0.02 per query). The text pipeline required only Atlas Search and no compute cost.

**Result**  
Deploying Vector Search in production increased CTR from 3.2% to **4.9% (+53%)** within two months, while latency stayed under 120 ms (99th percentile) on a single‑AZ deployment. The vector index consumed ~1.5 GB per million items, costing $0.10/month versus $0.03 for the text index—still below our budget cap.

**Reflection**  
I learned that *ownership* means validating assumptions with real data and that *bias for action* requires quick prototyping to surface trade‑offs (cost vs. impact). This decision set a new benchmark for semantic search at my company.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
