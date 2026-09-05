---
qid: ing_085f2da5ce__star__local
question: 'Explain: Make it together — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 331
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:45:45-05:00'
sources: []
---

**Situation** – At Glean I joined a cross‑functional squad tasked with launching the “Work AI” knowledge engine for our enterprise clients. The product had to surface relevant documents across Slack, Teams, and email in under two seconds while respecting privacy policies.

**Task** – My responsibility was to design and implement the retrieval pipeline that could ingest thousands of internal docs, index them efficiently, and rank results using contextual embeddings—all within a 10‑minute latency window.

**Action** – I started by profiling our data sources with Apache Kafka to stream changes in real time. Using Milvus for vector storage, I engineered an approximate nearest neighbor index with HNSW that reduced query times from 800 ms to 150 ms. For ranking, I fine‑tuned a RoBERTa model on labeled “relevant vs. irrelevant” pairs and wrapped it in a FastAPI microservice behind a Redis cache. I also introduced differential privacy checks to flag sensitive content before delivery.

**Result** – The final system returned top‑k results in 120 ms on average, boosting user satisfaction scores from 68% to 92% in beta tests. We cut the overall search latency by 85% and achieved a 40% reduction in support tickets related to “missing documents.” This project taught me how to blend large‑scale ML with real‑world engineering constraints to deliver tangible business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
