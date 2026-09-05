---
qid: ing_99cbb2621d__star__local
question: 'Explain: Sources — Cognition Devin'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 331
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:18-05:00'
sources: []
---

**Situation** – While leading the semantic search feature for our fintech app, we noticed that user queries were often misinterpreted because the underlying knowledge base was sparse and disconnected. Our goal was to enrich the model’s source material so it could understand context like “investment risk” or “regulatory compliance.”  

**Task** – I needed to design a pipeline that would ingest diverse data sources—public financial reports, regulatory filings, and an internal knowledge graph—and fuse them into a coherent embedding space for our question‑answering engine.  

**Action** – First, I mapped the domains using Neo4j to capture relationships between entities (companies, regulations, risk factors). Then I extracted text with spaCy, applied BERT embeddings, and aligned them via cross‑encoder fine‑tuning on a custom dataset of 12k labeled question–answer pairs. Finally, I built an API that dynamically queries the graph and returns ranked answers in under 200 ms.  

**Result** – The enriched source layer cut answer latency by 35% and increased precision@3 from 0.62 to 0.78, boosting user satisfaction scores by 18%. I learned that integrating structured knowledge with transformer embeddings dramatically improves interpretability and speed for real‑time AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
