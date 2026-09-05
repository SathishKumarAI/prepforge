---
qid: ing_0990e665f3__fp__local
question: 'Explain: Engineering — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 356
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:26:00-05:00'
sources: []
---

**Engineering at Glean – why it matters and how it works**

Glean is a *search‑as‑a‑service* platform that turns scattered corporate data (emails, docs, tickets) into one searchable index. The core engineering problem is **“how do you ingest, normalize, and retrieve terabytes of heterogeneous, noisy text in real time while preserving privacy?”**  

1. **Data ingestion**: Engineers build robust pipelines that pull from APIs, webhooks, or on‑prem connectors. They must design *schema‑agnostic* parsers that can map any file type to a common vector space.  
2. **Vectorization & indexing**: Using transformer models, the team converts text into high‑dimensional embeddings. The engineering challenge is to keep these embeddings small enough for GPU inference yet expressive enough for semantic search—an optimization between *information fidelity* and *latency*.  
3. **Retrieval & ranking**: They deploy approximate nearest‑neighbor indexes (FAISS/Annoy) that trade off recall vs speed, tuning hyperparameters through A/B tests to meet SLAs.  

A non‑obvious insight: **privacy is a first‑class constraint, not an afterthought.** Engineers embed differential privacy noise *during vectorization*, ensuring that no single user’s data can be reconstructed from the index. This design choice keeps compliance in the loop while preserving search quality.

Thus, Glean engineers are essentially *architects of scalable, private semantic knowledge graphs*—turning chaotic data into actionable insight at speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
