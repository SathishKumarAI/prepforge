---
qid: ing_10a82ddae7__star__local
question: 'Explain: Encoding Phase — Late Interaction Colbert'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 343
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:01:43-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building a real‑time document search engine for loan applications. Our existing retrieval pipeline was too slow: each query had to scan the entire index, and latency exceeded our SLA of 150 ms.

**Task** – I needed to redesign the encoding stage so that queries could be matched against pre‑computed embeddings with minimal computation at query time, while preserving top‑k accuracy above 95%.

**Action** – I implemented a late‑interaction model inspired by ColBERT. First, I split each document into sliding windows and fed them through a lightweight BERT encoder (distilBERT) to produce dense vectors stored in an IVF index. At query time, only the query text was encoded once per request; then we performed element‑wise maximum interaction across token embeddings with the pre‑encoded document windows before ranking. I tuned the number of windows and batch size using Ray Tune, balancing GPU memory against recall.

**Result** – The new pipeline cut query latency from 1.2 s to 90 ms on average, while recall@10 improved from 88% to 94%. I learned that moving heavy token‑wise operations offline (encoding phase) and reserving only a lightweight interaction step for runtime can dramatically scale search without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
