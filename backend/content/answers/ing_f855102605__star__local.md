---
qid: ing_f855102605__star__local
question: How does MongoDB Search differ from MongoDB Vector Search?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 331
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:45:15-05:00'
sources: []
---

**Situation** – In mid‑2024 I was leading the migration of our recommendation engine for a media streaming app that had 12 million users. Our analytics team noticed that content relevance scores were lagging behind user engagement by about 18 %, so we needed to improve how we searched for similar videos.

**Task** – My goal was to replace the legacy text‑based search with a modern vector similarity engine while keeping query latency under 200 ms and preserving our existing indexing pipeline.

**Action** – I first evaluated MongoDB Search, which uses inverted indexes and BM25 scoring; it’s great for keyword matching but not for high‑dimensional embeddings. Then I implemented MongoDB Vector Search (the new Atlas vector search feature) by creating a dense 384‑dimensional embedding for each video using an ONNX‑based CLIP model. I stored these vectors in a `vector` field and built a specialized ANN index with HNSW, tuning the `efSearch` parameter to balance speed and accuracy. I also set up a fallback that ran MongoDB Search when the query string was empty or contained stopwords, ensuring backward compatibility.

**Result** – The vector search reduced content relevance errors by 27 % and increased click‑through rate from 3.8 % to 5.1 % within two weeks of rollout. Latency stayed below 180 ms, meeting our SLA. I learned that while MongoDB Search is still essential for keyword filtering, combining it with vector search unlocks semantic relevance without a full database redesign.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
